import { useState } from "react";
import type { ReactNode } from "react";
import { CartContext, type CartItem, type Product } from "../hook/useCart";

// Interface untuk Produk
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Opsional: Langsung buka modal saat tambah barang
    // setIsCartOpen(true);
  };

  const removeFromCart = (id: string | number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Fungsi sederhana untuk parsing harga (asumsi format "Rp 100.000")
  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
    return acc + priceNum * item.quantity;
  }, 0);

  const updateQuantity = (
    id: string | number,
    type: "increase" | "decrease",
  ) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              const newQuantity =
                type === "increase" ? item.quantity + 1 : item.quantity - 1;
              return { ...item, quantity: newQuantity };
            }
            return item;
          })
          .filter((item) => item.quantity > 0), // Otomatis terhapus jika quantity jadi 0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        totalPrice,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
