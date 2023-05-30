import {AlertSettings} from "../../model/AlertSettings";
import {AlertSettingsFormRow} from "./AlertSettingsFormRow";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import React, {useContext, useState} from "react";
import styles from '../../styles/AlertSettings.module.css'
import {useAlertSettingsUpdate} from "../../hooks/alert-settings/useAlertSettingsUpdate";
import AuthenticationContext from "../../context/authentication/AuthenticationContext";

interface AlertSettingsFormProps {
    alertSettings: AlertSettings;
}

const alertSettingsSchema = z.object({
    alertsActive: z.boolean(),
    notifyViaEmail: z.boolean(),
})

export function AlertSettingsForm({alertSettings}: AlertSettingsFormProps) {

    const {loggedInUser} = useContext(AuthenticationContext);
    const {register, formState, handleSubmit, watch} = useForm({
        resolver: zodResolver(alertSettingsSchema), defaultValues: {
            alertsActive: alertSettings.alertsActive,
            notifyViaEmail: alertSettings.notifyViaEmail,
        }
    })
    const {
        isAlertSettingsUpdateError,
        isAlertSettingsUpdateLoading,
        updateAlertSettingsMutation
    } = useAlertSettingsUpdate();
    const [updateSuccess, setUpdateSuccess] = useState(false);

    function handleAlertSettingUpdate() {
        setUpdateSuccess(false);
        const {alertsActive, notifyViaEmail} = watch();
        const updatedAlertSettings: AlertSettings = {
            alertsActive: alertsActive,
            notifyViaEmail: notifyViaEmail
        }
        updateAlertSettingsMutation(updatedAlertSettings).then(() => {setUpdateSuccess(true)});
    }

    return (
        <form className={styles["alert-settings-form"]} onSubmit={handleSubmit(handleAlertSettingUpdate)}>

            <AlertSettingsFormRow title="Alerts active"
                                  children={

                                      <FormControlLabel
                                          control={
                                              <Switch
                                                  checked={watch('alertsActive')}
                                                  id="alertsActive"
                                                  {...register('alertsActive')}
                                              />
                                          }
                                          label="Alerts active"
                                          labelPlacement="start"
                                          hidden
                                      />
                                  }/>

            <AlertSettingsFormRow title="Notify via email"
                                  children={
                                      <FormControlLabel
                                          control={
                                              <Switch
                                                  checked={watch('notifyViaEmail')}
                                                  id="notifyViaEmail"
                                                  {...register('notifyViaEmail')}
                                              />
                                          }
                                          label="Notify via email"
                                          labelPlacement="start"
                                          hidden
                                      />
                                  }/>


            <AlertSettingsFormRow title={"Store alerts for"}
                                  children={
                                      <Tooltip title={"Feature available for premium users only."}>
                                          <FormControlLabel
                                              control={
                                                  <Select
                                                      labelId="alert-storage-label"
                                                      id="alerts-storage-select"
                                                      label="Alerts storage time"
                                                      //{...register('alertsStorageTime')}
                                                      defaultValue={30}
                                                      disabled
                                                      sx={{marginLeft: "1rem"}}
                                                  >
                                                      <MenuItem value={30}>30 days</MenuItem>
                                                      <MenuItem value={60}>60 days</MenuItem>
                                                      <MenuItem value={90}>90 days</MenuItem>
                                                  </Select>
                                              }
                                              label="Store alerts for"
                                              labelPlacement="start"
                                              hidden
                                          />
                                      </Tooltip>
                                  }
            />


            <AlertSettingsFormRow title={"Email address"}
                                  children={
                                      <Tooltip title={"Feature not available yet. " +
                                      "Emails will be sent to the email address you registered with."}><TextField
                                          // type={"number"}
                                          // error={!!errors.productPurchaseCost}
                                          // helperText={errors.productPurchaseCost?.message?.toString()}
                                          // {...register('productPurchaseCost')}
                                          placeholder={"Email address"}
                                          label={"Email address"}
                                          defaultValue={loggedInUser?.email || "Email address"}
                                          disabled
                                      /></Tooltip>

                                  }
            />

            {isAlertSettingsUpdateLoading ? <CircularProgress/> :
                <Button variant="contained" onClick={handleSubmit(handleAlertSettingUpdate)}>Save</Button>}
            {updateSuccess && <Alert severity="success">Alert settings updated successfully.</Alert>}
            {isAlertSettingsUpdateError && <Alert severity="error">Error updating alert settings.</Alert>}


        </form>
    )

}