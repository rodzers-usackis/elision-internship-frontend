import {useMutation} from "@tanstack/react-query/src/useMutation";
import {addTrackedProducts} from "../../services/api/trackedProducts";
import {UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {TrackedProduct} from "../../model/TrackedProduct";

export function useAddTrackedProducts() {

    const queryClient = useQueryClient()

    const {
        isLoading: isAddTrackedProductsLoading,
        isError: isAddTrackedProductsError,
        data: trackedProductsAdded,
    } = useMutation<TrackedProduct[], Error, TrackedProduct[]>({
        mutationFn: addTrackedProducts,
        onSuccess: data => {
            queryClient.setQueryData(['trackedProducts'], (oldData: any) => {
                return [...oldData, ...data]
            })

        }
    } as UseMutationOptions<TrackedProduct[], Error, TrackedProduct[]>)

    return {isAddTrackedProductsError, isAddTrackedProductsLoading, trackedProductsAdded}
}