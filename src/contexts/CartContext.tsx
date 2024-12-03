/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (index: number) => void;
  updateItemQuantity: (index: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) setItems(JSON.parse(items));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  function addToCart(product: Product, quantity: number) {
    const foundIndex = items.findIndex(
      (item) => item.product.id === product.id
    );
    if (foundIndex) {
      return;
    }
    setItems((prevState) => [...prevState, { product, quantity }]);
  }

  function removeFromCart(index: number) {
    setItems((prevState) => prevState.filter((_, i) => i !== index));
  }

  function updateItemQuantity(index: number, quantity: number) {
    setItems((prevState) =>
      prevState.map((item, i) => (i === index ? { ...item, quantity } : item))
    );
  }

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
