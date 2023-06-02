import {UUID} from "crypto";

export default interface CatalogTableData {
    id: UUID;
    productName: string;
    productCategory: string;
    productPurchaseCost: number;
    productSellPrice: number;
    productEan: string;
    productManufacturerCode: string;
    isTracked: boolean;
}