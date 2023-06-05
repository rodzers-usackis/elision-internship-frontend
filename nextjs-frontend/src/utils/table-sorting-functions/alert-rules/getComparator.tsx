import {descendingComparator} from "./descendingComparator";
import {UUID} from "crypto";
import RetailerCompanyDto from "../../../model/product-price-historian/RetailerCompanyDto";

export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
    excludedKey?: Key
): (a: { [key in Key]: number | string | RetailerCompanyDto[] }, b: { [key in Key]: number | string | RetailerCompanyDto[] }) => number {
    return (a, b) => {
        if (excludedKey && a[excludedKey] === b[excludedKey]) {
            return 0; // Exclude the comparison for the excludedKey
        }

        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (Array.isArray(aValue) && Array.isArray(bValue)) {
            // Compare the length of the arrays
            const lengthDiff = aValue.length - bValue.length;
            if (lengthDiff !== 0) {
                return lengthDiff;
            }

            // Compare the elements of the arrays by their id property
            for (let i = 0; i < aValue.length; i++) {
                const aId = aValue[i].id;
                const bId = bValue[i].id;
                if (aId < bId) {
                    return -1;
                }
                if (aId > bId) {
                    return 1;
                }
            }

            return 0; // Arrays are equal
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return (aValue as string).localeCompare(bValue as string) * (order === 'asc' ? 1 : -1);
        }

        return ((aValue as number) - (bValue as number)) * (order === 'asc' ? 1 : -1);
    };
}







