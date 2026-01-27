'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { MobileFrame } from '@/components/layout/MobileFrame';
import { Coffee, Github } from 'lucide-react';

export default function SignIn() {
    const [email, setEmail] = useState('michael@antigravity.io');
    const [password, setPassword] = useState('password');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signIn('credentials', { email, password, callbackUrl: '/' });
    };

    return (
        <MobileFrame>
            <div className="flex-1 flex flex-col items-center justify-center px-8 bg-white">
                <div className="w-20 h-20 bg-amber-600 rounded-3xl flex items-center justify-center shadow-xl shadow-amber-600/30 mb-8">
                    <Coffee className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-stone-900 mb-2">Welcome Back</h2>
                <p className="text-stone-500 mb-8 text-center">Fuel your brilliance with Brew & Bean</p>

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div>
                        <label className="text-sm font-bold text-stone-700 mb-1 block">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-stone-700 mb-1 block">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-600/30 active:scale-98 transition-transform mt-4"
                    >
                        Sign In
                    </button>
                </form>

                <div className="w-full flex items-center gap-4 my-6 text-stone-300">
                    <div className="h-[1px] flex-1 bg-stone-100"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400">or continue with</span>
                    <div className="h-[1px] flex-1 bg-stone-100"></div>
                </div>

                <button
                    onClick={() => signIn('github', { callbackUrl: '/' })}
                    className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-stone-900/20 active:scale-98 transition-transform"
                >
                    <Github className="w-5 h-5" />
                    GitHub Account
                </button>

                <p className="mt-8 text-sm text-stone-500 text-center">
                    Don't have an account? <span className="text-amber-700 font-bold">Sign Up</span>
                </p>
            </div>
        </MobileFrame>
    );
}
