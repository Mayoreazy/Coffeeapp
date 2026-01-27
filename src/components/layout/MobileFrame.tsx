import React from 'react';
import { Signal, Wifi, Battery } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-full min-h-screen bg-gradient-to-br from-[#FFF8F0] to-[#F5E6D3] p-4 sm:p-8">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-[2.5rem] overflow-hidden relative flex flex-col border-8 border-stone-900 h-[850px]">
        {/* Status Bar */}
        <div className="bg-white px-6 pt-4 pb-2 flex justify-between items-center z-50">
          <span className="text-xs font-bold">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full bg-stone-900/10 flex items-center justify-center">
              <Signal className="w-2.5 h-2.5 text-stone-900" />
            </div>
            <div className="w-4 h-4 rounded-full bg-stone-900/10 flex items-center justify-center">
              <Wifi className="w-2.5 h-2.5 text-stone-900" />
            </div>
            <div className="w-4 h-4 rounded-full bg-stone-900/10 flex items-center justify-center">
              <Battery className="w-2.5 h-2.5 text-stone-900" />
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
