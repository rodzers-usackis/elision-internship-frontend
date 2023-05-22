import * as React from "react";

// Component Imports
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import {
    Alert,
    CircularProgress,
    Divider,
    Grid,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";

// Styling Imports
import styles from "../../../styles/DashboardReports.module.css";
import "../../../styles/AlertList.module.css";

// Hook Imports
import {setAlertsRead} from "../../../services/api/alerts";

// Misc Imports
import {useAlerts} from "../../../hooks/alerts/useAlerts";
import {AlertTable} from "../../../components/alerts/AlertTable";
import {useEffect} from "react";

export default function Alerts() {

    const {isAlertsError, alerts, isAlertsLoading} = useAlerts()

    useEffect(() => {
        const unreadAlerts = alerts?.filter(alert => !alert.read) ?? [];

        if (unreadAlerts.length > 0) {
            unreadAlerts.forEach(alert => {
                alert.read = true;
            })

            setAlertsRead(unreadAlerts);
        }
    }, [alerts]);

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'}>
                <Grid item className={styles.drawerWrapper}>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.mainContentWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Alerts
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Check out your latest price alerts
                    </Typography>


                    <Tooltip title={"Feature not available yet"} arrow><TextField
                        variant={'outlined'}
                        disabled
                        placeholder={'Search alert'}
                        sx={{my: 2}}

                    /></Tooltip>
                    <Divider/>

                    <Grid item className={styles.lineChart}>
                        {isAlertsLoading && <CircularProgress/>}
                        {isAlertsError && <Alert severity="error">Error loading alerts</Alert>}
                        {!isAlertsLoading && !isAlertsError && alerts &&
                        <AlertTable alerts={alerts}/>}

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}