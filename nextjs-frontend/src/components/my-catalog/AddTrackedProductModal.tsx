// import {
//     Alert,
//     Button, CircularProgress,
//     FormControl,
//     FormControlLabel,
//     FormGroup,
//     InputLabel,
//     Modal,
//     Switch,
//     TextField,
//     Typography
// } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {TrackedProduct} from "../../model/TrackedProduct";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useUpdateTrackedProduct} from "../../hooks/products/useUpdateTrackedProduct";
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";
import {useAddTrackedProducts} from "../../hooks/products/useAddTrackedProducts";
import {AddedTrackedProduct} from "../../model/AddedTrackedProduct";
import Paper from "@mui/material/Paper";


interface AddProductModalProps {
    open: boolean;
    onClose: () => void;
}

const productUpdateSchema = z.object({
    ean: z.string(),
    manufacturerCode: z.string(),
    productPurchaseCost: z.number().positive("Purchase cost has to be positive.").or(z.string().regex(/^\d*\.?\d+$/).min(1, "Purchase cost must be greater than 0.").transform(value => parseFloat(value))),
    productSellPrice: z.number().positive("Sell price has to be positive.").or(z.string().regex(/^\d*\.?\d+$/).min(1, "Sell price must be greater than 0.").transform(value => parseFloat(value))),
    minPrice: z.number().positive("Min price has to be positive.").or(z.string().regex(/^\d*\.?\d+$/).min(1, "Min price must be greater than 0.").transform(value => parseFloat(value))).or(z.null())
})

export function AddTrackedProductModal({open, onClose}: AddProductModalProps) {

    const [submissionError, setSubmissionError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {addTrackedProductsMutation} = useAddTrackedProducts();
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(productUpdateSchema)
    })


    const {errors, isLoading} = formState;


    function handleProductUpdateSubmit() {
        setSubmissionError(false);
        const {ean, manufacturerCode, productPurchaseCost, productSellPrice, minPrice} = watch();

        const addedTrackedProduct: AddedTrackedProduct = {
            ean,
            manufacturerCode,
            productPurchaseCost,
            productSellPrice,
            minPrice
        }

        addTrackedProductsMutation(addedTrackedProduct).then(r => {
            setSuccess(true)
        }).catch(e => {
            setSubmissionError(true)
        });
    }


    function Form() {
        return (<form style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "3rem",
            padding: "2rem"
        }} onSubmit={handleSubmit(handleProductUpdateSubmit)}>
            <Typography variant={"h5"}>Add a product to track</Typography>

            <TextField type={"number"}
                       error={!!errors.productPurchaseCost}
                       helperText={errors.productPurchaseCost?.message?.toString()}
                       {...register('productPurchaseCost')}
                       placeholder={"Purchase cost"}
                       label={"Purchase cost"}
            />
            <TextField type={"number"}
                       error={!!errors.productSellPrice}
                       helperText={errors.productSellPrice?.message?.toString()}
                       {...register('productSellPrice')}
                       placeholder={"Sell price"}
                       label={"Sell price"}
            />

            <TextField type={"number"}
                       error={!!errors.minPrice}
                       helperText={errors.minPrice?.message?.toString()}
                       {...register('minPrice')}
                       placeholder={"Minimum price"}
                       label={"Minimum price"}
            />


            <FormGroup sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem"
            }}>
                <TextField sx={{marginTop: "0.5rem"}}
                           type={"text"}
                           error={!!errors.ean}
                           helperText={errors.ean?.message?.toString()}
                           {...register('ean')}
                           placeholder={"EAN"}
                           label={"EAN"}
                />
                <Typography variant={"caption"}>OR</Typography>
                <TextField sx={{marginTop: "0.5rem"}}
                           type={"text"}
                           error={!!errors.manufacturerCode}
                           helperText={errors.manufacturerCode?.message?.toString()}
                           {...register('manufacturerCode')}
                           placeholder={"Manufacturer code"}
                           label={"Manufacturer code"}
                />
            </FormGroup>


            <Button type={"submit"} variant={"contained"} sx={{maxWidth: "50%"}}>Save</Button>
            {isLoading ? <CircularProgress/> : ''}
            {submissionError ?
                <Alert variant={"filled"} severity={"error"}> Error adding the product.</Alert> : ''}
        </form>)
    }

    function SuccessMessage() {
        return (
                <Alert sx={{padding:"1rem"}} variant={"filled"} severity={"success"}>Product added successfully.
                    <Button sx={{margin:'1rem'}} variant={"contained"} onClick={onClose}>Ok</Button>
                </Alert>
        )
    }

    return (
        <Modal sx={{overflow: "scroll", padding:"1rem", display:'flex', justifyContent:'center', alignItems:'center'}} open={open} onClose={onClose}>
            <Paper sx={{width:'fit-content'}}>
                {success ? <SuccessMessage/> : <Form/>}
            </Paper>
        </Modal>
    )


}