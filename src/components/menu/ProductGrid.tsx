import React from 'react';
import { Flame } from 'lucide-react';

const products = [
    { id: 1, name: 'Classic Latte', description: 'Rich espresso with steamed milk', price: 4.50, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300&h=300', isHot: true },
    { id: 2, name: 'Cappuccino', description: 'Double shot with foam', price: 3.80, image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?auto=format&fit=crop&q=80&w=300&h=300', isHot: true },
    { id: 3, name: 'Americano', description: 'Bold espresso with water', price: 3.20, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=300&h=300', isHot: true },
    { id: 4, name: 'Caramel Mocha', description: 'Chocolate & caramel blend', price: 5.20, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=300&h=300', isHot: true },
];

export const ProductGrid: React.FC<{ onQuickAdd: (p: any) => void; categoryId: string }> = ({ onQuickAdd, categoryId }) => {
    const filteredProducts = products.filter(p =>
        categoryId === 'hot' ? p.isHot :
            categoryId === 'cold' ? !p.isHot :
                true
    );
    return (
        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-5 bg-gradient-to-b from-white to-amber-50/30">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-stone-900">
                    {categoryId === 'hot' ? 'Hot Coffee Selection' : categoryId === 'cold' ? 'Cold Brew Selection' : 'Coffee Selection'}
                </h2>
                <span className="text-xs text-stone-500 font-medium">{filteredProducts.length} items</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-24">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-md border border-stone-100 overflow-hidden">
                        <div className="relative">
                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                            {product.isHot && (
                                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-lg flex items-center gap-1">
                                    <Flame className="w-3 h-3" />
                                    <span className="text-[10px] font-bold">HOT</span>
                                </div>
                            )}
                        </div>
                        <div className="p-3">
                            <h3 className="font-bold text-stone-900 mb-1">{product.name}</h3>
                            <p className="text-xs text-stone-500 mb-2">{product.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-stone-900">${product.price.toFixed(2)}</span>
                                <button
                                    onClick={() => onQuickAdd(product)}
                                    className="bg-amber-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-amber-600/30 active:scale-95 transition-transform"
                                >
                                    Quick Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
