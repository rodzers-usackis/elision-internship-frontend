import {Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import DashboardDrawer from "<components>/components/dashboard-drawer/DashboardDrawer";
import styles from "<components>/styles/DashboardReports.module.css";
import * as React from "react";
import {useProducts} from "<components>/hooks/register/useProducts";
import {Product} from "<components>/model/Product";
import * as faker from '@faker-js/faker';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


export default function Reports() {
    const {isLoadingGetProducts, isErrorGetProducts, products} = useProducts();

    // Generate data for a period of 30 days
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 29);
    const endDate = new Date();

    // Initialize an empty array to store the data
    const data = [];

    // Generate a data point for each day in the period
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const price = parseFloat((699 + Math.random() * 200).toFixed(2));
        data.push({
            name: date.toISOString().split('T')[0],
            price: price,
        });
    }

    console.log(data)

    const reportTypes = [
        {
            value: 1,
            label: 'Pricing History'
        }
    ]

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'}>
                <Grid item>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.dashboardMainContentWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Reports
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Find out about the pricing trends of your competitors
                    </Typography>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Grid item xs={4} className={styles.actionShelf}>
                            <TextField
                                id="outlined-select-report-type"
                                select
                                label="Select"
                                helperText="Please select your report type"
                                fullWidth={true}
                            >
                                {reportTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={4} className={styles.actionShelf}>
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
                    </Grid>
                    <Divider/>

                    <Grid item className={styles.lineChart}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}