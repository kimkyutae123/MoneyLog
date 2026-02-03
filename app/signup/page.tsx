'use client';
import { useState } from 'react';
import { supabase } from "@/lib/supabase";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signUp({ email, password });
        if (error)
        {
            let korMessage = "회원가입 중 오류가 발생했습니다.";

            if (error.message.includes("already registered")) {
                korMessage = "이미 가입된 이메일 주소입니다. 로그인해 주세요.";
            } else if (error.message.includes("at least 6 characters")) {
                korMessage = "비밀번호는 최소 6자 이상이어야 합니다.";
            } else if (error.message.includes("Invalid email")) {
                korMessage = "올바른 이메일 형식이 아닙니다.";
            }
            alert(korMessage);
            return;
        }
        else {
            alert('회원가입이 완료되었습니다! 로그인을 진행해주세요.');
            router.push('/login');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tighter">Join <span className="text-blue-600">MoneyLog</span></h2>
                    <p className="text-gray-500 font-medium">스마트한 구독 관리의 시작, 계정을 만들어보세요.</p>
                </div>

                <form onSubmit={handleSignUp} className="space-y-4">
                    <input
                        type="email" required placeholder="사용할 이메일 주소"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <input
                        type="password" required placeholder="비밀번호 (6자 이상)"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button className="w-full bg-black text-white p-4 rounded-2xl font-bold hover:bg-gray-800 shadow-lg shadow-gray-200 transition-all">
                        회원가입 완료
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    이미 계정이 있으신가요?
                    <Link href="/login" className="ml-2 text-blue-600 font-bold hover:underline">로그인</Link>
                </p>
            </div>
        </div>
    );
}