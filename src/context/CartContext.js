import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { email, isLoggedIn } = useAuth();

    const sanitizedEmail = email ? email.replace(/[@.]/g, '') : '';
    const firestoreBaseUrl = process.env.REACT_APP_FIRESTORE_URL;
    const apiUrl = `${firestoreBaseUrl}/cart_${sanitizedEmail}`;

    const fetchCartItems = useCallback(async () => {
        if (!isLoggedIn || !sanitizedEmail) {
            setCartItems([]);
            return;
        }

        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200 && response.data.documents) {
                const data = response.data.documents.map(doc => {
                    const fields = doc.fields;
                    return {
                        id: doc.name.split('/').pop(),
                        title: fields.title.stringValue,
                        price: parseFloat(fields.price.doubleValue || fields.price.integerValue),
                        imageUrl: fields.imageUrl.stringValue,
                        quantity: parseInt(fields.quantity.integerValue || fields.quantity.doubleValue || 1)
                    };
                });

                const groupedItems = data.reduce((acc, item) => {
                    const existingItem = acc.find(i => i.title === item.title);
                    if (existingItem) {
                        existingItem.quantity += item.quantity;
                        existingItem.ids.push(item.id);
                    } else {
                        acc.push({ ...item, ids: [item.id] });
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

        const payload = {
            fields: {
                title: { stringValue: product.title },
                price: { doubleValue: product.price },
                imageUrl: { stringValue: product.imageUrl },
                quantity: { integerValue: 1 }
            }
        };

        try {
            const response = await axios.post(apiUrl, payload);

            if (response.status === 200 || response.status === 201) {
                fetchCartItems();
            } else {
                alert('Failed to add item to cart backend');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Error connecting to cart service');
        }
    };

    const removeFromCart = async (index) => {
        const itemToRemove = cartItems[index];
        if (!itemToRemove) return;

        try {
            const deletePromises = itemToRemove.ids.map(id => 
                axios.delete(`${apiUrl}/${id}`)
            );
            
            await Promise.all(deletePromises);
            
            setCartItems((prevCartItems) =>
                prevCartItems.filter((_, i) => i !== index)
            );
        } catch (error) {
            console.error('Error removing from cart:', error);
            alert('Failed to remove item from server cart');
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
