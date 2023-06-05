import {useMutation, UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import {updateTrackedProduct} from "../../services/api/trackedProducts";
import {TrackedProduct} from "../../model/TrackedProduct"
import {TrackedProductUpdate} from "../../model/TrackedProductUpdate";


export function useUpdateTrackedProduct() {

    const queryClient = useQueryClient()

    const {
        isError: isUpdateTrackedProductError,
        isLoading: isUpdateTrackedProductLoading,
        data: trackedProductUpdated,
        mutateAsync: updateTrackedProductMutation
    } = useMutation({
        mutationFn: updateTrackedProduct,
        onSuccess: (updatedProduct: TrackedProduct) => {
            queryClient.setQueryData<TrackedProduct[] | undefined>(['trackedProducts'], (oldData) => {
                if (oldData) {
                    return oldData.map((product) => {
                        if (product.id === updatedProduct.id) {
                            return updatedProduct;
                        } else {
                            return product;
                        }
                    });
                } else {
                    return [];
                }
            });
        }
    } as UseMutationOptions<TrackedProduct, Error, TrackedProductUpdate>);

    return {
        isUpdateTrackedProductError,
        isUpdateTrackedProductLoading,
        trackedProductUpdated,
        updateTrackedProductMutation
    }
}