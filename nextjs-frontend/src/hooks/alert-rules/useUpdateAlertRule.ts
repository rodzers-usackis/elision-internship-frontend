import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {updateAlertRule} from "../../services/api/alert-rules";
import AlertRules from "../../model/alert-rules/AlertRules";
import AlertRuleUpdateDto from "../../model/alert-rules/dtos/AlertRuleUpdateDto";


export function useUpdateAlertRule() {

    const queryClient = useQueryClient()

    const {
        isError: isUpdateAlertRuleError,
        isLoading: isUpdateAlertRuleLoading,
        data: alertRuleUpdated,
        mutateAsync: updateAlertRuleMutation
    } = useMutation({
        mutationFn: updateAlertRule,
        onSuccess: (data: any, variables) => {
            queryClient.setQueryData(['alertRules'], (oldData: AlertRuleUpdateDto[] | undefined) => {
                return (oldData ?? []).map((alertRule) => {
                    if (alertRule.id === variables.id) {
                        return {
                            ...alertRule, ...variables
                        };
                    } else {
                        return alertRule;
                    }
                });
            });
        }
    } as UseMutationOptions<AlertRules, Error, AlertRuleUpdateDto>);


    return {
        isUpdateAlertRuleError,
        isUpdateAlertRuleLoading,
        alertRuleUpdated,
        updateAlertRuleMutation
    }
}