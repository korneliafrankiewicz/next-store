import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../models/product';

type CartItem = Product & { quantity: number };

type CartStore = {
  items: CartItem[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productTitle: string) => void;
  clearCart: () => void
};

export const useCartStore = create<CartStore>(
  persist(
    (set) => ({
      items: [],
      total: 0,
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
              total: state.total + product.attributes.Price,
            };
          } else {
            return {
              ...state,
              items: [...state.items, { ...product, quantity: 1 }],
              total: state.total + product.attributes.Price,
            };
          }
        }),
      removeFromCart: (productTitle) =>
        set((state) => {
          const itemToRemove = state.items.find(
            (item) => item.attributes.Title === productTitle
          );
          if (!itemToRemove) return state;
          if (itemToRemove.quantity > 1) {
            return {
              ...state,
              items: state.items.map((item) =>
                item.attributes.Title === productTitle
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              total: state.total - itemToRemove.attributes.Price,
            };
          } else {
            return {
              ...state,
              items: state.items.filter(
                (item) => item.attributes.Title !== productTitle
              ),
              total: state.total - itemToRemove.attributes.Price,
            };
          }
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);