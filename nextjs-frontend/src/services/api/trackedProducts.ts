import '../API'
import axios from "axios";
import API_ROUTES from "../../constants/API";
import {TrackedProduct} from "../../model/TrackedProduct";
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";
import {UUID} from "crypto";
import {AddedTrackedProduct} from "../../model/AddedTrackedProduct";

export async function getTrackedProducts() {
    const response = await axios.get<TrackedProduct[]>(API_ROUTES.TRACKED_PRODUCTS)
    return response.data
}

export async function addTrackedProducts(products: AddedTrackedProduct) {
    const response = await axios.post<TrackedProduct>(API_ROUTES.TRACKED_PRODUCTS, products)
    return response.data
}

export async function deleteTrackedProducts(productIds: UUID[]) {
    return (await axios.delete<TrackedProduct[]>(API_ROUTES.TRACKED_PRODUCTS, {data: productIds})).data
}

export async function updateTrackedProduct(product: TrackedProductUpdate) {
    const response = await axios.patch(API_ROUTES.TRACKED_PRODUCTS, product);
    return response.data
}