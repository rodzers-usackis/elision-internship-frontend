import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import styles from "../../../styles/DashboardGenericContent.module.css";
import * as React from "react";
import {useAlertSettings} from "../../../hooks/alert-settings/useAlertSettings";
import {AlertSettingsForm} from "../../../components/alert-settings/AlertSettingsForm";
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import {DashboardDrawerItem} from "../../../components/dashboard-drawer/DashboardDrawerItems";
import Head from "next/head";

export default function AlertsSettings() {

    const {isAlertSettingsError, alertSettings, isAlertSettingsLoading} = useAlertSettings();

    function PageComponent() {
        return (
            <Grid item alignItems="flex-start" className={styles.contentWrapper}>
                {isAlertSettingsLoading ? (
                    <CircularProgress/>
                ) : isAlertSettingsError ? (
                    <Alert severity="error">Error loading alerts</Alert>
                ) : (
                    !isAlertSettingsLoading && !isAlertSettingsError && alertSettings && (
                        <Grid item className={styles.lineChart}>
                            <AlertSettingsForm alertSettings={alertSettings}/>
                        </Grid>
                    )
                )}
            </Grid>
        );
    }


    return (<>
            <Head>
                <title>Alert settings</title>
            </Head>
            <DashboardDrawerPageTemplate
                currentPage={DashboardDrawerItem.AlertSettings}
                pageTitle={"Alert settings"}
                pageSubtitle={"Manage your alert preferences"}
                actionShelf={<></>}
                pageComponent={<PageComponent/>}
            />
        </>
    )
}