import React from 'react';
import { Home, ShoppingBag, Package, Gift, User } from 'lucide-react';

interface BottomNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, cartCount }) => {
    return (
        <nav className="absolute bottom-0 w-full bg-white border-t border-stone-100 px-6 py-4 flex justify-between items-center z-[130]">
            <button
                onClick={() => onTabChange('home')}
                className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-amber-900' : 'text-stone-400'}`}
            >
                <Home className={`w-6 h-6 ${activeTab === 'home' ? 'fill-current' : ''}`} />
                <span className={`text-[10px] ${activeTab === 'home' ? 'font-bold' : 'font-medium'}`}>Home</span>
            </button>
            <button
                onClick={() => onTabChange('cart')}
                className={`flex flex-col items-center gap-1 relative ${activeTab === 'cart' ? 'text-amber-900' : 'text-stone-400'}`}
            >
                <ShoppingBag className="w-6 h-6" />
                <span className={`text-[10px] ${activeTab === 'cart' ? 'font-bold' : 'font-medium'}`}>Cart</span>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
            </button>
            <button
                onClick={() => onTabChange('orders')}
                className={`flex flex-col items-center gap-1 ${activeTab === 'orders' ? 'text-amber-900' : 'text-stone-400'}`}
            >
                <Package className="w-6 h-6" />
                <span className={`text-[10px] ${activeTab === 'orders' ? 'font-bold' : 'font-medium'}`}>Orders</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-stone-400">
                <Gift className="w-6 h-6" />
                <span className="text-[10px] font-medium">Rewards</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-stone-400">
                <User className="w-6 h-6" />
                <span className="text-[10px] font-medium">Profile</span>
            </button>
        </nav>
    );
};
