'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from "@/lib/supabase"
import { User } from '@supabase/supabase-js';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });
        return () => subscription.unsubscribe();
    }, []);

    const handleProtectedLink = (e: React.MouseEvent, href: string) => {
        if(!user) {
            e.preventDefault();
            alert("로그인이 필요한 서비스 입니다.");
            router.push('/login');
            setIsOpen(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };


    return (
        <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                <Link href="/public" className="text-xl font-bold text-blue-600">
                    MoneyLog 💰
                </Link>


                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                        >
                        <span>서비스 메뉴</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                            <Link
                                href="/subscriptions"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                onClick={(e) => {
                                    handleProtectedLink(e, '/subscriptions');
                                    setIsOpen(false);
                                }}
                                >
                                구독 관리
                            </Link>
                            <Link
                                href="/statistics"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                onClick={(e) =>{
                                    handleProtectedLink(e, '/statistics');
                                    setIsOpen(false);
                                }}
                                >
                                지출 통계
                            </Link>
                </div>
                        )}
            </div>
            </div>
                <div className="flex  items-centerr gap-2">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">{user.email?.split('@')[0]}님</span>
                            <button
                                onClick={handleLogout}
                                className="text-xs font-bold text-gray-400 hover:text-red-500 transition"
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                        <Link href="/login"
                              className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition "
                    >
                            로그인
                        </Link>
                        <Link
                            href="/signup"
                        className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-blue-100 transition"
                        >
                        회원가입
                    </Link>
                        </div>
                        )}
                </div>
            </div>
        </nav>
    );
}