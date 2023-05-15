import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {getTrackedProducts} from "../../services/api/trackedProducts";
import {TrackedProduct} from "../../model/TrackedProduct";

export function useTrackedProducts() {
    const {
        isLoading: isTrackedProductsLoading,
        isError: isTrackedProductsError,
        data: trackedProducts,
    } = useQuery({
        queryKey: ['trackedProducts'],
        queryFn: getTrackedProducts,
    } as UseQueryOptions<TrackedProduct[], undefined, TrackedProduct[]>)

    return {
        isTrackedProductsLoading,
        isTrackedProductsError,
        trackedProducts
    }
}