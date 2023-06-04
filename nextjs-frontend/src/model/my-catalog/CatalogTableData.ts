import {UUID} from "crypto";

export default interface CatalogTableData {
    id: UUID;
    productId: UUID;
    productName: string;
    productCategory: string;
    productPurchaseCost: number;
    productSellPrice: number;
    minPrice: number;
    productEan: string;
    productManufacturerCode: string;
    description: string;
    isTracked: boolean;
}