import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartProduct } from '../models/cartProduct';

type CartStore = {
  items: CartProduct[];
  total: number;
  totalAmount: number;
  price: number;
  totalPriceForSingleProduct: (product: CartProduct) => void;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productTitle: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      totalAmount: 0,
      price: 0,
      addToCart: (cmsProduct) =>
        set((state) => {
          const itemExists = state.items.find(
            (item) => item.title === cmsProduct.title
          );
          if (itemExists) {
            return {
              ...state,
              items: state.items.map((item) =>
                item.title === cmsProduct.title
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: state.total + cmsProduct.price,
            };
          } else {
            return {
              ...state,
              items: [...state.items, { ...cmsProduct, quantity: 1 }],
              total: state.total + cmsProduct.price,
            };
          }
        }),
        removeFromCart: (productTitle) =>
          set((state) => {
            const itemToRemove = state.items.find(
              (item) => item.title === productTitle
            );
            if (!itemToRemove) return state;
            if (itemToRemove.quantity > 1) {
              return {
                ...state,
                items: state.items.map((item) =>
                  item.title === productTitle
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
                total: state.total - itemToRemove.price,
              };
            } else {
              return {
                ...state,
                items: state.items.filter(
                  (item) => item.title !== productTitle
                ),
                total: state.total - itemToRemove.price,
              };
            }
          }),
          totalPriceForSingleProduct(product: CartProduct): number {
            return product.price * product.quantity;
        },
          clearCart: () => set({ items: [], total: 0 })
    }),
    {
      name: 'cart-storage',
    }
  )
);