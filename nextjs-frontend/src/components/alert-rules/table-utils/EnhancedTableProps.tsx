import React from "react";
import {Order} from "../../../utils/table-sorting-functions/my-catalog/getComparator";
import AlertRulesTableData from "../../../model/alert-rules/AlertRulesTableData";

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AlertRulesTableData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}