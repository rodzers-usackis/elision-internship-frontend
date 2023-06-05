import CatalogTableData from "../../../model/my-catalog/CatalogTableData";

export interface EnhancedTableToolbarProps {
    title: string;
    numSelected: number;
    selected : CatalogTableData[]
    setSelected: (selected: CatalogTableData[]) => void;
}