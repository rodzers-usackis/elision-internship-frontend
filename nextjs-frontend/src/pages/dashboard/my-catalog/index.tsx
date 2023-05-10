import React, {ChangeEvent, useMemo, useState} from "react";
import DashboardDrawer from "<components>/components/dashboard-drawer/DashboardDrawer";
import {Checkbox, Divider, Grid, TextField, Typography} from "@mui/material";
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
import {getComparator, Order} from "<components>/components/my-catalog/table-sorting-functions/getComparator";
import {stableSort} from "<components>/components/my-catalog/table-sorting-functions/stableSort";
import {EnhancedTableToolbar} from "<components>/components/my-catalog/table-utils/EnhancedTableToolbar";
import {EnhancedTableHead} from "<components>/components/my-catalog/table-utils/EnhancedTableHead";


function createData(
    name: string,
    ean: number,
    brand: string,
    cost: number,
    price: number,
    competitorPrices: string,
    position: number,
    status: string
): ProductData {
    return {
        name,
        ean,
        brand,
        cost,
        price,
        competitorPrices,
        position,
        status
    };
}

const rows = [
    createData('Iphone 14 Pro 128 GB', 194253401179, 'Apple', 799.00, 1499.00, 'Show', 2, 'Active'),
    createData('Iphone 14 Pro 256 GB', 194253401180, 'Apple', 899.00, 1599.00, 'Show', 2, 'Active'),
    createData('Samsung Galaxy S22 128 GB', 194253401181, 'Samsung', 699.00, 1199.00, 'Show', 1, 'Inactive'),
    createData('Samsung Galaxy S22 256 GB', 194253401182, 'Samsung', 799.00, 1299.00, 'Show', 1, 'Active'),
    createData('Google Pixel 6 128 GB', 194253401183, 'Google', 699.00, 1099.00, 'Show', 2, 'Active'),
    createData('Google Pixel 6 256 GB', 194253401184, 'Google', 799.00, 1199.00, 'Show', 2, 'Active'),
    createData('OnePlus 10 Pro 128 GB', 194253401185, 'OnePlus', 899.00, 1399.00, 'Show', 2, 'Active'),
    createData('OnePlus 10 Pro 256 GB', 194253401186, 'OnePlus', 999.00, 1499.00, 'Show', 2, 'Active'),
    createData('Xiaomi Mi 12 128 GB', 194253401187, 'Xiaomi', 599.00, 999.00, 'Show', 1, 'Active'),
    createData('Xiaomi Mi 12 256 GB', 194253401188, 'Xiaomi', 699.00, 1099.00, 'Show', 1, 'Active'),
    createData('Sony Xperia 5 III 128 GB', 194253401189, 'Sony', 799.00, 1299.00, 'Show', 2, 'Active'),
    createData('Sony Xperia 5 III 256 GB', 194253401190, 'Sony', 899.00, 1399.00, 'Show', 2, 'Active'),
    createData('LG V80 ThinQ 128 GB', 194253401191, 'LG', 599.00, 999.00, 'Show', 1, 'Active'),
    createData('LG V80 ThinQ 256 GB', 194253401192, 'LG', 699.00, 1099.00, 'Show', 1, 'Active'),
    createData('Motorola Moto G99 128 GB', 194253401193, 'Motorola', 399.00, 699.00, 'Show', 1, 'Active'),
    createData('Motorola Moto G99 256 GB', 194253401194, 'Motorola', 499.00, 799.00, 'Show', 1, 'Active'),
];

export default function MyCatalog() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof ProductData>('cost');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        switch (selectedIndex) {
            case -1:
                newSelected = newSelected.concat(selected, name);
                break;
            case 0:
                newSelected = newSelected.concat(selected.slice(1));
                break;
            case selected.length - 1:
                newSelected = newSelected.concat(selected.slice(0, -1));
                break;
            default:
                newSelected = newSelected.concat(
                    selected.slice(0, selectedIndex),
                    selected.slice(selectedIndex + 1)
                );
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

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );


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
                            <EnhancedTableToolbar numSelected={selected.length}/>
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
                                            const isItemSelected = isSelected(row.name);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.name)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.name}
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
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.brand}</TableCell>
                                                    <TableCell align="right">{row.cost}</TableCell>
                                                    <TableCell align="right">{row.price}</TableCell>
                                                    <TableCell align="right">{row.competitorPrices}</TableCell>
                                                    <TableCell align="right">{row.position}/7</TableCell>
                                                    <TableCell align="right"
                                                               style={{color: row.status === 'Active' ? 'green' : 'red'}}>
                                                        {row.status}
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