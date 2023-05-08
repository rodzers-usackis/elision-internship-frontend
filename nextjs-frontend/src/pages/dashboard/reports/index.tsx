import {Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import DashboardDrawer from "<components>/components/dashboard-drawer/DashboardDrawer";
import styles from "<components>/styles/MyCatalog.module.css";
import * as React from "react";
import {useProducts} from "<components>/hooks/register/useProducts";
import {Product} from "<components>/model/Product";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import * as faker from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function Reports() {
    const {isLoadingGetProducts, isErrorGetProducts, products} = useProducts();

    // Set the start date
    let date = new Date();

// Create an array to hold the objects
    let objects = [];

// Loop to create 50 objects with incremental timestamps of 1 day
    for (let i = 0; i < 50; i++) {
        // Add 1 day to the current date
        date.setDate(date.getDate() + 1);

        // Generate a random price between 1 and 100
        const price = faker.faker.datatype.number({ min: 399, max: 699, precision: 2 });

        // Create an object with the date and price
        const obj = { date: date.toISOString(), price: price };

        // Add the object to the array
        objects.push(obj);
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Price History',
            },
        },
    };

    const labels = objects.map((obj) => obj.date);

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: objects.map((obj) => obj.price),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const reportTypes = [
        {
            value: 1,
            label: 'Pricing History'
        }
    ]

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'} px={5}>
                <Grid item style={{flex: 0}}>
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

                        <Line options={options} data={data} />;
                    </Grid>
                    <Divider/>

                </Grid>
            </Grid>
        </>
    )
}