import {UUID} from "crypto";
import {Product} from "./Product";

export interface TrackedProduct {
    id: UUID;
    productPurchaseCost: number;
    productSellPrice: number;
    minPrice: number;
    product: Product;
    tracked: boolean;
}