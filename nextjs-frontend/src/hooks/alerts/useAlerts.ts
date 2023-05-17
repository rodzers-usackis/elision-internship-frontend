import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {getAlerts} from "../../services/api/alerts";
import {Alert} from "../../model/Alert";

export function useAlerts() {

    const {isLoading : isAlertsLoading,
    isError: isAlertsError,
    data: alerts} = useQuery({
        queryKey: ['alerts'],
        queryFn: getAlerts
    } as UseQueryOptions<Alert[], undefined, Alert[]>)

    return {
        isAlertsLoading,
        isAlertsError,
        alerts
    }
}