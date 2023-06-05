import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useAddAlertRule} from "../../hooks/alert-rules/useAddAlertRule";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FormHelperText, OutlinedInput} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import {useRetailerCompanies} from "../../hooks/retailer-companies/useRetailerCompanies";
import {useProducts} from "../../hooks/register/useProducts";
import AlertRuleCreateDto from "../../model/alert-rules/dtos/AlertRuleCreateDto";
import RetailerCompany from "../../model/alert-rules/RetailerCompany";
import FormGroup from "@mui/material/FormGroup";

interface AddAlertRuleModalProps {
    open: boolean;
    onClose: () => void;
}

const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    ean: z.string(),
    manufacturerCode: z.string(),
    category: z.string(),
});

const retailerCompanySchema = z.object({
    id: z.string(),
    name: z.string(),
});

const alertRuleCreateSchema = z.object({
    product: productSchema,
    priceThreshold: z.number().positive("Purchase cost has to be positive.").or(z.string().regex(/^\d*\.?\d+$/).min(1, "Purchase cost must be greater than 0.").transform(value => parseFloat(value))),
    priceComparisonType: z.string(),
    retailerCompanies: z.array(retailerCompanySchema),
});

export function AddAlertRuleModal({open, onClose}: AddAlertRuleModalProps) {
    const {products} = useProducts();
    const [selectedRetailerCompanies, setSelectedRetailerCompanies] = useState<RetailerCompany[]>([]);
    const {retailerCompanies} = useRetailerCompanies();
    const [submissionError, setSubmissionError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {addAlertRuleMutation} = useAddAlertRule();
    const {register, formState, handleSubmit, watch, setValue} = useForm({
        resolver: zodResolver(alertRuleCreateSchema)
    })

    const {errors, isLoading} = formState;

    async function handleAlertRuleCreate(event: any) {
        event.preventDefault();
        setSubmissionError(false);

        const { product, priceThreshold, priceComparisonType } = watch();

        const selectedProduct = products?.find((p) => p.id === product);

        const createdAlertRule: AlertRuleCreateDto = {
            product: {
                id: selectedProduct!.product.id,
                name: selectedProduct!.product.name,
                description: selectedProduct!.product.description,
                ean: selectedProduct!.product.ean,
                manufacturerCode: selectedProduct!.product.manufacturerCode,
                category: selectedProduct!.product.category,
            },
            priceThreshold,
            priceComparisonType,
            retailerCompanies: selectedRetailerCompanies,
        };

        try {
            await addAlertRuleMutation(createdAlertRule);
            setSuccess(true);
        } catch (error) {
            setSubmissionError(true);
        }
    }

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {value} = event.target;

        if (retailerCompanies) {
            const selectedRetailerCompanyIds = retailerCompanies
                .filter((retailerCompany) => value.indexOf(retailerCompany.id) !== -1)
                .map((retailerCompany) => retailerCompany.id);

            const selectedRetailerCompanies = retailerCompanies.filter((retailerCompany) =>
                selectedRetailerCompanyIds.includes(retailerCompany.id)
            );

            setSelectedRetailerCompanies(selectedRetailerCompanies);
            setValue("retailerCompanies", selectedRetailerCompanies);
        }
    };

    console.log(watch("retailerCompanies"))

    const renderValue = (selected: string[]) => {
        const selectedNames = selected.map((id) => {
            const retailerCompany = retailerCompanies?.find(
                (company) => company.id === id
            );
            return retailerCompany ? retailerCompany.name : "";
        });

        return selectedNames.join(", ");
    };

    function Form() {
        return (<form
            style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                margin: "3rem",
                padding: "2rem"
            }}>
            <Typography variant={"h5"}>Add a new alert rule</Typography>
            <FormGroup sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem"
            }}>
                <FormControl fullWidth>
                    <InputLabel id="product-label">
                        Product
                    </InputLabel>
                    <Select
                        label="Product"
                        labelId="product-label"
                        id="product"
                        {...register("product")}
                        value={watch("product") || ""}
                    >
                        {products?.map((product) => (
                            <MenuItem key={product.id} value={product.id}>
                                <ListItemText primary={product.product.name}/>
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>{!!errors.priceComparisonType}</FormHelperText>
                </FormControl>

                <TextField
                    type={"number"}
                    error={!!errors.priceThreshold}
                    helperText={errors.priceThreshold?.message?.toString()}
                    {...register("priceThreshold")}
                    placeholder={"Price threshold"}
                    label="Price threshold"
                    fullWidth={true}
                />

                <FormControl fullWidth>
                    <InputLabel id="price-comparison-type-2-label">
                        Price Comparison Type
                    </InputLabel>
                    <Select
                        label="Price Comparison Type"
                        labelId="price-comparison-type-2-label"
                        id="priceComparisonType"
                        {...register("priceComparisonType")}
                        value={watch("priceComparisonType") || ""}
                    >
                        <MenuItem key={"LOWER"} value="LOWER">
                            LOWER
                        </MenuItem>
                        <MenuItem key={"HIGHER"} value="HIGHER">
                            HIGHER
                        </MenuItem>
                    </Select>
                    <FormHelperText>{!!errors.priceComparisonType}</FormHelperText>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="checkbox-label">
                        Retailer companies
                    </InputLabel>
                    <Select
                        labelId="checkbox-label"
                        id="checkbox"
                        {...register("retailerCompanies", {
                            value: selectedRetailerCompanies.map((retailerCompany) => ({
                                id: retailerCompany.id,
                                name: retailerCompany.name,
                            })),
                        })}
                        multiple
                        value={selectedRetailerCompanies.map(
                            (retailerCompany) => retailerCompany.id
                        )}
                        onChange={handleChange}
                        input={<OutlinedInput label="Retailer companies"/>}
                        renderValue={renderValue}
                    >
                        {retailerCompanies?.map((retailerCompany) => (
                            <MenuItem
                                key={retailerCompany.id}
                                value={retailerCompany.id}
                            >
                                <Checkbox
                                    checked={selectedRetailerCompanies.some(
                                        (c) => c.id === retailerCompany.id
                                    )}
                                />
                                <ListItemText primary={retailerCompany.name}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FormGroup>


            <Button type={"submit"} variant={"contained"} sx={{maxWidth: "50%"}} onClick={event => handleAlertRuleCreate(event)}>Save</Button>
            {isLoading ? <CircularProgress/> : ''}
            {submissionError ?
                <Alert variant={"filled"} severity={"error"}> Error adding the alert rule.</Alert> : ''}
        </form>)
    }

    function SuccessMessage() {
        return (<>
                <Alert variant={"filled"} severity={"success"}>Alert rule added successfully.</Alert>
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