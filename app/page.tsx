import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. 히어로 섹션: 서비스의 첫인상을 결정합니다. */}
            <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-blue-600 bg-blue-100 rounded-full animate-bounce">
            2026 통신사 혜택 업데이트 완료 🚀
          </span>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-tight">
                        똑똑한 구독 생활,<br />
                        <span className="text-blue-600">MoneyLog</span>가 정답입니다.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed break-keep">
                        LG U+, KT, SKT까지! 100개가 넘는 통신사 결합 혜택을 한눈에 비교하고 <br className="hidden md:block" />
                        나에게 딱 맞는 고정 지출 절약 방법을 찾아보세요.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/benefits" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-lg">
                            혜택 정보 보러가기
                        </Link>
                        <Link href="/stats" className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all text-lg">
                            나의 지출 통계
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. 퀵 네비게이션: 통신사별 바로가기 섹션입니다. */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">통신사별 혜택 바로가기</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['LG U+ / 유독', 'KT', 'SKT / T우주'].map((telecom, index) => (
                        <Link key={index} href={`/benefits?tab=${index}`} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{telecom}</h3>
                            <p className="text-sm text-gray-400">해당 통신사의 최신 결합 상품과 <br />구독 혜택을 확인하세요.</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}