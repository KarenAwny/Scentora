import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();
const CART_STORAGE_KEY = 'bespecial_luxury_cart_v2';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.error('Failed to persist cart to LocalStorage:', err);
    }
  }, [cartItems]);

  const showToast = useCallback((message) => {
    setToastMessage(message);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const addToCart = (product, quantity = 1, selectedSize = null, openDrawer = false) => {
    const chosenSize = selectedSize || product.size || (product.availableSizes && product.availableSizes[0]) || '100ml';
    const itemKey = `${product.id}-${chosenSize}`;
    const effectivePrice = (product.sizePrices && product.sizePrices[chosenSize])
      ? product.sizePrices[chosenSize]
      : product.price;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [
        ...prev,
        {
          key: itemKey,
          id: product.id,
          brand: product.brand,
          name: product.name,
          nameAr: product.nameAr,
          price: effectivePrice,
          image: product.image,
          size: chosenSize,
          quantity
        }
      ];
    });

    showToast({
      en: `Added "${product.name}" (${chosenSize}) to your bag`,
      ar: `تمت إضافة "${product.nameAr || product.name}" (${chosenSize}) إلى السلة`
    });

    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (itemKey) => {
    setCartItems((prev) => prev.filter((item) => (item.key || item.id) !== itemKey));
  };

  const updateQuantity = (itemKey, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        (item.key || item.id) === itemKey ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 3000;
  const shippingCost = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 100;
  const total = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        shippingCost,
        total,
        freeShippingThreshold,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
