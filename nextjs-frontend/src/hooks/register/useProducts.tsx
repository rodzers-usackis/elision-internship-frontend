import {getTrackedProducts} from "../../services/api/trackedProducts";
import {useQuery} from "@tanstack/react-query";

export function useProducts() {

    const {
        isLoading: isLoadingGetProducts,
        isError: isErrorGetProducts,
        data: products
    } = useQuery({
        queryKey: ['products'],
        queryFn: () => getTrackedProducts()
    })

    return {
        isLoadingGetProducts,
        isErrorGetProducts,
        products
    }
}