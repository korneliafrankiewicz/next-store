import { CartProduct } from '@/app/models/cartProduct';
import { useCartStore } from '../cart';

export const useCartQuantity = () => {
  const { items } = useCartStore();
  return items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );
};

export const useSingleProductQuantity = ({ product }: { product: CartProduct }) => {
  const { items } = useCartStore();

  return items.filter(
    (item) => item.title === product.title
  )[0].quantity;
}

