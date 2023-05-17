import axios from "axios";
import API_ROUTES from "../../constants/API";
import {Alert} from "../../model/Alert";


export async function getAlerts() {
    const response = await axios.get<Alert[]>(API_ROUTES.ALERTS)
    return response.data
}