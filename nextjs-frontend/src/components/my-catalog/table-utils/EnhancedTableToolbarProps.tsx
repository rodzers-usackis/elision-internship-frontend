import CatalogTableData from "../../../model/my-catalog/CatalogTableData";

export interface EnhancedTableToolbarProps {
    numSelected: number;
    selected : CatalogTableData[]
    setSelected: (selected: CatalogTableData[]) => void;
}