import React from 'react';
import { MapPin, ChevronDown, Bell, Search } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-700" />
                    <div>
                        <p className="text-xs text-stone-500 font-medium">Deliver to</p>
                        <button className="text-sm font-bold text-stone-900 flex items-center gap-1">
                            Antigravity Landing Zone A
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Bell className="w-5 h-5 text-stone-700" />
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                    type="text"
                    placeholder="Search coffee, pastries, beans..."
                    className="w-full bg-white pl-12 pr-4 py-3 rounded-xl border border-amber-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm font-medium placeholder:text-stone-400"
                />
            </div>
        </header>
    );
};
