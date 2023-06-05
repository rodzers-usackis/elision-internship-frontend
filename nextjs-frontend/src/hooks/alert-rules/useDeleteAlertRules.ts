import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {UUID} from "crypto";
import {deleteAlertRules} from "../../services/api/alert-rules";
import AlertRules from "../../model/alert-rules/AlertRules";


export function useDeleteAlertRules() {

    const queryClient = useQueryClient()

    const {
        isError: isDeleteAlertRulesError,
        isLoading: isDeleteAlertRulesLoading,
        data: alertRulesDeleted,
        mutateAsync: deleteAlertRulesMutation
    } = useMutation({
        mutationFn: deleteAlertRules,
        onSuccess: (data: any, variables) => {
            queryClient.setQueryData(['alertRules'], (oldData: AlertRules[] | undefined) => {
                return (oldData ?? []).filter((alertRule: AlertRules) => {
                    return !variables.includes(alertRule.id)
                })
            })
        }
    } as UseMutationOptions<AlertRules[], Error, UUID[]>);

    return {
        isDeleteAlertRulesError,
        isDeleteAlertRulesLoading,
        alertRulesDeleted,
        deleteAlertRulesMutation
    }
}