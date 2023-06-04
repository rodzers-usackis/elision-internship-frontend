import {descendingComparator} from "./descendingComparator";
import {UUID} from "crypto";

export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
    excludedKey?: Key
): (a: { [key in Key]: number | string | boolean }, b: { [key in Key]: number | string | boolean }) => number {
    return (a, b) => {
        if (excludedKey && a[excludedKey] === b[excludedKey]) {
            return 0; // Exclude the comparison for the excludedKey
        }

        if (orderBy === 'isTracked') {
            const aValue = a[orderBy] ? 1 : 0;
            const bValue = b[orderBy] ? 1 : 0;

            return (aValue - bValue) * (order === 'asc' ? 1 : -1);
        }

        // Handle other properties
        if (typeof a[orderBy] === 'string' && typeof b[orderBy] === 'string') {
            return (a[orderBy] as string).localeCompare(b[orderBy] as string) * (order === 'asc' ? 1 : -1);
        }

        return ((a[orderBy] as number) - (b[orderBy] as number)) * (order === 'asc' ? 1 : -1);
    };
}




