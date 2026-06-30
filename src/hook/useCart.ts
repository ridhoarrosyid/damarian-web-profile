import { createContext, useContext } from "react";

export interface Product {
  id: string | number;
  name: string;
  price: string;
  img: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string | number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  totalPrice: number;
  updateQuantity: (id: string | number, type: "increase" | "decrease") => void;
}

// Export Context-nya
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

// Export custom hook-nya di sini (karena file ini tidak punya Komponen React)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
