import {HeadCell} from "./HeadCell";

export const headCells: readonly HeadCell[] = [
    {
        id: 'productName',
        numeric: false,
        disablePadding: false,
        label: 'Product',
    },
    {
        id: 'productEan',
        numeric: false,
        disablePadding: false,
        label: 'EAN',
    },
    {
        id: 'priceThreshold',
        numeric: true,
        disablePadding: false,
        label: 'Price Threshold',
    },
    {
        id: 'retailerCompanies',
        numeric: false,
        disablePadding: false,
        label: 'Retailer Companies',
    },
    {
        id: 'priceComparisonType',
        numeric: true,
        disablePadding: false,
        label: 'Price Comparison Type',
    },
];