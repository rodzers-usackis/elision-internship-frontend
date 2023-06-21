import {UUID} from "crypto";
import {ProductCategory} from "./ProductCategory";

export interface Product {
    id: UUID;
    name: string;
    category: ProductCategory;
    ean: string;
    manufacturerCode: string;
    description: string;
    isTracked: boolean;
}