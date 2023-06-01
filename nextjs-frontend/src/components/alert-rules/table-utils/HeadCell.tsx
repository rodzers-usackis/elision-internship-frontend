import AlertRules from "../../../model/alert-rules/AlertRules";
import Product from "../../../model/alert-rules/Product";

export interface HeadCell {
    disablePadding: boolean;
    id: keyof AlertRules | keyof Product;
    label: string;
    numeric: boolean;
}