import Grid from "@mui/material/Grid";
import styles from "../../../styles/DashboardGenericContent.module.css";
import DashboardDrawer from "../../../components/dashboard-drawer/DashboardDrawer";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {EnhancedTableToolbar} from "../../../components/alert-rules/table-utils/EnhancedTableToolbar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {EnhancedTableHead} from "../../../components/alert-rules/table-utils/EnhancedTableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import {useAlertRules} from "../../../hooks/alert-rules/useAlertRules";
import {getComparator, Order} from "../../../components/table-components/table-sorting-functions/getComparator";
import AlertRules from "../../../model/alert-rules/AlertRules";
import {stableSort} from "../../../components/table-components/table-sorting-functions/stableSort";
import AlertRulesTableData from "../../../model/alert-rules/AlertRulesTableData";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

export default function AlertRulesPage() {
    const {isAlertRulesLoading, isAlertRulesError, alertRules} = useAlertRules();
    const [selected, setSelected] = useState<AlertRulesTableData[]>([]);
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof AlertRulesTableData>('productName');
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const tableData: AlertRulesTableData[] = (alertRules ?? []).map((rule: AlertRules) => ({
        id: rule.id,
        productName: rule.product.name,
        priceThreshold: rule.priceThreshold,
        priceComparisonType: rule.priceComparisonType,
        retailerCompanies: rule.retailerCompanies[0].name,
    }));

    useEffect(() => {
        setSelected([])
    }, [])

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof AlertRulesTableData,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelected(tableData);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, rule: AlertRulesTableData) => {
        const isSelected = selected.some((selectedProduct) => selectedProduct.id === rule.id);
        const newSelected = isSelected
            ? selected.filter((selectedProduct) => selectedProduct.id !== rule.id)
            : [...selected, rule];

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

    const isSelected = (rule: AlertRulesTableData) => selected.some((selectedProduct) => selectedProduct.id === rule.id);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

    const visibleRows = useMemo(
        () =>
            stableSort(tableData, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, tableData],
    );

    console.log('Visible Rows:', visibleRows);

    return (
        <>
            <Grid container display={'flex'} flexDirection={'row'} height={'100vh'}>
                <Grid item className={styles.drawerWrapper}>
                    <DashboardDrawer/>
                </Grid>

                <Grid item className={styles.dashboardWrapper}>
                    <Typography className={styles.dashboardTitle}>
                        Alert Rules
                    </Typography>
                    <Typography className={styles.dashboardSubtitle}>
                        Adjust your alert rules
                    </Typography>


                    <Tooltip title={"Feature not available yet"} arrow><TextField
                        variant={'outlined'}
                        disabled
                        placeholder={'Search alert'}
                        sx={{my: 2}}

                    /></Tooltip>
                    <Divider/>

                    <Grid item className={styles.contentWrapper}>
                        {isAlertRulesLoading ? (
                            <CircularProgress/>
                        ) : isAlertRulesError ? (
                            <Alert severity="error">Alert rules could not be loaded</Alert>
                        ) : (<>
                                <Grid item className={styles.lineChart}>
                                    <Box sx={{width: '100%', pt: 2}}>
                                        <Paper sx={{width: '100%', mb: 2}}>
                                            <EnhancedTableToolbar selected={selected} numSelected={selected.length} setSelected={setSelected}/>
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
                                                        rowCount={tableData.length}
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
                                                                        {row.id}
                                                                    </TableCell>
                                                                    <TableCell align="right">{row.productName}</TableCell>
                                                                    <TableCell align="right">{row.priceThreshold}</TableCell>
                                                                    <TableCell align="right">{row.priceComparisonType}</TableCell>
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
                                                count={tableData.length}
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
                            </>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </>);
}