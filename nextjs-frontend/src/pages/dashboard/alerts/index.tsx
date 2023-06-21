import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import AlertIcon from '@mui/material/Alert';
import { Alert } from '../../../model/Alert'
import styles from "../../../styles/DashboardGenericContent.module.css";
import { setAlertsRead } from "../../../services/api/alerts";
import { useAlerts } from "../../../hooks/alerts/useAlerts";
import { AlertTable } from "../../../components/alerts/AlertTable";
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import { DashboardDrawerItem } from "../../../components/dashboard-drawer/DashboardDrawerItems";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import Head from "next/head";

export default function Alerts() {
    const { isAlertsError, alerts, isAlertsLoading } = useAlerts();
    const [displayedAlerts, setDisplayedAlerts] = useState<Alert[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const unreadAlerts = alerts?.filter((alert) => !alert.read) ?? [];

        if (unreadAlerts.length > 0) {
            unreadAlerts.forEach((alert) => {
                alert.read = true;
            });

            setAlertsRead(unreadAlerts);
        }
    }, [alerts]);

    useEffect(() => {
        function filterAlerts() {
            if (!alerts) return;

            if (searchText === "" || !searchText) {
                setDisplayedAlerts(alerts);
                return;
            }

            const filteredAlerts = alerts.filter((alert) => {
                const product = alert.product;
                const competitor = alert.retailerCompany;
                const search = searchText.toLowerCase();
                return (
                    product.name.toLowerCase().includes(search) ||
                    product.ean.toLowerCase().includes(search) ||
                    product.manufacturerCode.toLowerCase().includes(search) ||
                    competitor.name.toLowerCase().includes(search)
                );
            });

            setDisplayedAlerts(filteredAlerts);
        }

        filterAlerts();
    }, [searchText, alerts]);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchText, displayedAlerts]);

    function ActionShelf() {
        return (
            <Box sx={{ display: "flex" }}>
                <Tooltip
                    placement={"right"}
                    arrow
                    title={"Search alerts by competitor, product name, EAN, or manufacturer code"}
                >
                    <TextField
                        key={'alert-search'}
                        variant={'outlined'}
                        placeholder={'Search alert'}
                        label={"Competitor, product name, EAN or manufacturer code"}
                        value={searchText}
                        inputRef={searchInputRef}
                        onChange={(e) => setSearchText(e.target.value)}
                        sx={{ my: 2, width: '25rem' }}
                        autoComplete={"off"}
                    />
                </Tooltip>
                {searchText && (
                    <IconButton
                        onClick={(e) => {
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
                {isAlertsLoading && <CircularProgress />}
                {isAlertsError && <AlertIcon severity="error">Error loading alerts</AlertIcon>}
                {!isAlertsLoading && !isAlertsError && alerts && <AlertTable alerts={displayedAlerts} />}
            </Grid>
        )
    }

    return (
        <>
            <Head>
                <title>Alerts</title>
            </Head>
            <DashboardDrawerPageTemplate
            currentPage={DashboardDrawerItem.Alerts}
            pageTitle={"Alerts"}
            pageSubtitle={"Check out your latest price alerts"}
            actionShelf={<ActionShelf key={'alert-action-shelf'}/>}
            pageComponent={<PageComponent/>}
            key={'alert-page'}
        /></>
    )
}
