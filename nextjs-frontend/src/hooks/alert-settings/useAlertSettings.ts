import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {getAlertSettings} from "../../services/api/alert-settings";
import {AlertSettings} from "../../model/AlertSettings";

export function useAlertSettings() {

    const {
        isLoading: isAlertSettingsLoading,
        isError: isAlertSettingsError,
        data: alertSettings
    } = useQuery({
        queryKey: ['alertSettings'],
        queryFn: getAlertSettings
    } as UseQueryOptions<AlertSettings, undefined, AlertSettings>)

    return {
        isAlertSettingsLoading,
        isAlertSettingsError,
        alertSettings
    }

}