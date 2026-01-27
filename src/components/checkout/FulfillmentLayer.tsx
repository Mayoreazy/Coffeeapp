import React from 'react';
import { X, CheckCircle, Check, Coffee, Rocket, PackageCheck, Star, Phone, Thermometer } from 'lucide-react';

interface FulfillmentLayerProps {
    onClose: () => void;
}

export const FulfillmentLayer: React.FC<FulfillmentLayerProps> = ({ onClose }) => {
    return (
        <div className="absolute inset-0 bg-white z-[120] overflow-y-auto hide-scrollbar animate-fade-in">
            <div className="px-6 py-4 border-b border-stone-100 flex items-center gap-4 sticky top-0 bg-white z-10">
                <button onClick={onClose} className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-stone-900" />
                </button>
                <h2 className="text-xl font-bold text-stone-900">Order Tracking</h2>
            </div>

            <div className="px-6 py-8">
                {/* Order Confirmation */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Order Confirmed!</h3>
                    <p className="text-sm text-stone-600 mb-1">Order #2841</p>
                    <p className="text-xs text-stone-500">Estimated arrival: 8-12 minutes</p>
                </div>

                {/* Steaming Coffee Animation */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=200&h=200" alt="Coffee" className="w-32 h-32 rounded-full object-cover shadow-xl" />
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/60 rounded-full blur-md animate-steam" style={{ animationDelay: '0s' }}></div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/40 rounded-full blur-md animate-steam" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full blur-md animate-steam" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                {/* Real-time Progress Tracker */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 mb-6 border border-amber-100">
                    <div className="space-y-6">
                        {/* Stage 1: Order Received */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-stone-900">Order Received</p>
                                <p className="text-xs text-stone-600">Your order has been confirmed</p>
                                <p className="text-xs text-green-700 font-medium mt-1">Completed at 9:42 AM</p>
                            </div>
                        </div>

                        {/* Stage 2: Brewing */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                <Coffee className="w-5 h-5 text-white" />
                                <div className="absolute inset-0 rounded-full border-2 border-amber-600 animate-ping"></div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-stone-900">Brewing</p>
                                <p className="text-xs text-stone-600">Our barista is crafting your drink</p>
                                <div className="w-full bg-amber-200 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="w-2/3 h-full bg-amber-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Stage 3: In Transit */}
                        <div className="flex items-start gap-4 opacity-50">
                            <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center flex-shrink-0">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-stone-900">In Transit (Antigravity)</p>
                                <p className="text-xs text-stone-600">On the way to your landing zone</p>
                            </div>
                        </div>

                        {/* Stage 4: Delivered */}
                        <div className="flex items-start gap-4 opacity-50">
                            <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center flex-shrink-0">
                                <PackageCheck className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-stone-900">Delivered</p>
                                <p className="text-xs text-stone-600">Enjoy your hot coffee!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courier Info */}
                <div className="bg-white border border-stone-200 rounded-2xl p-4 mb-6">
                    <div className="flex items-center gap-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Courier" className="w-14 h-14 rounded-full object-cover border-2 border-amber-200" />
                        <div className="flex-1">
                            <p className="text-sm font-bold text-stone-900">Michael Rodriguez</p>
                            <p className="text-xs text-stone-600">Antigravity Courier</p>
                            <div className="flex items-center gap-1 mt-1">
                                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                <span className="text-xs font-bold text-stone-900">4.9</span>
                                <span className="text-xs text-stone-500">(2,847 deliveries)</span>
                            </div>
                        </div>
                        <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                            <Phone className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

                {/* Temperature Guarantee */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-5 text-white mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Thermometer className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-bold mb-1">Hot Delivery Active</p>
                            <p className="text-xs text-orange-100">Your beverage will arrive at 160°F+ or it's free</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-stone-900 text-white py-4 rounded-xl font-bold text-sm shadow-lg active:scale-98 transition-transform">
                        Track on Map
                    </button>
                    <button className="bg-white border-2 border-stone-200 text-stone-900 py-4 rounded-xl font-bold text-sm active:scale-98 transition-transform">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};
