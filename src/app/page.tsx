'use client';

import React, { useState } from 'react';
import { MobileFrame } from '@/components/layout/MobileFrame';
import { Header } from '@/components/layout/Header';
import { CategoryCarousel } from '@/components/menu/CategoryCarousel';
import { ProductGrid } from '@/components/menu/ProductGrid';
import { CustomizationLayer } from '@/components/menu/CustomizationLayer';
import { CheckoutLayer } from '@/components/checkout/CheckoutLayer';
import { FulfillmentLayer } from '@/components/checkout/FulfillmentLayer';
import { BottomNav } from '@/components/layout/BottomNav';
import { Toast } from '@/components/ui/Toast';

import { useCart } from '@/lib/cart-context';

export default function Home() {
  const { cart, addToCart, clearCart } = useCart();
  const [activeLayer, setActiveLayer] = useState<'discovery' | 'checkout' | 'fulfillment'>('discovery');
  const [showCustomization, setShowCustomization] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('hot');
  const [toast, setToast] = useState<{ message: string, submessage?: string, visible: boolean }>({ message: '', visible: false });
  const [placedOrder, setPlacedOrder] = useState<any>(null);

  const showToast = (message: string, submessage?: string) => {
    setToast({ message, submessage, visible: true });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  const handleQuickAdd = (product: any) => {
    setSelectedProduct(product);
    setShowCustomization(true);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, 1);
      setShowCustomization(false);
      showToast('Added to Cart', 'Your selection has been saved');
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: '1', // Dummy ID for demo
          items: cart.map(item => ({
            productId: item.productId,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          })),
          total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          address: 'Antigravity Landing Zone A'
        })
      });

      const data = await response.json();
      if (data.success) {
        setPlacedOrder(data.order);
        setActiveLayer('fulfillment');
        clearCart();
        showToast('Order Placed!', 'Confirmation sent to your inbox');
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Order Error:', error);
      showToast('Order Failed', 'Could not process your request');
    }
  };

  return (
    <MobileFrame>
      <Toast
        visible={toast.visible}
        message={toast.message}
        submessage={toast.submessage}
      />

      {/* Discovery Layer */}
      <div className={`flex-1 flex flex-col overflow-hidden ${activeLayer !== 'discovery' ? 'hidden' : ''}`}>
        <Header />
        <CategoryCarousel onSelect={setSelectedCategory} />

        {/* Filter Chips Placeholder */}
        <div className="px-6 py-4 bg-amber-50/50 border-b border-amber-100 overflow-x-auto hide-scrollbar flex gap-2">
          {['Dairy-Free', 'Extra Hot', 'Decaf', 'Organic'].map(chip => (
            <button key={chip} className="flex-shrink-0 px-4 py-2 bg-white border border-amber-200 rounded-full text-xs font-medium text-stone-700 shadow-sm">
              {chip}
            </button>
          ))}
        </div>

        <ProductGrid onQuickAdd={handleQuickAdd} categoryId={selectedCategory} />
      </div>

      {/* Layers */}
      {showCustomization && (
        <CustomizationLayer
          product={selectedProduct}
          onClose={() => setShowCustomization(false)}
          onAdd={handleAddToCart}
        />
      )}

      {activeLayer === 'checkout' && (
        <CheckoutLayer
          onClose={() => setActiveLayer('discovery')}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      {activeLayer === 'fulfillment' && (
        <FulfillmentLayer
          onClose={() => setActiveLayer('discovery')}
          order={placedOrder}
        />
      )}

      <BottomNav
        activeTab={activeLayer === 'discovery' ? 'home' : activeLayer}
        onTabChange={(tab: string) => {
          if (tab === 'home') setActiveLayer('discovery');
          if (tab === 'cart') setActiveLayer('checkout');
          if (tab === 'orders') setActiveLayer('fulfillment');
        }}
        cartCount={cart.length}
      />
    </MobileFrame>
  );
}
