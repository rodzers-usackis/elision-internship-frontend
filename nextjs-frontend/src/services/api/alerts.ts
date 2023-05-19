import axios from "axios";
import API_ROUTES from "../../constants/API";
import {Alert} from "../../model/Alert";


export async function getAlerts() {
    const response = await axios.get<Alert[]>(API_ROUTES.ALERTS)
    console.log("Get alerts response: ", response.data)

    return response.data
}

export async function getAlertCount() {
    const response = await axios.get<number>(API_ROUTES.ALERT_COUNT)
    if (response.data === undefined || response.data === null) {
        return 0
    }

    return response.data
}

export async function setAlertsRead(alerts: Alert[]) {
    const response = await axios.patch(API_ROUTES.ALERTS, alerts)

    return response.data
}