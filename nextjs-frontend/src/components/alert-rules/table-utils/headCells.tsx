import {HeadCell} from "./HeadCell";

export const headCells: readonly HeadCell[] = [
    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: 'Product ID',
    },
    {
        id: 'productName',
        numeric: false,
        disablePadding: false,
        label: 'Product',
    },
    {
        id: 'priceThreshold',
        numeric: true,
        disablePadding: false,
        label: 'Price Threshold',
    },
    {
        id: 'priceComparisonType',
        numeric: true,
        disablePadding: false,
        label: 'Price Comparison Type',
    },
];