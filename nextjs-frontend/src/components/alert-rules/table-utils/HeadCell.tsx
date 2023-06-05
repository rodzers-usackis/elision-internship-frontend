import AlertRulesTableData from "../../../model/alert-rules/AlertRulesTableData";

export interface HeadCell {
    disablePadding: boolean;
    id: keyof AlertRulesTableData;
    label: string;
    numeric: boolean;
}