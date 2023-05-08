import * as React from 'react';
import DashboardDrawer from "<components>/components/dashboard-drawer/DashboardDrawer";
import {Alert, alpha, Checkbox, CircularProgress, Divider, Grid, TextField, Typography} from "@mui/material";
import styles from '../../../styles/MyCatalog.module.css'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import {visuallyHidden} from '@mui/utils';
import {useProducts} from "<components>/hooks/register/useProducts";

interface Data {
    name: string;
    ean: number,
    brand: string;
    cost: number;
    price: number;
    competitorPrices: string;
    position: number,
    status: string
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Product Name',
    },
    {
        id: 'brand',
        numeric: true,
        disablePadding: false,
        label: 'Brand',
    },
    {
        id: 'cost',
        numeric: true,
        disablePadding: false,
        label: 'Cost',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'competitorPrices',
        numeric: true,
        disablePadding: false,
        label: 'Competitor Prices',
    },
    {
        id: 'position',
        numeric: true,
        disablePadding: false,
        label: 'Position',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const handleAddProduct = () => {

}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const {numSelected} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Products
                </Typography>
            )}
            {numSelected === 1 ? (
                <>
                    <Tooltip title="Edit Product">
                        <IconButton size="large">
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Product">
                        <IconButton size="large">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </>
            ) : (
                numSelected > 1 ? (
                    <Tooltip title="Delete Selected Products">
                        <IconButton size="large">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Add Product">
                        <IconButton size="large" onClick={handleAddProduct}>
                            <AddBoxIcon/>
                        </IconButton>
                    </Tooltip>
                )
            )}
        </Toolbar>
    );
}

export default function MyCatalog() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('cost');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const {isLoadingGetProducts, isErrorGetProducts, products} = useProducts();

    if (isLoadingGetProducts) {
        return <CircularProgress sx={{display: "block", mt: "10em", mx: "auto"}}/>
    }

    if (isErrorGetProducts) {
        return <Alert severity="error">Station could not be loaded</Alert>;
    }

    if (products!.length == 0) {
        return <Alert severity="error">No products found</Alert>;
    }

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = products!.map((n) => n.name);
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

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products!.length) : 0;

    // const visibleRows = React.useMemo(
    //     () =>
    //         stableSort(products!, getComparator(order, orderBy)).slice(
    //             page * rowsPerPage,
    //             page * rowsPerPage + rowsPerPage,
    //         ),
    //     [order, orderBy, page, rowsPerPage],
    // );


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
                        Import and manage your products ({products!.length} active) (Last import 9 minutes ago)
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
                                        rowCount={products!.length}
                                    />
                                    <TableBody>
                                        {products!.map((row, index) => {
                                            const isItemSelected = isSelected(row.name as string);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row!.name as string)}
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
                                                    <TableCell align="right">{row.description}</TableCell>
                                                    <TableCell align="right">{699.00}</TableCell>
                                                    <TableCell align="right">{1099.00}</TableCell>
                                                    <TableCell align="right">{'Show'}</TableCell>
                                                    <TableCell align="right">2/7</TableCell>
                                                    <TableCell align="right"
                                                               style={{color: 'Active' === 'Active' ? 'green' : 'red'}}>
                                                        'Active'
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
                                count={products!.length}
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