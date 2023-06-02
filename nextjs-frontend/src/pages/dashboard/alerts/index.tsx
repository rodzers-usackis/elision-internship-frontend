import * as React from "react";

// Component Imports
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
// import {
//     Alert,
//     CircularProgress,
//     Divider,
//     Grid,
//     TextField,
//     Tooltip,
//     Typography
// } from "@mui/material";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

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

                <Grid item className={styles.dashboardWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Alerts
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Check out your latest price alerts
                    </Typography>

                    <Tooltip title={"Feature not available yet"} arrow>
                        <TextField
                            variant={'outlined'}
                            disabled
                            placeholder={'Search alert'}
                            sx={{my: 2}}
                        />
                    </Tooltip>

                    <Divider/>

                    <Grid item className={styles.contentWrapper}>
                        {isAlertsLoading && <CircularProgress/>}
                        {isAlertsError && <Alert severity="error">Error loading alerts</Alert>}
                        {!isAlertsLoading && !isAlertsError && alerts &&
                            <Grid item className={styles.lineChart}>
                                <AlertTable alerts={alerts}/>
                            </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}