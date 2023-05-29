// Component Imports
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


// Styling Imports
import styles from "../../../styles/DashboardReports.module.css";

// Hook Imports
import {useProducts} from "../../../hooks/register/useProducts";
import {useProductPriceHistorian} from "../../../hooks/reports/useProductPriceHistorian";

// Misc Imports
import {PricingHistoryGraph} from "../../../components/reports/PricingHistoryGraph";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {SingleInputDateRangeField} from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import {TrackedProduct} from "../../../model/TrackedProduct";
import {UUID} from "crypto";
import {ChangeEvent, useEffect, useState} from "react";
import {DateRange} from "@mui/x-date-pickers-pro";
import dayjs, {Dayjs} from "dayjs";

export default function Reports() {
    const {isLoadingGetProducts, isErrorGetProducts, products} = useProducts();
    const [productId, setProductId] = useState<UUID | undefined>('' as UUID);

    const beforeDate = dayjs('2023-12-12');
    const afterDate = dayjs('2023-01-01');
    const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Dayjs>>([
        afterDate,
        beforeDate,
    ]);

    const {
        isProductPriceHistoryLoading,
        isProductPriceHistoryError,
        productPriceHistory
    } = useProductPriceHistorian(productId as UUID, selectedDateRange[1], selectedDateRange[0]);

    const handleDateChange = (dateRange: DateRange<Dayjs>) => {
        setSelectedDateRange(dateRange);
    };

    const handleProductChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductId(event.target.value as UUID);
    };

    useEffect(() => {
        if (selectedDateRange[1] && selectedDateRange[0] && products && products.length > 0) {
            const selectedProductId = products[0].product.id;
            setProductId(selectedProductId); // Set the productId state
        }

    }, [products]);

    const reportTypes = [
        {
            value: 1,
            label: 'Pricing History'
        }
    ]

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
                    }}>
                        <Grid item xs={3} className={styles.actionShelf}>
                            <TextField
                                select
                                id="outlined-select-report-type"
                                label="Select report type"
                                defaultValue={reportTypes[0].value}
                                fullWidth={true}
                            >
                                {reportTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={3} className={styles.actionShelf}>
                            <TextField
                                select
                                id="outlined-select-product"
                                label="Select product"
                                defaultValue={products?.[0].product.id}
                                value={productId}
                                onChange={handleProductChange}
                                fullWidth={true}
                            >
                                {products?.map((option: TrackedProduct) => (
                                    <MenuItem key={option.product.name} value={option.product.id}>
                                        {option.product.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={3} className={styles.actionShelf}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateRangePicker slots={{field: SingleInputDateRangeField}} sx={{width: '100%'}}
                                                 defaultValue={selectedDateRange} onChange={handleDateChange}/>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <Divider/>

                    <Grid item className={styles.chartWrapper}>
                        {isLoadingGetProducts || isProductPriceHistoryLoading ? (
                            <CircularProgress/>
                        ) : isErrorGetProducts || isProductPriceHistoryError ? (
                            <Alert severity="error">Price historian for this product could not be loaded</Alert>
                        ) : (
                            <Grid item className={styles.lineChart}>
                                <PricingHistoryGraph data={productPriceHistory}/>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}