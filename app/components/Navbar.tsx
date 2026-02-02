'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200">
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
                                onClick={() => setIsOpen(false)}
                                >
                                구독 관리
                            </Link>
                            <Link
                                href="/statistics"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                                >
                                지출 통계
                            </Link>
                </div>
                        )}
            </div>
            </div>
            </div>
        </nav>
    );
}