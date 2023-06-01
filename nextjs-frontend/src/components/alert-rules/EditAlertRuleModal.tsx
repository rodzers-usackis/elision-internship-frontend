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
import AlertRules from "../../model/alert-rules/AlertRules";
import AlertRulesTableData from "../../model/alert-rules/AlertRulesTableData";

interface EditAlertRuleModalProps {
    alertRules: AlertRules;
    open: boolean;
    onClose: () => void;
}

const productUpdateSchema = z.object({
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
    priceComparisonType: z.string().optional(),
});

export function EditAlertRuleModal({
                                       open,
                                       onClose,
                                       alertRules,
                                   }: EditAlertRuleModalProps) {
    const [submissionError, setSubmissionError] = useState(false);
    const [success, setSuccess] = useState(false);
    const {updateTrackedProductMutation} = useUpdateTrackedProduct();
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(productUpdateSchema),
        defaultValues: {
            priceThreshold: alertRules.priceThreshold,
            priceComparisonType: alertRules.priceComparisonType,
        },
    });

    const {errors, isLoading} = formState;

    function handleProductUpdateSubmit() {
        setSubmissionError(false);
        const {priceThreshold, priceComparisonType} = watch();
        const updatedAlertRule: AlertRulesTableData = {
            id: alertRules.id,
            productName: alertRules.product.name,
            priceThreshold: priceThreshold,
            priceComparisonType: priceComparisonType,
            retailerCompanies: alertRules.retailerCompanies[0].name,
        };

        updateTrackedProductMutation(updatedAlertRule)
            .then((r) => {
                setSuccess(true);
            })
            .catch((e) => {
                setSubmissionError(true);
            });
    }

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
                onSubmit={handleSubmit(handleProductUpdateSubmit)}
            >
                <Typography variant={"h5"}>{alertRules.product.name}</Typography>

                <TextField
                    type="number"
                    error={!!errors.priceThreshold}
                    helperText={errors.priceThreshold?.message?.toString()}
                    {...register("priceThreshold")}
                    placeholder={"Price threshold"}
                    label={"Price threshold"}
                />
                <FormControl>
                    <InputLabel htmlFor="priceComparisonType">
                        Price Comparison Type
                    </InputLabel>
                    <select
                        id="priceComparisonType"
                        {...register("priceComparisonType")}
                    >
                        <option value="LOWER">LOWER</option>
                        <option value="HIGHER">HIGHER</option>
                    </select>
                </FormControl>

                <FormControlLabel
                    control={
                        <Switch
                            checked={watch("isTracked")}
                            id="isTracked"
                            {...register("isTracked")}
                        />
                    }
                    label="Track this product"
                    labelPlacement="start"
                />
                <Button type={"submit"} variant={"contained"} sx={{maxWidth: "50%"}}>
                    Save
                </Button>
                {isLoading ? <CircularProgress/> : ""}
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
        <Modal sx={{overflow: "scroll"}} open={open} onClose={onClose}>
            {success ? <SuccessMessage/> : <Form/>}
        </Modal>
    );
}
