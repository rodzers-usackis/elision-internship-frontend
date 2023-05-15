import {TrackedProduct} from "../../../model/TrackedProduct";
import {Product} from "../../../model/Product";

export interface HeadCell {
    disablePadding: boolean;
    id: keyof TrackedProduct | keyof Product;
    label: string;
    numeric: boolean;
}