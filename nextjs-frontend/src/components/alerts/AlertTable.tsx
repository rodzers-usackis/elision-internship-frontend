import TableCell from "@mui/material/TableCell";
import {Alert} from "../../model/Alert";
import {AlertItemRow} from "./AlertItemRow";
import styles from "../../styles/AlertList.module.css"
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";

interface AlertListProps {
    alerts: Alert[];
}

export function AlertTable({alerts}: AlertListProps) {


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell sx={{visibility: 'hidden'}}>new</TableCell>
                        <TableCell> Created at </TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Competitor</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell sx={{visibility: 'hidden'}}>Lower/Higher</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {alerts.map(alert => <AlertItemRow alert={alert}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}