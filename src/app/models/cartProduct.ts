import { Product } from './product';

export type CartProduct = Product & {
  quantity: number;
  totalAmount: number;
  user: string;
  totalPrice: number;
};
