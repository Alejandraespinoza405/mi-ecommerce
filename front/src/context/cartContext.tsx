"use client";

import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";

type CartContextType = {
  cart: Partial<IProduct>[] | null;
  total: number | undefined;
  priceTotal:()=> number | undefined;

  addToCart: (product: Partial<IProduct>) => void;
  removeFromCart: (productId: number) => void;
  resetCart: () => void;
  isProductInCart: (poductId?: number) => boolean | undefined;
};

const CART_LOCAL_STORAGE_KEY = "cart";
const CART_TOTAL_LOCAL_STORAGE_KEY = "cartTotal";

const CartContext = createContext<undefined | CartContextType>(undefined);

export const CartProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Partial<IProduct>[] | null>(null);
  const [total, setTotal] = useState<number>();

  const priceTotal = useCallback(() => {
    if (!cart || cart.length ===0) return 0;
        return cart.reduce((acc, item) => acc + (item.price || 0), 0);
  }, [cart]);


  const addToCart = (product: Partial<IProduct>) => {
    
    setCart((prevCart) => [...(prevCart || []), product]);

    setTotal((prevTotal) => (prevTotal || 0) + 1);
  };
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      if (!prevCart) {
        return [];
      }
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      return updatedCart;
    });
    setTotal((prevTotal) => {
      if (prevTotal === undefined || prevTotal <= 0) {
        return 0;
      }
      return prevTotal - 1;
    });
  };
  const resetCart = () => {
    setCart([]);
    setTotal(0);
  };

const isProductInCart = (productId: number | undefined) => {
    if(!productId) return;
    return cart ? cart.some((item) => item.id === productId) : false;
};

  useEffect(() => {
    if (!cart) {
      return;
    }
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(
      CART_TOTAL_LOCAL_STORAGE_KEY,
      JSON.stringify(total || 0)
    );
  }, [cart, total]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    const storedTotal = localStorage.getItem(CART_TOTAL_LOCAL_STORAGE_KEY);

    if (!storedCart || !storedTotal) {
      setCart([]);
      setTotal(0);
      return;
    }
    setCart(JSON.parse(storedCart));
    setTotal(JSON.parse(storedTotal));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        priceTotal,
        addToCart,
        removeFromCart,
        resetCart,
        isProductInCart,
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};
