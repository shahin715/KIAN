import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  cartItems: CartItem[];

  addToCart: (product: CartItem) => void;

  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),

  clearCart: () =>
    set({
      cartItems: [],
    }),
}));

export default useCartStore;