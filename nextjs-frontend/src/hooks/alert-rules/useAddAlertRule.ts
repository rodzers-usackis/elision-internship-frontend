import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {addAlertRule} from "../../services/api/alert-rules";
import AlertRule from "../../model/alert-rules/AlertRules";

export function useAddAlertRule() {

    const queryClient = useQueryClient()

    const {
        isLoading: isAddAlertRuleLoading,
        isError: isAddAlertRuleError,
        data: alertRuleAdded,
        mutateAsync: addAlertRuleMutation
    } = useMutation<AlertRule, Error, AlertRule>({
        mutationFn: addAlertRule,
        onSuccess: data => {
            queryClient.setQueryData(['alertRules'], (oldData: any) => {
                return [...oldData, data]
            })

        }
    } as UseMutationOptions<AlertRule, Error, AlertRule>)

    return {isAddAlertRuleError, isAddAlertRuleLoading, alertRuleAdded, addAlertRuleMutation}
}