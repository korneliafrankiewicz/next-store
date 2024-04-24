import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../models/product';

type CartItem = Product & { quantity: number };

type CartStore = {
  items: CartItem[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productTitle: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const itemExists = state.items.find(
            (item) => item.attributes.Title === product.attributes.Title
          );
          if (itemExists) {
            return {
              ...state,
              items: state.items.map((item) =>
                item.attributes.Title === product.attributes.Title
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              ...state,
              items: [...state.items, { ...product, quantity: 1 }],
            };
          }
        }),
        removeFromCart: (productTitle) =>
          set((state) => {
            const itemExists = state.items.find(
              (item) => item.attributes.Title === productTitle
            );
            if (itemExists) {
              if (itemExists.quantity > 1) {
                return {
                  ...state,
                  items: state.items.map((item) =>
                    item.attributes.Title === productTitle
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  ),
                };
              } else {
                return {
                  ...state,
                  items: state.items.filter(
                    (item) => item.attributes.Title !== productTitle
                  ),
                };
              }
            } else return state;
          }),
      clearCart: () => set({ items: [] }),
      get total() {
        return this.items.reduce(
          (total, item) => total + item.attributes.Price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);