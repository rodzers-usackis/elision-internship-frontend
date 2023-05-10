import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {deleteTrackedProducts} from "../../services/api/trackedProducts";

export function useDeleteTrackedProducts() {

    const queryClient = useQueryClient()

    const {
        isError: isDeleteTrackedProductsError,
        isLoading: isDeleteTrackedProductsLoading,
        data: trackedProductsDeleted,
        mutate: deleteTrackedProductsMutation
    } = useMutation({mutationFn: deleteTrackedProducts,
    onSuccess:data=>{

    }}as UseMutationOptions);

    return {isDeleteTrackedProductsError, isDeleteTrackedProductsLoading, trackedProductsDeleted, deleteTrackedProductsMutation}
}