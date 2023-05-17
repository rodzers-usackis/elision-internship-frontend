import * as React from "react";

// Component Imports
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import {
    Alert,
    Button,
    CircularProgress,
    Divider,
    Grid,
    List,
    MenuItem,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";

// Styling Imports
import styles from "../../../styles/DashboardReports.module.css";
import "../../../styles/AlertList.module.css";

// Hook Imports
import {useProducts} from "../../../hooks/register/useProducts";
import {Product} from "../../../model/Product";

// Misc Imports
import {PricingHistoryGraph} from "../../../components/reports/PricingHistoryGraph";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {SingleInputDateRangeField} from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import {useAlerts} from "../../../hooks/alerts/useAlerts";
import {AlertItemRow} from "../../../components/alerts/AlertItemRow";
import {AlertTable} from "../../../components/alerts/AlertTable";


export default function Alerts() {

    const {isAlertsError, alerts, isAlertsLoading} = useAlerts()


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