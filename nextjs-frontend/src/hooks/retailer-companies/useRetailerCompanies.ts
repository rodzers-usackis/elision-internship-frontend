import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {getRetailerCompanies} from "../../services/api/retailerCompanies";
import RetailerCompany from "../../model/alert-rules/RetailerCompany";

export function useRetailerCompanies() {

    const {
        isLoading: isRetailerCompaniesLoading,
        isError: isRetailerCompaniesError,
        data: retailerCompanies
    } = useQuery({
        queryKey: ['retailerCompanies'],
        queryFn: getRetailerCompanies
    } as UseQueryOptions<RetailerCompany[], undefined, RetailerCompany[]>)

    return {
        isRetailerCompaniesLoading,
        isRetailerCompaniesError,
        retailerCompanies
    }

}