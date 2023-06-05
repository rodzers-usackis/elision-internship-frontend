import CatalogTableData from "../../../model/my-catalog/CatalogTableData";

export interface HeadCell {
    disablePadding: boolean;
    id: keyof CatalogTableData;
    label: string;
    numeric: boolean;
}