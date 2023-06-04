import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import styles from '../../../styles/DashboardGenericContent.module.css'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {getComparator, Order} from "../../../utils/table-sorting-functions/my-catalog/getComparator";
import {stableSort} from "../../../utils/table-sorting-functions/my-catalog/stableSort";
import {EnhancedTableToolbar} from "../../../components/my-catalog/table-utils/EnhancedTableToolbar";
import {EnhancedTableHead} from "../../../components/my-catalog/table-utils/EnhancedTableHead";
import {TrackedProduct} from "../../../model/TrackedProduct";
import {useTrackedProducts} from "../../../hooks/products/useTrackedProducts";
import Button from "@mui/material/Button";
import Link from "next/link";
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import {DashboardDrawerItem} from "../../../components/dashboard-drawer/DashboardDrawerItems";
import CatalogTableData from "../../../model/my-catalog/CatalogTableData";
import Alert from "@mui/material/Alert";

export default function MyCatalog() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof CatalogTableData>('productName');
    const [selected, setSelected] = useState<CatalogTableData[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const {
        trackedProducts,
        isTrackedProductsError,
        isTrackedProductsLoading
    } = useTrackedProducts();

    const catalogTableData: CatalogTableData[] = (trackedProducts ?? []).map((trackedProduct: TrackedProduct) => ({
        id: trackedProduct.id,
        productName: trackedProduct.product.name,
        productCategory: trackedProduct.product.category,
        productPurchaseCost: trackedProduct.productPurchaseCost,
        productSellPrice: trackedProduct.productSellPrice,
        minPrice: trackedProduct.minPrice,
        productEan: trackedProduct.product.ean,
        productManufacturerCode: trackedProduct.product.manufacturerCode,
        isTracked: trackedProduct.tracked,
    }));

    useEffect(() => {
        setSelected([])
    }, [])

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof CatalogTableData,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelected(catalogTableData);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, product: CatalogTableData) => {
        const isSelected = selected.some((selectedProduct) => selectedProduct.id === product.id);
        const newSelected = isSelected
            ? selected.filter((selectedProduct) => selectedProduct.id !== product.id)
            : [...selected, product];

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

    const isSelected = (product: CatalogTableData) => selected.some((selectedProduct) => selectedProduct.id === product.id);

// Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - catalogTableData.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(catalogTableData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, catalogTableData],
    );

    function PageComponent() {
        return (
            <>
                <Grid item className={styles.contentWrapper}>
                    {isTrackedProductsLoading ? (
                        <CircularProgress/>
                    ) : isTrackedProductsError ? (
                        <Alert severity="error">Error loading alerts</Alert>
                    ) : (
                        !isTrackedProductsLoading && !isTrackedProductsError && catalogTableData && (
                            <Grid item className={styles.lineChart}>
                                <Box sx={{width: '100%', pt: 2}}>
                                    <Paper sx={{width: '100%', mb: 2}}>
                                        <EnhancedTableToolbar title={"Products"} selected={selected}
                                                              numSelected={selected.length}
                                                              setSelected={setSelected}/>
                                        <TableContainer>
                                            <Table
                                                aria-labelledby="tableTitle"
                                                size={dense ? 'small' : 'medium'}
                                            >
                                                <EnhancedTableHead
                                                    numSelected={selected.length}
                                                    order={order}
                                                    orderBy={orderBy}
                                                    onSelectAllClick={handleSelectAllClick}
                                                    onRequestSort={handleRequestSort}
                                                    rowCount={catalogTableData.length}
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
                                                                    <Tooltip
                                                                        title={"Click to go to this product's report"}
                                                                        placement={"left"}
                                                                        arrow
                                                                    ><Button
                                                                        className={styles.productLinkButton}
                                                                        sx={{my: '0.4rem'}}
                                                                        component={Link}
                                                                        href={`/dashboard/reports?product_id=${row.id}`}
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                        }}
                                                                    >{row.productName}</Button></Tooltip>
                                                                </TableCell>
                                                                <TableCell
                                                                    align="right">{row.productCategory}</TableCell>
                                                                <TableCell
                                                                    align="right">{row.productPurchaseCost}</TableCell>
                                                                <TableCell
                                                                    align="right">{row.productSellPrice}</TableCell>
                                                                <TableCell
                                                                    align="right">{row.minPrice || "no minimum price set"}</TableCell>
                                                                <TableCell align="right">{row.productEan}</TableCell>
                                                                <TableCell
                                                                    align="right">{row.productManufacturerCode}</TableCell>
                                                                <TableCell align="right"
                                                                           style={{color: row.isTracked ? 'green' : 'red'}}>
                                                                    {row.isTracked ? 'Tracked' : 'Not tracked'}
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
                                            count={catalogTableData.length}
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
                        )
                    )}
                </Grid>
            </>
        );
    }

    function ActionShelf() {
        return (
            <Grid container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Grid item xs={6} className={styles.actionShelf}>
                    <Tooltip title={"Searching not available yet"}>
                        <TextField id="search-field-input" label={"Search Product"}
                                   variant="outlined"
                                   fullWidth={true} disabled/>
                    </Tooltip>
                </Grid>
            </Grid>
        )
    }

    return (
        <DashboardDrawerPageTemplate
            currentPage={DashboardDrawerItem.MyCatalog}
            pageTitle={"My catalog"}
            pageSubtitle={`Import and manage your products (${catalogTableData?.length} active).`}
            actionShelf={(
                <ActionShelf/>
            )}
            pageComponent={(
                <PageComponent/>
            )}
        />
    )

}