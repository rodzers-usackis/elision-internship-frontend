import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import styles from '../../../styles/DashboardCatalog.module.css'
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
import {getComparator, Order} from "../../../components/my-catalog/table-sorting-functions/getComparator";
import {stableSort} from "../../../components/my-catalog/table-sorting-functions/stableSort";
import {EnhancedTableToolbar} from "../../../components/my-catalog/table-utils/EnhancedTableToolbar";
import {EnhancedTableHead} from "../../../components/my-catalog/table-utils/EnhancedTableHead";
import {TrackedProduct} from "../../../model/TrackedProduct";
import {useTrackedProducts} from "../../../hooks/products/useTrackedProducts";
import {Product} from "../../../model/Product";
import Button from "@mui/material/Button";
import Link from "next/link";
import DashboardDrawerPageTemplate from "../../../components/dashboard-drawer/DashboardDrawerPageTemplate";
import {DashboardDrawerItem} from "../../../components/dashboard-drawer/DashboardDrawerItems";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import ProductDetailsModal from "../../../components/my-catalog/ProductDetailsModal";

export default function MyCatalog() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof TrackedProduct | keyof Product>('productPurchaseCost');
    const [selected, setSelected] = useState<TrackedProduct[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isProductDetailsModalOpen, setIsProductDetailsModalOpen] = useState(false);
    const [displayedProduct, setDisplayedProduct] = useState<Product | null>();
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

    function PageComponent() {
        return (
            <>
                <ProductDetailsModal open={isProductDetailsModalOpen}
                                     onClose={() => setIsProductDetailsModalOpen(false)}
                                     product={displayedProduct}/>
                <Box sx={{width: '100%', pt: 2}}>
                    <Paper sx={{width: '100%', mb: 2}}>
                        <EnhancedTableToolbar selected={selected} numSelected={selected.length}
                                              setSelected={setSelected}/>
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
                                                    <div style={{display: 'flex'}}><Tooltip
                                                        title={"Click to go to this product's report"}
                                                        placement={"left"}
                                                        arrow
                                                    ><Button
                                                        className={styles.productLinkButton}
                                                        sx={{my: '0.4rem', display: 'inline-block'}}
                                                        component={Link}
                                                        href={{
                                                            pathname: '/dashboard/reports',
                                                            query: {
                                                                product_id: row.product.id
                                                            }
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >{row.product.name}</Button></Tooltip>
                                                        <Tooltip title={"Display product's details"} placement={"right"} arrow>
                                                            <IconButton
                                                                sx={{display: 'inline-block'}}
                                                                aria-label="display product's details"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setDisplayedProduct(row.product);
                                                                    setIsProductDetailsModalOpen(true);
                                                                }}>
                                                                <InfoIcon/>
                                                            </IconButton>
                                                        </Tooltip></div>
                                                </TableCell>
                                                <TableCell align="right">{row.product.category}</TableCell>
                                                <TableCell align="right">{row.productPurchaseCost}</TableCell>
                                                <TableCell align="right">{row.productSellPrice}</TableCell>
                                                <TableCell
                                                    align="right">{row.minPrice || "no minimum price set"}</TableCell>
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
            </>
        )
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
            pageSubtitle={`Import and manage your products (${rows?.length} active).`}
            actionShelf={(
                <ActionShelf/>
            )}
            pageComponent={(
                <PageComponent/>
            )}
        />
    )

}