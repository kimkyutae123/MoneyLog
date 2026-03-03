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
        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });
        return () => subscription.unsubscribe();
    }, []);

    const handleProtectedLink = (e: React.MouseEvent, href: string) => {
        if (!user) {
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
        <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* 왼쪽: 로고 + 메뉴 리스트 */}
                <div className="flex items-center space-x-8">
                    <Link href="/" className="text-xl font-bold text-blue-600 shrink-0">
                        MoneyLog 💰
                    </Link>

                    {/* 꺼내 놓은 메뉴들 */}
                    <div className="flex items-center space-x-6">
                        <Link
                            href="/subscriptions"
                            className="text-sm font-bold text-gray-600 hover:text-blue-600 transition"
                            onClick={(e) => handleProtectedLink(e, '/subscriptions')}
                        >
                            구독 관리
                        </Link>
                        <Link
                            href="/statistics"
                            className="text-sm font-bold text-gray-600 hover:text-blue-600 transition"
                            onClick={(e) => handleProtectedLink(e, '/statistics')}
                        >
                            지출 통계
                        </Link>
                        <Link
                            href="/benefits"
                            className="text-sm font-bold text-gray-600 hover:text-blue-600 transition"
                            onClick={(e) => handleProtectedLink(e, '/benefits')}
                        >
                            결합/혜택 정보
                        </Link>
                    </div>
                </div>

                {/* 오른쪽: 사용자 정보 및 버튼 */}
                <div className="flex items-center gap-2">
                    {user ? (
                        <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-blue-400 bg-gray-50 px-2 py-1 rounded">
                            {user.email?.split('@')[0]}님
                        </span>
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
                                  className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition"
                            >
                                로그인
                            </Link>
                            <Link href="/signup"
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