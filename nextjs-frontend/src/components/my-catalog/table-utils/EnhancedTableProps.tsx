import React from "react";
import {Order} from "../../../utils/table-sorting-functions/my-catalog/getComparator";
import CatalogTableData from "../../../model/my-catalog/CatalogTableData";

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof CatalogTableData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}