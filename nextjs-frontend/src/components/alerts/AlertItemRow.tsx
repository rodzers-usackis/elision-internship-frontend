import {Alert} from "../../model/Alert";
import TableCell from "@mui/material/TableCell";
import {PriceComparisonTypeEnum} from "../../model/PriceComparisonTypeEnum";
import TableRow from "@mui/material/TableRow";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import moment from 'moment';

interface AlertItemProps {
    alert: Alert;
}

const dateTimeOptions : Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "narrow",
    day: "numeric"
}

export function AlertItemRow({alert}: AlertItemProps) {

    return (
        <TableRow>
            <TableCell>{alert.read ? '' : <FiberNewIcon/>}</TableCell>
            <TableCell>{moment(alert.timestamp).format("YYYY-MM-DD [\u00A0\u00A0] HH:mm")}</TableCell>
            <TableCell>{alert.product.name}</TableCell>
            <TableCell>{alert.retailerCompany.name}</TableCell>
            <TableCell>{alert.price} €</TableCell>
            <TableCell>
                {alert.priceComparisonType === PriceComparisonTypeEnum.LOWER ?
                    <TrendingDownIcon/> : <TrendingUpIcon/>
                }
            </TableCell>
        </TableRow>)

}