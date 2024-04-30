import { useCartStore } from '../cart';
import { Product } from '@/app/models/product';

export const useCartQuantity = () => {
  const { items } = useCartStore();
  return items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );
};

export const useSingleProductQuantity = ({ product }: { product: Product }) => {
  const { items } = useCartStore();
  return items.filter(
    (item) => item.attributes.Title === product.attributes.Title
  )[0].quantity;
  
}

