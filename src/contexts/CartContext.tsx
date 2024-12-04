/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

type PaymentMethod = "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro";

interface Order {
  items: CartItem[];
  total: number;
  cep: string;
  address: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethod;
}

interface CartContextType {
  items: CartItem[];
  order: Order | null;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (index: number) => void;
  updateItemQuantity: (index: number, quantity: number) => void;
  setOrder(data: Order): void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) setItems(JSON.parse(items));
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  function addToCart(product: Product, quantity: number) {
    const found = items.some((item) => item.product.id === product.id);
    if (found) return;
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
      value={{
        items,
        order,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        setOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
