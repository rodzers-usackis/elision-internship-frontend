import axios from "axios";
import API_ROUTES from "../../constants/API";
import AlertRules from "../../model/alert-rules/AlertRules";
import {UUID} from "crypto";
import AlertRuleUpdateDto from "../../model/alert-rules/dtos/AlertRuleUpdateDto";
import AlertRuleCreateDto from "../../model/alert-rules/dtos/AlertRuleCreateDto";

export async function getAlertRules() {
    const response = await axios.get<AlertRules[]>(API_ROUTES.ALERT_RULES)
    return response.data ?? []
}

export async function addAlertRule(alertRule: AlertRuleCreateDto) {
    const response = await axios.post<AlertRules>(API_ROUTES.ALERT_RULES, alertRule)
    return response.data
}

export async function deleteAlertRules(alertRuleIds: UUID[]) {
    const response = await axios.delete<AlertRules[]>(API_ROUTES.ALERT_RULES, {data: alertRuleIds})
    return response.data
}

export async function updateAlertRule(alertRule: AlertRuleUpdateDto) {
    const response = await axios.patch(API_ROUTES.ALERT_RULES, alertRule)
    return response.data
}