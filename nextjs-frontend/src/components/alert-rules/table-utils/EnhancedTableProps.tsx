import React from "react";
import {Order} from "../../table-components/table-sorting-functions/getComparator";
import AlertRulesTableData from "../../../model/alert-rules/AlertRulesTableData";

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof AlertRulesTableData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}