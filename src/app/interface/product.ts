
import { Category } from "./category";
import { Responsavel } from "./responsavel";

export interface Product {
    code?: number,
    id?: number,
    name: string,
    category?: Category,
    quantity: number,
    price: number,
    dateCreate: Date,
    responsible?: Responsavel
}
