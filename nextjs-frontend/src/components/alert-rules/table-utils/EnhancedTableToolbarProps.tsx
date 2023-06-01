import AlertRulesTableData from "../../../model/alert-rules/AlertRulesTableData";

export interface EnhancedTableToolbarProps {
    numSelected: number;
    selected : AlertRulesTableData[]
    setSelected: (selected: AlertRulesTableData[]) => void;
}