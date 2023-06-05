import RetailerCompany from "./RetailerCompany";
import Product from "./Product";
import {UUID} from "crypto";

export default interface AlertRules {
    id: UUID;
    product: Product;
    priceThreshold: number;
    priceComparisonType: string;
    retailerCompanies: RetailerCompany[];
}