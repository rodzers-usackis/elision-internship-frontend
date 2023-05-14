import {addTrackedProducts} from "../../services/api/trackedProducts";
import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {TrackedProduct} from "../../model/TrackedProduct";
import {AddedTrackedProduct} from "../../model/AddedTrackedProduct";

export function useAddTrackedProducts() {

    const queryClient = useQueryClient()

    const {
        isLoading: isAddTrackedProductsLoading,
        isError: isAddTrackedProductsError,
        data: trackedProductsAdded,
        mutateAsync: addTrackedProductsMutation
    } = useMutation<TrackedProduct[], Error, AddedTrackedProduct>({
        mutationFn: addTrackedProducts,
        onSuccess: data => {
            queryClient.setQueryData(['trackedProducts'], (oldData: any) => {
                return [...oldData, ...data]
            })

        }
    } as UseMutationOptions<TrackedProduct[], Error, AddedTrackedProduct>)

    return {isAddTrackedProductsError, isAddTrackedProductsLoading, trackedProductsAdded, addTrackedProductsMutation}
}