'use client';
import { useState } from 'react';
import { supabase } from "@/lib/supabase";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            // 기본 에러 메시지 설정
            let korMessage = "로그인 중 오류가 발생했습니다.";

            // 상세 에러 상황에 따른 한국어 메시지 매핑
            if (error.message.includes("Invalid login credentials")) {
                // 이메일이 없거나 비밀번호가 틀린 경우 Supabase는 보안을 위해 동일한 메시지를 줍니다.
                korMessage = "이메일 또는 비밀번호가 일치하지 않습니다.";
            } else if (error.message.includes("Email not confirmed")) {
                korMessage = "이메일 인증이 완료되지 않았습니다. 메일함을 확인해주세요.";
            } else if (error.message.includes("Too many requests")) {
                korMessage = "너무 많은 로그인 시도가 있었습니다. 잠시 후 다시 시도해주세요.";
            }

            alert(korMessage); // 사용자에게 한국어로 안내
        } else {
            // 로그인 성공 시 메인 또는 구독 관리 페이지로 이동
            router.push('/subscriptions');
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-blue-600 mb-3 tracking-tighter">MoneyLog</h2>
                    <p className="text-gray-500 font-medium">서비스 이용을 위해 로그인이 필요합니다.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email" required placeholder="이메일 주소"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <input
                        type="password" required placeholder="비밀번호"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button className="w-full bg-blue-600 text-white p-4 rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
                        로그인
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    계정이 없으신가요?
                    <Link href="/signup" className="ml-2 text-blue-600 font-bold hover:underline">회원가입</Link>
                </p>
            </div>
        </div>
    );
}