import {getProducts} from "<components>/services/API";
import {useQuery} from "react-query";

export function useProducts() {

    const {
        isLoading: isLoadingGetProducts,
        isError: isErrorGetProducts,
        data: products
    } = useQuery( {
        queryKey: ['products'],
        queryFn: () => getProducts()
    })

    return {
        isLoadingGetProducts,
        isErrorGetProducts,
        products
    }
}