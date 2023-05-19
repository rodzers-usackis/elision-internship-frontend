import {useQuery} from "@tanstack/react-query";
import {getAlertCount} from "../../services/api/alerts";

export function useAlertCount() {

    const {
        isLoading: isAlertCountLoading,
        isError: isAlertCountError,
        data: alertCount
    } = useQuery({
        queryKey: ['alert-count'],
        queryFn: () => getAlertCount()
    })

    return {
        isAlertCountLoading,
        isAlertCountError,
        alertCount
    }
}