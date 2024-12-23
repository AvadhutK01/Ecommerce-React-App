import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex(
                (item) => item.title === product.title
            );

            if (existingItemIndex >= 0) {
                const updatedCart = [...prevCartItems];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCartItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (index) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((_, i) => i !== index)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
