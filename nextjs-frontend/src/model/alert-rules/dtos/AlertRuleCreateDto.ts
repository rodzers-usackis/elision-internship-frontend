import Product from "../Product";
import RetailerCompany from "../RetailerCompany";

export default interface AlertRuleCreateDto {
    product: Product;
    priceThreshold: number;
    priceComparisonType: string;
    retailerCompanies: RetailerCompany[];
}