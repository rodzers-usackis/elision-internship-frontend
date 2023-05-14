import {
    Alert,
    Button, CircularProgress,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    Modal,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import {TrackedProduct} from "../../model/TrackedProduct";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useUpdateTrackedProduct} from "../../hooks/products/useUpdateTrackedProduct";
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";


interface EditProductModalProps {
    product: TrackedProduct;
    open: boolean;
    onClose: () => void;
}

const productUpdateSchema = z.object({
    isTracked: z.boolean(),
    productPurchaseCost: z.number().or(z.string().regex(/^\d*\.?\d+$/).min(1, "Purchase cost must be greater than 0.").transform(value => parseFloat(value))),
    productSellPrice: z.number().or(z.string().regex(/^\d*\.?\d+$/).min(1, "Sell price must be greater than 0.").transform(value => parseFloat(value))),
});

export function EditTrackedProductModal({open, onClose, product}: EditProductModalProps) {

    const {isTrackedSwitch, setIsTrackedSwitch} = useState(product.tracked)
    const [submissionError, setSubmissionError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {updateTrackedProductMutation} = useUpdateTrackedProduct();
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(productUpdateSchema), defaultValues: {
            isTracked: product.tracked,
            productPurchaseCost: product.productPurchaseCost,
            productSellPrice: product.productSellPrice
        }
    })





    const {errors, isLoading} = formState;

    function handleSwitchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsTrackedSwitch(e.target.checked)
    }

    function handleProductUpdateSubmit() {
        console.log(watch())
        setSubmissionError(false);
        const {isTracked, productPurchaseCost, productSellPrice} = watch();
        const updatedProduct: TrackedProductUpdate = {
            id: product.id,
            tracked: isTracked,
            productPurchaseCost,
            productSellPrice
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
            <Typography variant={"h5"}>{product.name}</Typography>

            <TextField
                // type={"number"}
                error={!!errors.productPurchaseCost}
                helperText={errors.productPurchaseCost?.message?.toString()}
                {...register('productPurchaseCost')}
                placeholder={"Purchase cost"}
                label={"Purchase cost"}
            />
            <TextField
                // type={"number"}
                error={!!errors.productSellPrice}
                helperText={errors.productSellPrice?.message?.toString()}
                {...register('productSellPrice')}
                placeholder={"Sell price"}
                label={"Sell price"}
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={isTrackedSwitch}
                        onChange={handleSwitchChange}
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
        <Modal open={open} onClose={onClose} >
            {success ? <SuccessMessage/> : <Form/>}
        </Modal>)
}

