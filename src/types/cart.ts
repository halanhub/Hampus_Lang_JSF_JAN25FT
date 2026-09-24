import type { Product } from "./product";

export type CartItem = Product & {
  product: Product;
  quantity: number;
};
