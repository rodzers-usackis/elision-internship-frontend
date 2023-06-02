// import {Alert, CircularProgress, Divider, Grid, TextField, Tooltip, Typography} from "@mui/material";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import styles from "../../../styles/DashboardGenericContent.module.css";
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import {AlertTable} from "../../../components/alerts/AlertTable";
import * as React from "react";
import {useAlertSettings} from "../../../hooks/alert-settings/useAlertSettings";
import {AlertSettingsForm} from "../../../components/alert-settings/AlertSettingsForm";

export default function AlertsSettings() {

    const {isAlertSettingsError, alertSettings, isAlertSettingsLoading} = useAlertSettings();

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'}>
                <Grid item className={styles.drawerWrapper}>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.dashboardWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Alert settings
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Manage your alert preferences
                    </Typography>


                    <Divider/>

                    <Grid item className={styles.contentWrapper}>
                        {isAlertSettingsError && <Alert severity="error">Error loading alert settings</Alert>}
                        {!isAlertSettingsLoading && !isAlertSettingsError && alertSettings &&
                            <Grid item className={styles.lineChart}>
                                <AlertSettingsForm alertSettings={alertSettings}/>
                            </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}