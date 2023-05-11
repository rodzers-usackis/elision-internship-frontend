import {UUID} from "crypto";

interface ProductData {
    id: UUID;
    name: string;
    ean: number,
    brand: string;
    cost: number;
    price: number;
    competitorPrices: string;
    position: number,
    status: string
}