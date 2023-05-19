import axios from "axios";
import API_ROUTES from "../../constants/API";
import {Alert} from "../../model/Alert";


export async function getAlerts() {
    const response = await axios.get<Alert[]>(API_ROUTES.ALERTS)
    return response.data
}

export async function getAlertCount() {
    const response = await axios.get<number>(API_ROUTES.ALERT_COUNT)
    if (response.data === undefined || response.data === null) {
        return 0
    }

    return response.data
}