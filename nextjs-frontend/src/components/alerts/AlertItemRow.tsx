import {Alert} from "../../model/Alert";
import TableCell from "@mui/material/TableCell";
import {PriceComparisonTypeEnum} from "../../model/PriceComparisonTypeEnum";
import TableRow from "@mui/material/TableRow";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import moment from 'moment';

interface AlertItemProps {
    alert: Alert;
}

const dateTimeOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "narrow",
    day: "numeric"
}

export function AlertItemRow({alert}: AlertItemProps) {

    console.log(alert);
    return (
        <TableRow>
            <TableCell>{alert.read ? '' : <FiberNewIcon/>}</TableCell>
            <TableCell>{moment(alert.timestamp).format("YYYY-MM-DD [\u00A0\u00A0] HH:mm")}</TableCell>
            <TableCell>{alert.product.name}</TableCell>
            <TableCell>{alert.retailerCompany.name}</TableCell>
            <TableCell>{alert.alertRulePriceThreshold} €</TableCell>
            <TableCell>{alert.price} €</TableCell>
            <TableCell>
                {
                    alert.priceComparisonType === PriceComparisonTypeEnum.LOWER ?
                        <span>
                            Competitor&apos;s price decreased
                            {/*<TrendingDownIcon/>*/}
                        </span>
                        :
                        <span>
                            Competitor&apos;s price increased
                            {/*<TrendingUpIcon/>*/}
                      </span>
                }
            </TableCell>
        </TableRow>)

}