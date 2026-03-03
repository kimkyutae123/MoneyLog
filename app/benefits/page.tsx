'use client';
import { useState } from 'react';
import { BENEFIT_DATA } from "../constants/benefitData";

export default function BenefitsPage() {
    const mainCategories = Object.keys(BENEFIT_DATA);
    const [activeMain, setActiveMain] = useState(mainCategories[0]);

    // 서브 카테고리 추출
    const subCategories = Object.keys(BENEFIT_DATA[activeMain as keyof typeof BENEFIT_DATA]);
    const [activeSub, setActiveSub] = useState(subCategories[0]);

    // 메인 탭 변경 시 서브 탭도 첫 번째로 초기화
    const handleMainTabChange = (tab: string) => {
        setActiveMain(tab);
        setActiveSub(Object.keys(BENEFIT_DATA[tab as keyof typeof BENEFIT_DATA])[0]);
    };

    const currentList = (BENEFIT_DATA as any)[activeMain][activeSub] || [];

    return (
        <div className="pt-24 pb-10 px-6 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl font-black text-gray-900 mb-2">결합/혜택 정보</h1>
            <p className="text-gray-500 mb-8">내 구독 서비스를 더 저렴하게 이용하는 방법 💡</p>

            {/* 1단: 메인 카테고리 (LG U+, SKT 등) */}
            <div className="flex gap-4 mb-6 border-b border-gray-100 pb-2 overflow-x-auto scrollbar-hide">
                {mainCategories.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleMainTabChange(tab)}
                        className={`pb-2 px-2 text-sm font-bold transition-all whitespace-nowrap ${
                            activeMain === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* 2단: 서브 카테고리 (OTT, AI 등) */}
            <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
                {subCategories.map((sub) => (
                    <button
                        key={sub}
                        onClick={() => setActiveSub(sub)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            activeSub === sub ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                    >
                        {sub}
                    </button>
                ))}
            </div>

            {/* 3단: 카드 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentList.length > 0 ? (
                    currentList.map((benefit: any, i: number) => (
                        <div key={i} className="bg-white rounded-[32px] p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex-col justify-between h-full">

                        <div>

                            <span className="text-[10px] font-black px-2 py-1 bg-blue-50 text-blue-600 rounded-md mb-4 inline-block">
                                {benefit.tag}
                            </span>
                            <h3 className="text-lg font-bold text-gray-800 mb-2 min-h-[56px]  leading-snug">{benefit.title}</h3>
                            <p className="text-sm text-gray-400 mb-6 min-h-[40px]  leading-relaxed break-all">{benefit.desc || "상세 설명을 직접 입력해주세요."}</p>
                        </div>
                            <div className="flex justify-between items-end pt-5 border-t border-gray-50">
                                {/* 가격 텍스트 영역의 높이를 고정하여 원가 유무에 상관없이 위치를 맞춤 */}
                                <div className="min-h-[44px] flex flex-col justify-end">
                                    {benefit.originalPrice ? (
                                        <span className="block text-[10px] text-gray-300 line-through mb-0.5 tracking-tight">
                                {benefit.originalPrice}
                            </span>
                                    ) : (
                                        // 3. 원가가 없을 때 빈 공간(&nbsp;)을 넣어 가격이 위로 딸려 올라가는 것 방지
                                        <span className="block text-[10px] mb-0.5">&nbsp;</span>
                                    )}
                                    <span className="text-xl font-black text-gray-900 leading-none">
                            {benefit.price}
                        </span>
                                </div>
                                <button
                                    onClick={() => {
                                        if (benefit.link && benefit.link !== "") {
                                            window.open(benefit.link, '_blank');
                                    } else {
                                            alert("이 상품은 'KT 멤버십' 앱 또는 KT 홈페이지 내 '구독' 메뉴에서 신청가능합니다. ");
                                        }
                                        }}
                                    className="text-[11px] font-bold text-blue-500 hover:underline"
                                    >
                                    자세히 보기 →
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-400">데이터를 준비 중입니다.</div>
                )}
            </div>
        </div>
    );
}