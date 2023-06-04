import * as React from "react";
import {useEffect, useRef, useState} from "react";

// Component Imports

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

// Styling Imports
import styles from "../../../styles/DashboardGenericContent.module.css";

// Hook Imports
import {setAlertsRead} from "../../../services/api/alerts";

// Misc Imports
import {useAlerts} from "../../../hooks/alerts/useAlerts";
import {AlertTable} from "../../../components/alerts/AlertTable";
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import {DashboardDrawerItem} from "../../../components/dashboard-drawer/DashboardDrawerItems";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';

export default function Alerts() {

    const {isAlertsError, alerts, isAlertsLoading} = useAlerts()
    const [displayedAlerts, setDisplayedAlerts] = useState<Alert[] | undefined>([]);
    const [searchText, setSearchText] = useState<string>("");
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const unreadAlerts = alerts?.filter(alert => !alert.read) ?? [];

        if (unreadAlerts.length > 0) {
            unreadAlerts.forEach(alert => {
                alert.read = true;
            })

            setAlertsRead(unreadAlerts);
        }
    }, [alerts]);

    useEffect(() => {
        filterAlerts();
    }, [searchText]);

    useEffect(() => {
        filterAlerts();
    }, [alerts]);

    useEffect(() => {
        // Set the focus on the input field when the component mounts or search text changes
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchText, displayedAlerts]);


    function filterAlerts() {
        //filter alerts based on search text
        //if search text is empty, return all alerts
        //if search text is not empty, return alerts that contain search text in product.name product.ean product.manufacturerCode or .competitor
        if (!alerts) return;

        if (searchText === "" || !searchText) {
            setDisplayedAlerts(alerts);
            return;
        }

        const filteredAlerts = alerts.filter(alert => {
            const product = alert.product;
            const competitor = alert.retailerCompany;
            const search = searchText.toLowerCase();
            return product.name.toLowerCase().includes(search) ||
                product.ean.toLowerCase().includes(search) ||
                product.manufacturerCode.toLowerCase().includes(search) ||
                competitor.name.toLowerCase().includes(search);
        });


        setDisplayedAlerts(filteredAlerts);
    }


    function ActionShelf() {
        return (
            <Box sx={{display: "flex"}}>

                <Tooltip placement={"right"} arrow title={"Search alerts by competitor, product name, EAN or manufacturer code"}>
                    <TextField
                    key={'alert-search'}
                    variant={'outlined'}
                    placeholder={'Search alert'}
                    label={"Competitor, product name, EAN or manufacturer code"}
                    value={searchText}
                    inputRef={searchInputRef}
                    onChange={(e) => setSearchText(e.target.value)}
                    sx={{my: 2, width:'25rem'}}
                    autoComplete={"off"}

                /></Tooltip>
                {searchText && (
                    <IconButton onClick={(e)=>{
                        setSearchText("");
                    }}
                                aria-label={"Clear input"}
                    >
                        <ClearIcon />
                    </IconButton>
                )}
            </Box>
        )
    }

    function PageComponent() {
        return (
            <Grid item className={styles.lineChart}>
                {isAlertsLoading && <CircularProgress/>}
                {isAlertsError && <Alert severity="error">Error loading alerts</Alert>}
                {!isAlertsLoading && !isAlertsError && alerts &&
                <AlertTable alerts={displayedAlerts}/>}

            </Grid>
        )
    }


    return (
        <DashboardDrawerPageTemplate currentPage={DashboardDrawerItem.Alerts}
                                     pageTitle={"Alerts"}
                                     pageSubtitle={"Check out your latest price alerts"}
                                     actionShelf={<ActionShelf key={'alert-action-shelf'}/>}
                                     pageComponent={<PageComponent/>}
                                     key={'alert-page'}

        />
    )

}