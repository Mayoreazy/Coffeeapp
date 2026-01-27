import React from 'react';
import { Coffee, Snowflake, Cake, Package } from 'lucide-react';

interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    isHot?: boolean;
}

const categories: Category[] = [
    { id: 'hot', name: 'Hot Coffee', icon: <Coffee className="w-8 h-8 text-white" />, color: 'from-amber-600 to-orange-600', isHot: true },
    { id: 'cold', name: 'Cold Brew', icon: <Snowflake className="w-8 h-8 text-white" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'pastries', name: 'Pastries', icon: <Cake className="w-8 h-8 text-white" />, color: 'from-pink-500 to-rose-500' },
    { id: 'beans', name: 'Beans', icon: <Package className="w-8 h-8 text-white" />, color: 'from-stone-700 to-stone-900' },
];

export const CategoryCarousel: React.FC<{ onSelect: (id: string) => void }> = ({ onSelect }) => {
    return (
        <div className="px-6 py-5 bg-white border-b border-stone-100">
            <h2 className="text-sm font-bold text-stone-900 mb-3">Categories</h2>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onSelect(cat.id)}
                        className="flex flex-col items-center gap-2 flex-shrink-0"
                    >
                        <div className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center shadow-lg shadow-amber-600/30 relative`}>
                            {cat.icon}
                            {cat.isHot && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-steam"></div>}
                        </div>
                        <span className="text-xs font-bold text-stone-900">{cat.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
