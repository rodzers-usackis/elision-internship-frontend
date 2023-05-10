import './API'
import axios from "axios";
import API_ROUTES from "../../constants/API";


export async function getTrackedProducts(){
    const response = await axios.get<ProductData[]>(API_ROUTES.PRODUCTS)
    return response.data
}



export async function addTrackedProducts(products : ProductData[]){
    const response = await axios.post<ProductData[]>(API_ROUTES.PRODUCTS, products)
    return response.data
}

export async function deleteTrackedProducts(products : ProductData[]){
    return await axios.delete<ProductData[]>(API_ROUTES.PRODUCTS, {data: products})
}