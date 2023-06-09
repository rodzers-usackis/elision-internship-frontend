import {HeadCell} from "./HeadCell";

export const headCells: readonly HeadCell[] = [
    {
        id: 'productName',
        numeric: false,
        disablePadding: true,
        label: 'Product Name',
    },
    {
        id: 'productCategory',
        numeric: false,
        disablePadding: false,
        label: 'Category',
    },
    {
        id: 'productPurchaseCost',
        numeric: true,
        disablePadding: false,
        label: 'Cost',
    },
    {
        id: 'productSellPrice',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'minPrice',
        numeric: true,
        disablePadding: false,
        label: 'Minimum Price',
    },
    {
        id: 'productEan',
        numeric: false,
        disablePadding: false,
        label: 'EAN',
    },
    {
        id: 'productManufacturerCode',
        numeric: true,
        disablePadding: false,
        label: 'Manufacturer Code',
    },
    {
        id: 'isTracked',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
];