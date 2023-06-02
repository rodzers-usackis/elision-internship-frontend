import * as React from "react";
import {useEffect} from "react";

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
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import {DashboardDrawerItem} from "../../../components/dashboard-drawer/DashboardDrawerItems";

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


    function ActionShelf(){
        return (
            <Tooltip title={"Feature not available yet"} arrow><TextField
                variant={'outlined'}
                disabled
                placeholder={'Search alert'}
                sx={{my: 2}}

            /></Tooltip>
        )
    }

    function PageComponent() {
        return (
            <Grid item className={styles.lineChart}>
                {isAlertsLoading && <CircularProgress/>}
                {isAlertsError && <Alert severity="error">Error loading alerts</Alert>}
                {!isAlertsLoading && !isAlertsError && alerts &&
                <AlertTable alerts={alerts}/>}

            </Grid>
        )
    }


    return (
        <DashboardDrawerPageTemplate currentPage={DashboardDrawerItem.Alerts}
                                     pageTitle={"Alerts"}
                                     pageSubtitle={"Check out your latest price alerts"}
                                     actionShelf={<ActionShelf/>}
                                     pageComponent={<PageComponent/>}
        />
    )

}