import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AlertRulesTableData from "../../model/alert-rules/AlertRulesTableData";
import { useUpdateAlertRule } from "../../hooks/alert-rules/useUpdateAlertRule";
import AlertRuleUpdateDto from "../../model/alert-rules/dtos/AlertRuleUpdateDto";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText, OutlinedInput } from "@mui/material";
import RetailerCompany from "../../model/alert-rules/RetailerCompany";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useRetailerCompanies } from "../../hooks/retailer-companies/useRetailerCompanies";
import Paper from "@mui/material/Paper";

interface EditAlertRuleModalProps {
    alertRule: AlertRulesTableData;
    open: boolean;
    onClose: () => void;
}

const alertRuleUpdateSchema = z.object({
    priceThreshold: z
        .number()
        .positive("Must be positive.")
        .or(
            z
                .string()
                .regex(/^\d*\.?\d+$/, "Must be a positive number.")
                .min(1)
                .transform((value) => parseFloat(value))
        ),
    priceComparisonType: z.enum(["LOWER", "HIGHER"]),
    retailerCompanies: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
        })
    ),
});

export function EditAlertRuleModal({
                                       open,
                                       onClose,
                                       alertRule,
                                   }: EditAlertRuleModalProps) {
    const [submissionError, setSubmissionError] = useState(false);
    const [success, setSuccess] = useState(false);
    const { updateAlertRuleMutation } = useUpdateAlertRule();
    const { retailerCompanies } = useRetailerCompanies();
    const [selectedRetailerCompanies, setSelectedRetailerCompanies] = useState<
        RetailerCompany[]
    >(alertRule.retailerCompanies);

    const {
        register,
        formState: { errors, isLoading },
        handleSubmit,
        watch,
    } = useForm({
        resolver: zodResolver(alertRuleUpdateSchema),
        defaultValues: {
            id: alertRule.id,
            priceThreshold: alertRule.priceThreshold,
            priceComparisonType: alertRule.priceComparisonType,
            retailerCompanies: alertRule.retailerCompanies,
        },
    });

    function handleAlertRuleUpdate() {
        setSubmissionError(false);
        const { priceThreshold, priceComparisonType } = watch();
        const updatedAlertRule: AlertRuleUpdateDto = {
            id: alertRule.id,
            priceThreshold: priceThreshold,
            priceComparisonType: priceComparisonType,
            retailerCompanies: selectedRetailerCompanies, // Use the updated retailerCompanies value
        };

        updateAlertRuleMutation(updatedAlertRule)
            .then((r) => {
                setSuccess(true);
            })
            .catch((e) => {
                setSubmissionError(true);
            });
    }

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const { value } = event.target;
        const selectedItems = retailerCompanies?.filter((retailerCompany) =>
            value.includes(retailerCompany.id.toString())
        );

        setSelectedRetailerCompanies(selectedItems ?? []);
    };

    const renderValue = (selected: string[]) => {
        const selectedNames = selected.map((id) => {
            const retailerCompany = retailerCompanies?.find(
                (company) => company.id === id
            );
            return retailerCompany ? retailerCompany.name : "";
        });

        return selectedNames.join(", ");
    };

    console.log(watch("retailerCompanies"));
    console.log(selectedRetailerCompanies);

    function Form() {
        return (
            <form
                style={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    margin: "3rem",
                    padding: "2rem",
                }}
                onSubmit={handleSubmit(handleAlertRuleUpdate)}
            >
                <Typography variant={"h5"} paddingBottom={2}>{alertRule.productName}</Typography>

                <TextField
                    type="number"
                    error={!!errors.priceThreshold}
                    helperText={errors.priceThreshold?.message?.toString()}
                    {...register("priceThreshold")}
                    placeholder={"Price threshold"}
                    label={"Price threshold"}
                    sx={{ width: "100%" }}
                />

                <FormControl fullWidth>
                    <InputLabel id="price-comparison-type-label">
                        Price Comparison Type
                    </InputLabel>
                    <Select
                        label="Price Comparison Type"
                        labelId="price-comparison-type-label"
                        id="priceComparisonType"
                        {...register("priceComparisonType")}
                        value={watch("priceComparisonType")}
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
                    <InputLabel id="demo-multiple-checkbox-label">
                        Retailer companies
                    </InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectedRetailerCompanies.map(
                            (retailerCompany) => retailerCompany.id
                        )}
                        onChange={handleChange}
                        input={<OutlinedInput label="Retailer companies" />}
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
                                <ListItemText primary={retailerCompany.name} />
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText sx={{fontSize: '1rem', color: 'red'}}>
                        {selectedRetailerCompanies.length === 0 &&
                            "If left unselected, all retailer companies will be selected."}
                    </FormHelperText>
                </FormControl>

                <Button type={"submit"} variant={"contained"} sx={{ maxWidth: "50%" }}>
                    Save
                </Button>
                {isLoading ? <CircularProgress /> : ""}
                {submissionError ? (
                    <Alert variant={"filled"} severity={"error"}>
                        Error updating the alert rule.
                    </Alert>
                ) : (
                    ""
                )}
            </form>
        );
    }

    function SuccessMessage() {
        return (
            <>
                <Alert variant={"filled"} severity={"success"}>
                    Alert rule updated successfully.
                </Alert>
                <Button onClick={onClose}>Ok</Button>
            </>
        );
    }

    return (
        <Modal sx={{overflow: "scroll", padding:"1rem", display:'flex', justifyContent:'center', alignItems:'center'}} open={open} onClose={onClose}>
            <Paper sx={{width:'fit-content'}}>
                {success ? <SuccessMessage/> : <Form/>}
            </Paper>
        </Modal>
    );
}
