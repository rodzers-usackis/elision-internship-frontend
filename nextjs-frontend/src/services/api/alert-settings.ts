import axios from "axios";
import API_ROUTES from "../../constants/API";
import {AlertSettings} from "../../model/AlertSettings";


export async function getAlertSettings() {
    const response = await axios.get<AlertSettings>(API_ROUTES.ALERT_SETTINGS)
    return response.data
}

export async function updateAlertSettings(alertSettings: AlertSettings) {
    const response = await axios.patch<AlertSettings>(API_ROUTES.ALERT_SETTINGS, alertSettings)
    return response.data
}