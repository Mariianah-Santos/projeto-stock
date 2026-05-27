import { Product } from "./product";
import { Responsavel } from "./responsavel";
import { MovementType } from "./MovementType";

export interface Solicitation {
  id?: number;
  responsible: Responsavel;
  product: Product;
  quantity: number;
  status?: MovementType;
  createSolicition?: Date;
}