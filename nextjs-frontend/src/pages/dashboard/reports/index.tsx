import * as React from "react";

// Component Imports
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
// import {Button, Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Styling Imports
import styles from "../../../styles/DashboardReports.module.css";

// Hook Imports
import {useProducts} from "../../../hooks/register/useProducts";
import {Product} from "../../../model/Product";

// Misc Imports
import {PricingHistoryGraph} from "../../../components/reports/PricingHistoryGraph";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';


export default function Reports() {
    const {isLoadingGetProducts, isErrorGetProducts, products} = useProducts();


    const reportTypes = [
        {
            value: 1,
            label: 'Pricing History'
        }
    ]

    console.log(products)

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'}>
                <Grid item className={styles.drawerWrapper}>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.mainContentWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Reports
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Find out about the pricing trends of your competitors
                    </Typography>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        alignContent: 'start',
                    }}>
                        <Grid item xs={3} className={styles.actionShelf}>
                            <TextField
                                id="outlined-select-report-type"
                                select
                                label="Select"
                                helperText="Please select your report type"
                                fullWidth={true}
                            >
                                {reportTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value} defaultValue={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={3} className={styles.actionShelf}>
                            <TextField
                                id="outlined-select-product"
                                select
                                label="Select"
                                helperText="Please select your product"
                                fullWidth={true}
                            >
                                {products?.map((option: Product) => (
                                    <MenuItem key={option.name} value={option.name}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={3} className={styles.actionShelf}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateRangePicker slots={{ field: SingleInputDateRangeField }} sx={{width: '100%'}} />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={1} className={styles.actionShelf}>
                            <Button variant={'contained'}>Apply</Button>
                        </Grid>
                    </Grid>

                    <Divider/>

                    <Grid item className={styles.lineChart}>
                        <PricingHistoryGraph/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}