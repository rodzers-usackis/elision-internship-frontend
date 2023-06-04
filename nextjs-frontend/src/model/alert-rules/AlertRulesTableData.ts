import {UUID} from "crypto";
import RetailerCompany from "./RetailerCompany";

export default interface AlertRulesTableData {
    id: UUID;
    productName: string;
    priceThreshold: number;
    priceComparisonType: string;
    retailerCompanies: RetailerCompany[];
}