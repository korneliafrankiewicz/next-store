import { useCartStore } from '../cart';

export const useCartQuantity = () => {
  const { items } = useCartStore();
  return items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );
};
