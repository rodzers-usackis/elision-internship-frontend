import {UUID} from "crypto";

export interface Product {
    id: UUID;
    name: string;
    category: string;
    ean: string;
    manufacturerCode: string;
    description: string;
    isTracked: boolean;
}