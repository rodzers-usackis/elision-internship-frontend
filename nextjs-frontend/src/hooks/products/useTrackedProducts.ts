import {useQuery} from "@tanstack/react-query";
import {getTrackedProducts} from "../../services/api/trackedProducts";

export function useTrackedProducts() {
    const {
        isLoading: isTrackedProductsLoading,
        isError: isTrackedProductsError,
        data: trackedProducts,
    } = useQuery({
        queryKey: ['trackedProducts'],
        queryFn: () => getTrackedProducts(),
    })

    return {
        isTrackedProductsLoading,
        isTrackedProductsError,
        trackedProducts
    }
}