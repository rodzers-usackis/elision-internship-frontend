import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {getAlertRules} from "../../services/api/alert-rules";
import AlertRules from "../../model/alert-rules/AlertRules";

export function useAlertRules() {

    const {
        isLoading: isAlertRulesLoading,
        isError: isAlertRulesError,
        data: alertRules
    } = useQuery({
        queryKey: ['alertRules'],
        queryFn: getAlertRules
    } as UseQueryOptions<AlertRules[], undefined, AlertRules[]>)

    return {
        isAlertRulesLoading,
        isAlertRulesError,
        alertRules
    }

}