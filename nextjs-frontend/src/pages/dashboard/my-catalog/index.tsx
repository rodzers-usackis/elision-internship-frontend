import React, {ChangeEvent, useContext, useEffect, useMemo, useState} from "react";
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import {Checkbox, CircularProgress, Divider, Grid, TextField, Typography} from "@mui/material";
import styles from '../../../styles/MyCatalog.module.css'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {getComparator, Order} from "../../../components/my-catalog/table-sorting-functions/getComparator";
import {stableSort} from "../../../components/my-catalog/table-sorting-functions/stableSort";
import {EnhancedTableToolbar} from "../../../components/my-catalog/table-utils/EnhancedTableToolbar";
import {EnhancedTableHead} from "../../../components/my-catalog/table-utils/EnhancedTableHead";
import {TrackedProduct} from "../../../model/TrackedProduct";
import {UUID, randomUUID} from "crypto";
import {useTrackedProducts} from "../../../hooks/products/useTrackedProducts";
import {Product} from "../../../model/Product";
import useAuthenticationCheck from "../../../hooks/useAuthenticationCheck";
import AuthenticationContext from "../../../context/authentication/AuthenticationContext";

//
// function createData(
//     id: UUID,
//     name: string,
//     ean: number,
//     brand: string,
//     cost: number,
//     price: number,
//     competitorPrices: string,
//     position: number,
//     status: string,
//     isTracked: boolean
// ): TrackedProduct {
//     return {
//         id,
//         name,
//         ean,
//         brand,
//         cost,
//         price,
//         competitorPrices,
//         position,
//         status,
//         isTracked
//     };
// }

// const rows = [
//     createData(randomUUID(), 'Iphone 14 Pro 128 GB', 194253401179, 'Apple', 799.00, 1499.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'Iphone 14 Pro 256 GB', 194253401180, 'Apple', 899.00, 1599.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'Samsung Galaxy S22 128 GB', 194253401181, 'Samsung', 699.00, 1199.00, 'Show', 1, 'Inactive'),
//     createData(randomUUID(), 'Samsung Galaxy S22 256 GB', 194253401182, 'Samsung', 799.00, 1299.00, 'Show', 1, 'Active'),
//     createData(randomUUID(), 'Google Pixel 6 128 GB', 194253401183, 'Google', 699.00, 1099.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'Google Pixel 6 256 GB', 194253401184, 'Google', 799.00, 1199.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'OnePlus 10 Pro 128 GB', 194253401185, 'OnePlus', 899.00, 1399.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'OnePlus 10 Pro 256 GB', 194253401186, 'OnePlus', 999.00, 1499.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'Xiaomi Mi 12 128 GB', 194253401187, 'Xiaomi', 599.00, 999.00, 'Show', 1, 'Active'),
//     createData(randomUUID(), 'Xiaomi Mi 12 256 GB', 194253401188, 'Xiaomi', 699.00, 1099.00, 'Show', 1, 'Active'),
//     createData(randomUUID(), 'Sony Xperia 5 III 128 GB', 194253401189, 'Sony', 799.00, 1299.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'Sony Xperia 5 III 256 GB', 194253401190, 'Sony', 899.00, 1399.00, 'Show', 2, 'Active'),
//     createData(randomUUID(), 'LG V80 ThinQ 128 GB', 194253401191, 'LG', 599.00, 999.00, 'Show', 1, 'Active'),
//     createData(randomUUID(), 'LG V80 ThinQ 256 GB', 194253401192, 'LG', 699.00, 1099.00, 'Show', 1, 'Active'),
//     createData(randomUUID(), 'Motorola Moto G99 128 GB', 194253401193, 'Motorola', 399.00, 699.00, 'Show', 1, 'Active'),
//     createData(randomUUID(), 'Motorola Moto G99 256 GB', 194253401194, 'Motorola', 499.00, 799.00, 'Show', 1, 'Active'),
// ];

export default function MyCatalog() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof TrackedProduct | keyof Product>('productPurchaseCost');
    const [selected, setSelected] = useState<TrackedProduct[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const {
        trackedProducts: rows,
        isTrackedProductsError,
        isTrackedProductsLoading
    } = useTrackedProducts<TrackedProduct>();

    useEffect(() => {
        setSelected([])
    }, [rows])


    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof ProductData,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows || [];
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, product: TrackedProduct) => {
        const isAlreadyChecked = selected.includes(product)

        let newSelected;
        if (isAlreadyChecked) {
            newSelected = selected.filter((selectedProduct) => selectedProduct.id !== product.id)
        } else {
            newSelected = [...selected, product]
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (product: TrackedProduct) => selected.includes(product);

// Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(rows || [], getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, rows],
    );

    if (isTrackedProductsLoading) return <CircularProgress/>;

    if (isTrackedProductsError || !rows) return (<div>Something went wrong</div>);


    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'} px={5}>
                <Grid item style={{flex: 0}}>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.dashboardMainContentWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        My Catalog
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Import and manage your products ({rows.length} active) (Last import 9 minutes ago)
                    </Typography>
                    <Grid container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Grid item xs={6} className={styles.actionShelf}>
                            <TextField id="search-field-input" label={"Search Product"} variant="outlined"
                                       fullWidth={true}/>
                        </Grid>
                    </Grid>
                    <Divider/>

                    <Box sx={{width: '100%'}}>
                        <Paper sx={{width: '100%', mb: 2}}>
                            <EnhancedTableToolbar selected={selected} numSelected={selected.length} setSelected={setSelected}/>
                            <TableContainer>
                                <Table
                                    sx={{minWidth: 750}}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                    />
                                    <TableBody>
                                        {visibleRows.map((row, index) => {
                                            const isItemSelected = isSelected(row);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    selected={isItemSelected}
                                                    sx={{cursor: 'pointer'}}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            color="primary"
                                                            checked={isItemSelected}
                                                            inputProps={{
                                                                'aria-labelledby': labelId,
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.product.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.product.category}</TableCell>
                                                    <TableCell align="right">{row.productPurchaseCost}</TableCell>
                                                    <TableCell align="right">{row.productSellPrice}</TableCell>
                                                    <TableCell align="right">{row.product.ean}</TableCell>
                                                    <TableCell align="right">{row.product.manufacturerCode}</TableCell>
                                                    <TableCell align="right"
                                                               style={{color: row.tracked ? 'green' : 'red'}}>
                                                        {row.tracked ? 'Tracked' : 'Not tracked'}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 50]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                        <FormControlLabel
                            control={<Switch checked={dense} onChange={handleChangeDense}/>}
                            label="Dense padding"
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}