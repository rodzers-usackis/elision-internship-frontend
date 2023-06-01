import axios from "axios";
import API_ROUTES from "../../constants/API";
import AlertRules from "../../model/alert-rules/AlertRules";
import {UUID} from "crypto";

export async function getAlertRules() {
    const response = await axios.get<AlertRules[]>(API_ROUTES.ALERT_RULES)
    return response.data ?? []
}

export async function addAlertRule(alertRule: AlertRules) {
    const response = await axios.post<AlertRules>(API_ROUTES.ALERT_RULES, alertRule)
    return response.data
}

export async function deleteAlertRule(alertRuleIds: UUID[]) {
    const response = await axios.delete<UUID[]>(API_ROUTES.ALERT_RULES, {data: alertRuleIds})
    return response.data
}

export async function updateAlertRule(alertRule: AlertRules) {
    const response = await axios.patch<AlertRules>(API_ROUTES.ALERT_RULES, alertRule)
    return response.data
}