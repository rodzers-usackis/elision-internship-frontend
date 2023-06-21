import '../API'
import axios from "axios";
import API_ROUTES from "../../constants/API";
import dayjs from "dayjs";
import {ProductPriceHistorian} from "../../model/product-price-historian/ProductPriceHistorian";

export async function getProductPriceHistory(productId: string, before: dayjs.Dayjs | null, after: dayjs.Dayjs | null) {
    let formattedBefore = before ? before.format('YYYY-MM-DD') : null
    let formattedAfter = after ? after.format('YYYY-MM-DD') : null

    const response = await axios.get<ProductPriceHistorian>(API_ROUTES.PRODUCT_PRICE_HISTORY + '/' + productId, {
        params: {
            before: formattedBefore,
            after: formattedAfter
        }
    })

    return response.data
}