import {useMutation} from "@tanstack/react-query/src/useMutation";
import {addTrackedProducts} from "../../services/api/trackedProducts";
import {UseMutationOptions, useQueryClient} from "@tanstack/react-query";

export function useAddTrackedProducts() {

    const queryClient = useQueryClient()

    const {
        isLoading: isAddTrackedProductsLoading,
        isError: isAddTrackedProductsError,
        data: trackedProductsAdded,
    } = useMutation<ProductData[], Error, ProductData[]>({mutationFn: addTrackedProducts,
    onSuccess: data => {
        queryClient.setQueryData(['trackedProducts'], (oldData: any) => {
            return [...oldData, ...data]
            })

    }} as UseMutationOptions<ProductData[], Error, ProductData[]>)

    return {isAddTrackedProductsError, isAddTrackedProductsLoading, trackedProductsAdded}
}