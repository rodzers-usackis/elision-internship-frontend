import {UUID} from "crypto";
import {Product} from "./Product";
import {RetailerCompany} from "./RetailerCompany";
import {PriceComparisonTypeEnum} from "./PriceComparisonTypeEnum";

export interface Alert {
    id: UUID;
    timestamp: Date;
    price: number;
    priceComparisonType: PriceComparisonTypeEnum;
    product: Product;
    retailerCompany: RetailerCompany;
    read: boolean;
}