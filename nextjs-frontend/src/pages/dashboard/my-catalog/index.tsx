import React, {ChangeEvent, useEffect, useMemo, useRef, useState} from "react";
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
import ClearIcon from "@mui/icons-material/Clear";

export default function MyCatalog() {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof TrackedProduct | keyof Product>('productPurchaseCost');
    const [selected, setSelected] = useState<TrackedProduct[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [displayedTrackedProducts, setDisplayedTrackedProducts] = useState<TrackedProduct[] | undefined>([]);
    const [searchText, setSearchText] = useState<string>("");
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const {
        trackedProducts,
        isTrackedProductsError,
        isTrackedProductsLoading
    } = useTrackedProducts<TrackedProduct>();

    useEffect(() => {
        setSelected([])
    }, [displayedTrackedProducts])


    //should work with both dependencies together but for some reason it doesn't
    useEffect(() => {
        filterTrackedProducts();
    }, [trackedProducts])

    useEffect(() => {
        filterTrackedProducts();
    }, [searchText]);


    function filterTrackedProducts() {
        if (!trackedProducts) {
            return;
        }
        if (searchText === "" || !searchText) {
            setDisplayedTrackedProducts(trackedProducts);
            return;
        }

        const filteredTrackedProducts = trackedProducts.filter((trackedProduct) => {

            const productName = trackedProduct.product.name.toLowerCase();
            const ean = trackedProduct.product.ean.toLowerCase();
            const manufacturerCode = trackedProduct.product.manufacturerCode.toLowerCase();
            const category = trackedProduct.product.category.toLowerCase();

            const searchTextLowerCase = searchText.toLowerCase();

            return productName.includes(searchTextLowerCase) ||
                ean.includes(searchTextLowerCase) ||
                manufacturerCode.includes(searchTextLowerCase) ||
                category.includes(searchTextLowerCase);

        });

        setDisplayedTrackedProducts(filteredTrackedProducts);
    }

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
            const newSelected = displayedTrackedProducts || [];
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - displayedTrackedProducts.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(displayedTrackedProducts || [], getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, displayedTrackedProducts],
    );


    useEffect(() => {
        if (searchInputRef.current && document.activeElement !== searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchText, searchInputRef.current]);

    if (isTrackedProductsLoading) return <CircularProgress/>;

    if (isTrackedProductsError || !displayedTrackedProducts) return (<div>Something went wrong</div>);

    function ActionShelf() {
        return (
            <Box key={"product-search-box"}
                 sx={{display: 'flex'}}>
                {/*<Tooltip*/}
                {/*    title={"Search products by name, ean or manufacturer code"}>*/}
                    <TextField id="search-field-input"
                               key={"search-field-input"}
                               sx={{my: 2, width: '25rem'}}
                               placeholder={"Search Product"}
                               label={"Product name, ean or manufacturer code"}
                               variant="outlined"
                               inputRef={searchInputRef}
                               value={searchText}
                               onChange={(e) => {
                                   setSearchText(e.target.value);
                               }}
                               autoComplete={"off"}

                    />
                {/*</Tooltip>*/}
                {searchText && (
                    <IconButton onClick={(e) => {
                        setSearchText("");
                    }}
                                aria-label={"Clear input"}
                    >
                        <ClearIcon/>
                    </IconButton>
                )}
            </Box>
        )
    }

    function PageComponent() {
        return (
            <>
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
                                    rowCount={displayedTrackedProducts.length}
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
                                                    <Tooltip title={"Click to go to this product's report"}
                                                             placement={"left"}
                                                             arrow
                                                    ><Button
                                                        className={styles.productLinkButton} sx={{my: '0.4rem'}}
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
                            count={displayedTrackedProducts.length}
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

    return (
        <DashboardDrawerPageTemplate
            currentPage={DashboardDrawerItem.MyCatalog}
            pageTitle={"My catalog"}
            pageSubtitle={`Import and manage your products (${trackedProducts?.length}).`}
            actionShelf={(
                <ActionShelf key={"catalog-action-shelf"}/>
            )}
            pageComponent={(
                <PageComponent/>
            )}
            key={"catalog-page"}
        />
    )

}