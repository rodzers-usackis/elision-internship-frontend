import {UUID} from "crypto";

export default interface Product {
    id: UUID;
    name: string;
    description: string;
    ean: string;
    manufacturerCode: string;
    category: string;
}