import React from 'react';
import { ArrowLeft, Minus, Plus, Rocket, CreditCard, Wallet } from 'lucide-react';

interface CheckoutLayerProps {
    onClose: () => void;
    onPlaceOrder: () => void;
}

export const CheckoutLayer: React.FC<CheckoutLayerProps> = ({ onClose, onPlaceOrder }) => {
    return (
        <div className="absolute inset-0 bg-white z-[120] overflow-y-auto hide-scrollbar animate-fade-in">
            <div className="px-6 py-4 border-b border-stone-100 flex items-center gap-4 sticky top-0 bg-white z-10">
                <button onClick={onClose} className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                    <ArrowLeft className="w-5 h-5 text-stone-900" />
                </button>
                <h2 className="text-xl font-bold text-stone-900">Checkout</h2>
            </div>

            <div className="px-6 py-6">
                {/* Cart Summary */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold text-stone-900 mb-4">Your Order</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=80&h=80" alt="Latte" className="w-16 h-16 rounded-lg object-cover" />
                            <div className="flex-1">
                                <h4 className="font-bold text-stone-900">Classic Latte</h4>
                                <p className="text-xs text-stone-600">Medium, Oat Milk, Extra Shot</p>
                                <p className="text-sm font-bold text-amber-700 mt-1">$6.25</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center">
                                    <Minus className="w-3.5 h-3.5 text-stone-700" />
                                </button>
                                <span className="text-sm font-bold w-6 text-center">1</span>
                                <button className="w-7 h-7 rounded-full bg-amber-600 flex items-center justify-center">
                                    <Plus className="w-3.5 h-3.5 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Logistics */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold text-stone-900 mb-4">Delivery Address</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mb-3">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-stone-900 mb-1">Antigravity Landing Zone A</p>
                                <p className="text-xs text-stone-600">Platform 7, Sector 3B</p>
                                <p className="text-xs text-blue-700 font-medium mt-2">ETA: 8-12 minutes</p>
                            </div>
                            <button className="text-xs font-bold text-blue-700">Change</button>
                        </div>
                    </div>
                    <input type="text" placeholder="Add delivery instructions..." className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20" />
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold text-stone-900 mb-4">Payment Method</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-4 p-4 bg-white border-2 border-amber-600 rounded-xl cursor-pointer">
                            <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-amber-600 focus:ring-amber-500" />
                            <div className="flex items-center gap-3 flex-1">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <CreditCard className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-stone-900">Visa •••• 4242</p>
                                    <p className="text-xs text-stone-500">Expires 12/25</p>
                                </div>
                            </div>
                        </label>
                        <label className="flex items-center gap-4 p-4 bg-white border-2 border-stone-200 rounded-xl cursor-pointer">
                            <input type="radio" name="payment" className="w-5 h-5 text-amber-600 focus:ring-amber-500" />
                            <div className="flex items-center gap-3 flex-1">
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                    <Wallet className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-stone-900">Apple Pay</p>
                                    <p className="text-xs text-stone-500">Fast & secure</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-stone-50 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-stone-600">Subtotal</span>
                        <span className="text-sm font-bold text-stone-900">$6.25</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-stone-600">Delivery Fee</span>
                        <span className="text-sm font-bold text-stone-900">$2.50</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-stone-600">Service Fee</span>
                        <span className="text-sm font-bold text-stone-900">$0.75</span>
                    </div>
                    <div className="border-t border-stone-200 my-3"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-stone-900">Total</span>
                        <span className="text-xl font-bold text-amber-700">$9.50</span>
                    </div>
                </div>

                {/* Place Order Button */}
                <button
                    onClick={onPlaceOrder}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-amber-600/30 active:scale-98 transition-transform mb-4"
                >
                    Place Order - $9.50
                </button>
                <p className="text-xs text-center text-stone-500">By placing order, you agree to our Terms & Conditions</p>
            </div>
        </div>
    );
};
