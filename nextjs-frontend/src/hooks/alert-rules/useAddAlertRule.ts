import { useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
import { addAlertRule } from "../../services/api/alert-rules";
import AlertRules from "../../model/alert-rules/AlertRules";
import AlertRuleCreateDto from "../../model/alert-rules/dtos/AlertRuleCreateDto";

export function useAddAlertRule() {
    const queryClient = useQueryClient();

    const {
        isLoading: isAddAlertRuleLoading,
        isError: isAddAlertRuleError,
        data: alertRuleAdded,
        mutateAsync: addAlertRuleMutation
    } = useMutation<AlertRules, Error, AlertRuleCreateDto>({
        mutationFn: addAlertRule,
        onSuccess: data => {
            queryClient.setQueryData(["alertRules"], (oldData: AlertRules[] | undefined) => {
                return [...(oldData ?? []), data];
            });
        }
    } as UseMutationOptions<AlertRules, Error, AlertRuleCreateDto>);

    return { isAddAlertRuleError, isAddAlertRuleLoading, alertRuleAdded, addAlertRuleMutation };
}
