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
        onSuccess: (updatedAlertRule: AlertRules) => {
            queryClient.setQueryData(['alertRules'], (oldData: AlertRules[] | undefined) => {
                return (oldData ?? []).map((product) => {
                    if (product.id === updatedAlertRule.id) {
                        return updatedAlertRule;
                    } else {
                        return product;
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