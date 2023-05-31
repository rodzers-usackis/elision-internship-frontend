// import {Alert, CircularProgress, Divider, Grid, TextField, Tooltip, Typography} from "@mui/material";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from "../../../styles/DashboardReports.module.css";
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import * as React from "react";
import {useAlertSettings} from "../../../hooks/alert-settings/useAlertSettings";
import {AlertSettingsForm} from "../../../components/alert-settings/AlertSettingsForm";
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import {DashboardDrawerItem} from "../../../components/dashboard-drawer/DashboardDrawerItems";

export default function AlertsSettings() {

    const {isAlertSettingsError, alertSettings, isAlertSettingsLoading} = useAlertSettings();


    function PageComponent(){
        return(
            <Grid item className={styles.lineChart}>
                {isAlertSettingsLoading && <CircularProgress/>}
                {isAlertSettingsError && <Alert severity="error">Error loading alert settings</Alert>}
                {!isAlertSettingsLoading && !isAlertSettingsError && alertSettings &&
                <AlertSettingsForm alertSettings={alertSettings}/>}

            </Grid>
        )
    }

    return (
        <DashboardDrawerPageTemplate
            currentPage={DashboardDrawerItem.AlertSettings}
            pageTitle={"Alert settings"}
            pageSubtitle={"Manage your alert preferences"}
            actionShelf={<></>}
            pageComponent={<PageComponent/>}
            />
    )

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'}>
                <Grid item className={styles.drawerWrapper}>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.mainContentWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Alert settings
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Manage your alert preferences
                    </Typography>


                    <Divider/>

                    <Grid item className={styles.lineChart}>
                        {isAlertSettingsLoading && <CircularProgress/>}
                        {isAlertSettingsError && <Alert severity="error">Error loading alert settings</Alert>}
                        {!isAlertSettingsLoading && !isAlertSettingsError && alertSettings &&
                        <AlertSettingsForm alertSettings={alertSettings}/>}

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}