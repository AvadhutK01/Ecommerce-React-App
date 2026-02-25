import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CRUD_API_BASE = 'https://crudcrud.com/api/c8c62c1b6eb84c95b83ec57aa1995b3f';

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { email, isLoggedIn } = useAuth();

    const sanitizedEmail = email ? email.replace(/[@.]/g, '') : '';
    const apiUrl = `${CRUD_API_BASE}/cart${sanitizedEmail}`;

    const fetchCartItems = useCallback(async () => {
        if (!isLoggedIn || !sanitizedEmail) {
            setCartItems([]);
            return;
        }

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();

                // Group items by title and calculate total quantity
                const groupedItems = data.reduce((acc, item) => {
                    const existingItem = acc.find(i => i.title === item.title);
                    if (existingItem) {
                        existingItem.quantity += (item.quantity || 1);
                    } else {
                        acc.push({ ...item, quantity: item.quantity || 1 });
                    }
                    return acc;
                }, []);

                setCartItems(groupedItems);
            }
        } catch (error) {
            console.error('Failed to fetch cart items:', error);
        }
    }, [isLoggedIn, sanitizedEmail, apiUrl]);

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    const addToCart = async (product) => {
        if (!isLoggedIn) {
            alert('Please login to add items to cart');
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify({
                    title: product.title,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    quantity: 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Optimistically update or just re-fetch
                fetchCartItems();
            } else {
                alert('Failed to add item to cart backend');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Error connecting to cart service');
        }
    };

    const removeFromCart = (index) => {
        // CrudCrud doesn't easily support single item delete from list without ID
        // For now, we update local state. In a real app, we'd DELETE by _id.
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
