import { Product } from './product';

export type CartProduct = Product & {
  quantity: number;
  user: string;
  totalPrice: number;
  itemPrice: number;
};
