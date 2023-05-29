import { UUID } from 'crypto';
import { useQuery } from '@tanstack/react-query';
import { getProductPriceHistory } from '../../services/api/productPriceHistorian';
import { Dayjs } from 'dayjs';

export function useProductPriceHistorian(
    productId: UUID,
    before: Dayjs | null,
    after: Dayjs | null
) {
    const {
        isLoading: isProductPriceHistoryLoading,
        isError: isProductPriceHistoryError,
        data: productPriceHistory,
    } = useQuery({
        queryKey: ['productPriceHistory', productId, before, after],
        queryFn: () => getProductPriceHistory(productId, before, after),
    });

    return {
        isProductPriceHistoryLoading,
        isProductPriceHistoryError,
        productPriceHistory,
    };
}