import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {updateTrackedProduct} from "../../services/api/trackedProducts";
import {TrackedProduct} from "../../model/TrackedProduct"
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";


export function useDeleteTrackedProducts() {

    const queryClient = useQueryClient()

    const {
        isError: isDeleteTrackedProductsError,
        isLoading: isDeleteTrackedProductsLoading,
        data: trackedProductsDeleted,
        mutateAsync: deleteTrackedProductsMutation
    } = useMutation({
        mutationFn: updateTrackedProduct,
        onSuccess: (updatedProduct: TrackedProduct) => {
            queryClient.setQueryData(['trackedProducts'], (oldData: TrackedProduct[]) => {
                return oldData.map((product) => {
                    if (product.id === updatedProduct.id) {
                        return updatedProduct
                    } else {
                        return product
                    }
                })
            })

        }
    } as UseMutationOptions<TrackedProduct, Error, TrackedProductUpdate>);

    return {
        isDeleteTrackedProductsError,
        isDeleteTrackedProductsLoading,
        trackedProductsDeleted,
        deleteTrackedProductsMutation
    }
}