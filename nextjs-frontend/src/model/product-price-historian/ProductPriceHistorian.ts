import {Product} from "./Product";
import {ProductPriceHistorianData} from "./ProductPriceHistorianData";

export interface ProductPriceHistorian {
    product: Product;
    data: ProductPriceHistorianData[];
}