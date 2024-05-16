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
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      totalAmount: 0,
      price: 0,
      addToCart: (cartProduct) =>
        set((state) => {
          const itemExists = state.items.find(
            (item) => item.id === cartProduct.id
          );
          if (itemExists) {
            return {
              ...state,
              items: state.items.map((item) =>
                item.id === cartProduct.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: state.total + cartProduct.price,
            };
          } else {
            return {
              ...state,
              items: [...state.items, { ...cartProduct, quantity: 1 }],
              total: state.total + cartProduct.price,
            };
          }
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const itemToRemove = state.items.find(
            (item) => item.id === productId
          );
          if (!itemToRemove) return state;
          if (itemToRemove.quantity > 1) {
            return {
              ...state,
              items: state.items.map((item) =>
              item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              total: state.total - itemToRemove.price,
            };
          } else {
            return {
              ...state,
              items: state.items.filter(
                (item) => item.id !== productId
              ),
              total: state.total -itemToRemove.price,
            };
          }
        }),
      totalPriceForSingleProduct: (product: CartProduct) => {
        return product.price * product.quantity;
      },
      clearCart: () => set({ items: [], total: 0 })
    }),
    {
      name: 'cart-storage',
    }
  )
);