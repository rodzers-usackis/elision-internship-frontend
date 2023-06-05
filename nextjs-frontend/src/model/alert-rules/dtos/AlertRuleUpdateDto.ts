import {UUID} from "crypto";
import RetailerCompany from "../RetailerCompany";

export default interface AlertRuleUpdateDto {
    id: UUID;
    priceThreshold: number;
    priceComparisonType: string;
    retailerCompanies: RetailerCompany[];
}