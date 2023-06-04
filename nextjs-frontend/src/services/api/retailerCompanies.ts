import axios from "axios";
import API_ROUTES from "../../constants/API";
import {RetailerCompany} from "../../model/RetailerCompany";


export async function getRetailerCompanies() {
    const response = await axios.get(API_ROUTES.RETAILER_COMPANIES)
    return response.data ?? []
}