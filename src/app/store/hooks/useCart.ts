import { CartProduct } from '@/app/models/cartProduct';
import { useCartStore } from '../cart';
import { mapToCartProduct } from '@/app/helpers';

export const useCartQuantity = (products: CartProduct[]) => {
  const { items } = useCartStore();

  const getCartQuantity = (product: CartProduct) => {
    return items.reduce(
      (totalQuantity, item) => totalQuantity + (item.title === product.title ? item.quantity : 0),
      0
    );
  };

  return products.reduce((total, product) => total + getCartQuantity(product), 0);
};

export const useSingleProductQuantity = (product: CartProduct) => {
  const { items } = useCartStore();

  const cartProduct = items.find(item => item.title === product.title);

  return cartProduct ? cartProduct.quantity : 0;
};