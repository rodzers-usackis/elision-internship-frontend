import TableCell from "@mui/material/TableCell";
import {Alert} from "../../model/Alert";
import {AlertItemRow} from "./AlertItemRow";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import React, {ChangeEvent, useState} from "react";

interface AlertListProps {
    alerts: Alert[];
}

export function AlertTable({alerts}: AlertListProps) {
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);


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

    return (
        <>
            <Box sx={{width: '100%', pt: 2}}>
                <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{visibility: 'hidden'}}>new</TableCell>
                                <TableCell>Created at </TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Competitor</TableCell>
                                <TableCell>Price Threshold</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Alert Trigger</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {alerts.map(alert => <AlertItemRow alert={alert}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={alerts.length}
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