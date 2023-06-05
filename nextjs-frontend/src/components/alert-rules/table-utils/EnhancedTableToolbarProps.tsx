import AlertRulesTableData from "../../../model/alert-rules/AlertRulesTableData";

export interface EnhancedTableToolbarProps {
    title: string;
    numSelected: number;
    selected : AlertRulesTableData[]
    setSelected: (selected: AlertRulesTableData[]) => void;
}