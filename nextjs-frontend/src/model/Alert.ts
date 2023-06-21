import {UUID} from "crypto";
import {Product} from "./Product";
import {RetailerCompany} from "./RetailerCompany";
import {PriceComparisonTypeEnum} from "./PriceComparisonTypeEnum";

export interface AlertModel {
    id: UUID;
    timestamp: Date;
    price: number;
    priceComparisonType: PriceComparisonTypeEnum;
    alertRulePriceThreshold: number;
    product: Product;
    retailerCompany: RetailerCompany;
    read: boolean;
}