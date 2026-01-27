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

export default function Home() {
  const [activeLayer, setActiveLayer] = useState<'discovery' | 'checkout' | 'fulfillment'>('discovery');
  const [showCustomization, setShowCustomization] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('hot');
  const [toast, setToast] = useState<{ message: string, submessage?: string, visible: boolean }>({ message: '', visible: false });

  const showToast = (message: string, submessage?: string) => {
    setToast({ message, submessage, visible: true });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000);
  };

  const handleQuickAdd = (product: any) => {
    setSelectedProduct(product);
    setShowCustomization(true);
  };

  const handleAddToCart = () => {
    setShowCustomization(false);
    showToast('Added to Cart', 'Your selection has been saved');
  };

  const handlePlaceOrder = () => {
    setActiveLayer('fulfillment');
    showToast('Email Sent Successfully', 'Order confirmation sent to your inbox');
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
        />
      )}

      <BottomNav
        activeTab={activeLayer === 'discovery' ? 'home' : activeLayer}
        onTabChange={(tab: string) => {
          if (tab === 'home') setActiveLayer('discovery');
          if (tab === 'cart') setActiveLayer('checkout');
          if (tab === 'orders') setActiveLayer('fulfillment');
        }}
        cartCount={1}
      />
    </MobileFrame>
  );
}
