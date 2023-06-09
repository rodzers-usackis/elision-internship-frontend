import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useUpdateTrackedProduct} from "../../hooks/products/useUpdateTrackedProduct";
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";
import CatalogTableData from "../../model/my-catalog/CatalogTableData";
import Paper from "@mui/material/Paper";
import styles from "../../styles/GenericModal.module.css"


interface EditProductModalProps {
    product: CatalogTableData;
    open: boolean;
    onClose: () => void;
}

const productUpdateSchema = z.object({
    isTracked: z.boolean(),
    productPurchaseCost: z.number().positive("Must be positive.").or(z.string().regex(/^\d*\.?\d+$/, "Must be a positive number.").min(1).transform(value => parseFloat(value))),
    productSellPrice: z.number().positive("Must be positive.").or(z.string().regex(/^\d*\.?\d+$/, "Must be a positive number.").min(1).transform(value => parseFloat(value))),
});



export function EditTrackedProductModal({open, onClose, product}: EditProductModalProps) {

    const [submissionError, setSubmissionError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {updateTrackedProductMutation} = useUpdateTrackedProduct();
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(productUpdateSchema), defaultValues: {
            isTracked: product.isTracked,
            productPurchaseCost: product.productPurchaseCost,
            productSellPrice: product.productSellPrice,
            minPrice: product.minPrice
        }
    })

    const {errors, isLoading} = formState;

    function handleProductUpdateSubmit() {
        setSubmissionError(false);
        const {isTracked, productPurchaseCost, productSellPrice, minPrice} = watch();
        const updatedProduct: TrackedProductUpdate = {
            id: product.id,
            tracked: isTracked,
            productPurchaseCost,
            productSellPrice,
            minPrice
        }
        updateTrackedProductMutation(updatedProduct).then(r => {
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
            <Typography variant={"h5"} paddingBottom={2}>{product.productName}</Typography>

            <TextField
                // type={"number"}
                error={!!errors.productPurchaseCost}
                helperText={errors.productPurchaseCost?.message?.toString()}
                {...register('productPurchaseCost')}
                placeholder={"Purchase cost"}
                label={"Purchase cost"}
                fullWidth={true}
            />
            <TextField
                // type={"number"}
                error={!!errors.productSellPrice}
                helperText={errors.productSellPrice?.message?.toString()}
                {...register('productSellPrice')}
                placeholder={"Sell price"}
                label={"Sell price"}
                fullWidth={true}
            />
            <TextField
                // type={"number"}
                error={!!errors.minPrice}
                helperText={errors.minPrice?.message?.toString()}
                {...register('minPrice')}
                placeholder={"Minimum price"}
                label={"Minimum price"}
                fullWidth={true}
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={watch('isTracked')}
                        id="isTracked"
                        {...register('isTracked')}
                    />
                }
                label="Track this product"
                labelPlacement="start"
            />
            <Button type={"submit"} variant={"contained"} sx={{maxWidth: "50%"}}>Save</Button>
            {isLoading ? <CircularProgress/> : ''}
            {submissionError ?
                <Alert variant={"filled"} severity={"error"}> Error updating the product.</Alert> : ''}
        </form>)
    }

    function SuccessMessage() {
        return (<><Alert variant={"filled"} severity={"success"}> Product updated successfully.</Alert>
            <Button onClick={onClose}>Ok</Button>
        </>)
    }

    return (
        <Modal sx={{overflow: "scroll", padding:"1rem", display:'flex', justifyContent:'center', alignItems:'center'}} open={open} onClose={onClose}>
            <Paper className={styles.modalPaper}>
            {success ? <SuccessMessage/> : <Form/>}
            </Paper>
        </Modal>)
}

