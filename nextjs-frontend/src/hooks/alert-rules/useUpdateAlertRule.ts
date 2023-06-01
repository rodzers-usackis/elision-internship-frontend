import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {updateTrackedProduct} from "../../services/api/trackedProducts";
import {TrackedProduct} from "../../model/TrackedProduct"
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";
import {updateAlertRule} from "../../services/api/alert-rules";
import AlertRules from "../../model/alert-rules/AlertRules";


export function useUpdateAlertRule() {

    const queryClient = useQueryClient()

    // const {
    //     isError: isUpdateAlertRuleError,
    //     isLoading: isUpdateAlertRuleLoading,
    //     data: AlertRuleUpdated,
    //     mutateAsync: updateAlertRuleMutation
    // } = useMutation({
    //     mutationFn: (update: AlertRules) => updateAlertRule(update),
    //     onSuccess: (updatedAlertRule: AlertRules) => {
    //         queryClient.setQueryData(['alertRules'], (oldData: AlertRules[]) => {
    //             return oldData.map((product) => {
    //                 if (product.id === updatedAlertRule.id) {
    //                     return updatedAlertRule;
    //                 } else {
    //                     return product;
    //                 }
    //             });
    //         });
    //     }
    // } as UseMutationOptions<AlertRules, Error, AlertRule>);
    //
    //
    // return {
    //     isUpdateTrackedProductError,
    //     isUpdateTrackedProductLoading,
    //     trackedProductUpdated,
    //     updateTrackedProductMutation
    // }
}