'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
    id: string;
    productId: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any, quantity: number) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: any, quantity: number) => {
        setCart(prev => {
            const existing = prev.find(item => item.productId === product.id);
            if (existing) {
                return prev.map(item =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, {
                id: Math.random().toString(36).substr(2, 9),
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity
            }];
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart(prev => prev.filter(item => item.id !== itemId));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};
