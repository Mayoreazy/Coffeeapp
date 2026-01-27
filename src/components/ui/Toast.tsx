import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
    visible: boolean;
    message: string;
    submessage?: string;
}

export const Toast: React.FC<ToastProps> = ({ visible, message, submessage }) => {
    if (!visible) return null;

    return (
        <div className="absolute top-16 left-4 right-4 bg-green-600 text-white px-4 py-3 rounded-xl shadow-lg z-[200] flex items-center gap-3 animate-slide-up">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <p className="text-sm font-bold">{message}</p>
                {submessage && <p className="text-xs text-green-100">{submessage}</p>}
            </div>
        </div>
    );
};
