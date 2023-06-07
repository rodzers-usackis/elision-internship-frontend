import {UUID} from "crypto";
import RetailerCompany from "./RetailerCompany";

export default interface AlertRulesTableData {
    id: UUID;
    productEan: string;
    productName: string;
    priceThreshold: number;
    priceComparisonType: string;
    retailerCompanies: RetailerCompany[];
}