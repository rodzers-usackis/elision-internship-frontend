import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {AlertSettings} from "../../model/AlertSettings";
import {updateAlertSettings} from "../../services/api/alert-settings";

export function useAlertSettingsUpdate() {
    const queryClient = useQueryClient()

    const {
        isLoading: isAlertSettingsUpdateLoading,
        isError: isAlertSettingsUpdateError,
        data: alertSettingsUpdated,
        mutateAsync: updateAlertSettingsMutation
    } = useMutation<AlertSettings, Error, AlertSettings>({
        mutationFn: updateAlertSettings,
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['alertSettings'], (oldData: any) => {
                return {...oldData, ...variables, ...data}
            })
        }

    } as UseMutationOptions<AlertSettings, Error, AlertSettings>);

    return {isAlertSettingsUpdateError, isAlertSettingsUpdateLoading, alertSettingsUpdated, updateAlertSettingsMutation}
}