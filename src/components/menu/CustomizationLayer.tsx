import React from 'react';
import { Flame } from 'lucide-react';

interface CustomizationLayerProps {
    product: any;
    onClose: () => void;
    onAdd: () => void;
}

export const CustomizationLayer: React.FC<CustomizationLayerProps> = ({ product, onClose, onAdd }) => {
    if (!product) return null;

    return (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fade-in" onClick={onClose}>
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 animate-slide-up" onClick={(e) => e.stopPropagation()}>
                <div className="w-12 h-1.5 bg-stone-200 rounded-full mx-auto mb-6"></div>

                <div className="flex items-start gap-4 mb-6">
                    <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover shadow-md" />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-stone-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-stone-500 mb-2">{product.description}</p>
                        <span className="text-2xl font-bold text-amber-700">${product.price.toFixed(2)}</span>
                    </div>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                    <h4 className="text-sm font-bold text-stone-900 mb-3">Select Size</h4>
                    <div className="grid grid-cols-3 gap-3">
                        {['Small', 'Medium', 'Large'].map((size, idx) => (
                            <button
                                key={size}
                                className={`border-2 rounded-xl py-3 px-4 text-center transition-colors ${idx === 1 ? 'border-amber-600 bg-amber-50' : 'border-stone-200 hover:border-amber-600 hover:bg-amber-50'}`}
                            >
                                <p className={`text-xs font-bold ${idx === 1 ? 'text-amber-900' : 'text-stone-900'}`}>{size}</p>
                                <p className={`text-xs ${idx === 1 ? 'text-amber-700' : 'text-stone-500'}`}>{idx === 0 ? '8 oz' : idx === 1 ? '12 oz' : '16 oz'}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Temperature Lock */}
                <div className="mb-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                                <Flame className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-stone-900">Hot Delivery Guarantee</p>
                                <p className="text-xs text-stone-600">Arrives at 160°F+ or it's free</p>
                            </div>
                        </div>
                        <div className="w-12 h-6 bg-orange-600 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Add-ons Placeholder */}
                <div className="mb-6">
                    <h4 className="text-sm font-bold text-stone-900 mb-3">Add-ons</h4>
                    <div className="space-y-2">
                        {[
                            { name: 'Vanilla Syrup', price: 0.50 },
                            { name: 'Oat Milk', price: 0.75 },
                            { name: 'Extra Shot', price: 1.00 }
                        ].map(addon => (
                            <label key={addon.name} className="flex items-center justify-between p-3 bg-stone-50 rounded-xl cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="w-5 h-5 rounded border-stone-300 text-amber-600 focus:ring-amber-500" />
                                    <span className="text-sm font-medium text-stone-900">{addon.name}</span>
                                </div>
                                <span className="text-sm font-bold text-stone-700">+${addon.price.toFixed(2)}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={onAdd}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-600/30 active:scale-98 transition-transform"
                >
                    Add to Cart - ${product.price.toFixed(2)}
                </button>
            </div>
        </div>
    );
};
