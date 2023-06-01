import {descendingComparator} from "./descendingComparator";

export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (a: { [key in Key]: string | number }, b: { [key in Key]: string | number }) => number {
    return (a, b) => {
        const valueA = String(a[orderBy]).toLowerCase();
        const valueB = String(b[orderBy]).toLowerCase();

        if (valueB < valueA) {
            return order === 'asc' ? 1 : -1;
        }
        if (valueB > valueA) {
            return order === 'asc' ? -1 : 1;
        }
        return 0;
    };
}

