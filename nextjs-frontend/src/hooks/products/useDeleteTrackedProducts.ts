import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deleteTrackedProducts} from "../../services/api/trackedProducts";
import {TrackedProduct} from "../../model/TrackedProduct"
import {UUID} from "crypto";


export function useDeleteTrackedProducts() {

    const queryClient = useQueryClient()

    const {
        isError: isDeleteTrackedProductsError,
        isLoading: isDeleteTrackedProductsLoading,
        data: trackedProductsDeleted,
        mutateAsync: deleteTrackedProductsMutation
    } = useMutation({
        mutationFn: deleteTrackedProducts,
        onSuccess: (data: any, variables) => {
            queryClient.setQueryData(['trackedProducts'], (old: TrackedProduct[]) => {
                return old.filter((trackedProduct: TrackedProduct) => {
                    return !variables.includes(trackedProduct.id)
                })
            })
        }
    } as UseMutationOptions<TrackedProduct[], Error, UUID[]>);

    return {
        isDeleteTrackedProductsError,
        isDeleteTrackedProductsLoading,
        trackedProductsDeleted,
        deleteTrackedProductsMutation
    }
}