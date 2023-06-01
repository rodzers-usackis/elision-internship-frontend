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
import {useAddAlertRule} from "../../hooks/alert-rules/useAddAlertRule";
import AlertRules from "../../model/alert-rules/AlertRules";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useTrackedProducts} from "../../hooks/products/useTrackedProducts";
import {OutlinedInput} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import {UUID} from "crypto";



interface AddAlertRuleModalProps {
    open: boolean;
    onClose: () => void;
}

const alertRuleUpdateSchema = z.object({
    product: z.string(),
    priceThreshold: z.number().positive("Price threshold has to be positive.").or(z.string().regex(/^\d*\.?\d+$/).min(1, "Price threshold must be greater than 0.").transform(value => parseFloat(value))),
    priceComparisonType: z.string(),
    retailerCompanies: z.string(),
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export function AddAlertRuleModal({open, onClose}: AddAlertRuleModalProps) {
    const {trackedProducts} = useTrackedProducts();
    const [products, setProducts] = useState<UUID[]>([]);

    const [submissionError, setSubmissionError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {addAlertRuleMutation} = useAddAlertRule();
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(alertRuleUpdateSchema)
    })


    const {errors, isLoading} = formState;


    function handleAlertRuleUpdateSubmit() {
        setSubmissionError(false);
        const {id, productId, name, description, ean, manufacturerCode, category, priceThreshold, priceComparisonType, retailerCompanies} = watch();

        const addedAlertRule: AlertRules = {
            id,
            product: {
                id: productId,
                name,
                description,
                ean,
                manufacturerCode,
                category
            },
            priceThreshold: priceThreshold,
            priceComparisonType: priceComparisonType,
            retailerCompanies: retailerCompanies
        }

        addAlertRuleMutation(addedAlertRule).then(r => {
            setSuccess(true)
        }).catch(e => {
            setSubmissionError(true)
        });
    }


    const handleChange = (event: SelectChangeEvent<string[] | TrackedProduct[] | undefined>) => {
        const {
            target: { value },
        } = event;
        setProducts(
            typeof value === 'string' ? value.split(',') as UUID[] : (value as UUID[]) || [],
        );
    };

    console.log ("products: " + products);



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
        }} onSubmit={handleSubmit(handleAlertRuleUpdateSubmit)}>
            <Typography variant={"h5"}>Add a new alert rule</Typography>

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

            <FormGroup>
                <TextField sx={{marginTop: "0.5rem"}}
                           type={"text"}
                           error={!!errors.ean}
                           helperText={errors.ean?.message?.toString()}
                           {...register('ean')}
                           placeholder={"EAN"}
                           label={"EAN"}
                />
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="retailer-multiple-checkbox-label"
                        id="retailer-multiple-checkbox"
                        multiple
                        value={trackedProducts}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => (Array.isArray(selected) ? selected.join(', ') : '')}
                        MenuProps={MenuProps}
                    >
                        {trackedProducts?.map((product) => (
                            <MenuItem key={product.id} value={product.product.name}>
                                <Checkbox checked={trackedProducts?.some(p => p.product.id === product.product.id)} />
                                <ListItemText primary={product.product.name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FormGroup>


            <Button type={"submit"} variant={"contained"} sx={{maxWidth: "50%"}}>Save</Button>
            {isLoading ? <CircularProgress/> : ''}
            {submissionError ?
                <Alert variant={"filled"} severity={"error"}> Error adding the product.</Alert> : ''}
        </form>)
    }

    function SuccessMessage() {
        return (<>
                <Alert variant={"filled"} severity={"success"}>Product added successfully.</Alert>
                <Button onClick={onClose}>Ok</Button>
            </>
        )
    }

    return (
        <Modal sx={{overflow: "scroll"}} open={open} onClose={onClose}>
            {success ? <SuccessMessage/> : <Form/>}
        </Modal>
    )


}