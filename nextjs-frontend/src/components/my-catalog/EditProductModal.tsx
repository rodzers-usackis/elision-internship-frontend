import {
    Button,
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
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";


interface EditProductModalProps {
    product: TrackedProduct;
    open: boolean;
    onClose: () => void;
}

const productUpdateSchema = z.object({
    isTracked: z.boolean(),
    productPurchaseCost: z.number().min(0, "Purchase cost must be greater than 0."),
    productSellPrice: z.number().min(0, "Sell price must be greater than 0.")
})

export function EditProductModal({open, onClose, product}: EditProductModalProps) {

    const {isTrackedSwitch, setIsTrackedSwitch} = useState(product.tracked)
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(productUpdateSchema), defaultValues: {
            isTracked: product.tracked,
            productPurchaseCost: product.cost,
            productSellPrice: product.price
        }
    })


    const {errors} = formState;

    function handleSwitchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsTrackedSwitch(e.target.checked)
    }

    function handleProductUpdateSubmit() {
        console.log('submit', watch())
    }


    return (<Modal open={open} onClose={onClose} keepMounted>
        <form style={{
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

            <TextField type={"number"}
                       error={!!errors.productPurchaseCost}
                       helperText={errors.productPurchaseCost?.message?.toString()}
                       {...register('productPurchaseCost')}
                       placeholder={"Purchase cost"}
                       label={"Purchase cost"}
                       defaultValue={product.cost}
            />
            <TextField type={"number"}
                       error={!!errors.productSellPrice}
                       helperText={errors.productSellPrice?.message?.toString()}
                       {...register('productSellPrice')}
                       placeholder={"Sell price"}
                       label={"Sell price"}
                       defaultValue={product.price}

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
            <Button type={"submit"} variant={"contained"} sx={{maxWidth:"50%"}}>Save</Button>

        </form>

    </Modal>)
}

