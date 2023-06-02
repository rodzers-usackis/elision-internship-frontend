import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import styles from "../../../styles/DashboardGenericContent.module.css";
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
}