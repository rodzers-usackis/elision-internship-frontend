import {UUID} from "crypto";

export interface TrackedProductUpdate {
    id: UUID;
    tracked: boolean;
    productPurchaseCost: number;
    productSellPrice: number;
    minPrice: number;
}