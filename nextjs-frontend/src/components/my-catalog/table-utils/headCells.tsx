import {HeadCell} from "./HeadCell";

export const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Product Name',
    },
    {
        id: 'category',
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
        id: 'ean',
        numeric: false,
        disablePadding: false,
        label: 'EAN',
    },
    {
        id: 'manufacturerCode',
        numeric: true,
        disablePadding: false,
        label: 'Manufacturer Code',
    },
    {
        id: 'tracked',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    }
];