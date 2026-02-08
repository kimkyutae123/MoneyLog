export interface Benefit {
    id: number;
    title: string;
    desc: string;
    originalPrice?: string;
    price: string;
    tag: string;
}

// 중첩 객체 구조: [메인카테고리][서브카테고리] = Benefit[]
export const BENEFIT_DATA: Record<string, Record<string, Benefit[]>> = {
    "LG U+ / 유독": {
        "OTT / 영상": [
            { id: 2, title: "넷플릭스 + 유튜브 프리미엄 연간권", desc: "", originalPrice: "월 21,900원", price: "월 18,900원", tag: "14% 할인" },
            { id: 3, title: "유튜브 프리미엄 + 추가혜택 (택1)", desc: "", price: "월 13,900원", tag: "스테디셀러" },
            { id: 4, title: "티빙 월정액", desc: "", originalPrice: "월 5,500원", price: "월 4,900원", tag: "10% 할인" },
            { id: 5, title: "유튜브 프리미엄 + 이모티콘 플러스", desc: "", price: "월 14,900원", tag: "인기 결합" },
            { id: 25, title: "유튜브 프리미엄 + CGV 구독팩 (3개월)", desc: "", price: "월 15,900원", tag: "영화 매니아" },
            { id: 34, title: "유튜브 프리미엄 + CGV 구독팩 (1개월)", desc: "", price: "월 17,900원", tag: "영화 매니아" },
            { id: 35, title: "유튜브 프리미엄 + 스타벅스 구독팩", desc: "", price: "월 17,900원", tag: "커피 할인" },
            { id: 36, title: "유튜브 프리미엄 + 배달의민족 구독팩", desc: "", price: "월 17,900원", tag: "생활 밀착" },
            { id: 46, title: "디즈니+ 월정액", desc: "", originalPrice: "월 9,900원", price: "월 9,405원", tag: "5% 할인" },
            { id: 47, title: "넷플릭스 월정액", desc: "", originalPrice: "월 7,000원", price: "월 6,500원", tag: "7% 할인" },
        ],
        "AI / 교육 / 자기계발": [
            { id: 1, title: "구글 AI Pro + 도미노 피자", desc: "", originalPrice: "월 29,000원", price: "월 19,800원", tag: "32% 할인" },
            { id: 6, title: "국어 + 영어 AI 교육 팩", desc: "", price: "월 19,800원", tag: "AI 학습" },
            { id: 7, title: "수학 + 과학 AI 교육 팩", desc: "", price: "월 19,800원", tag: "AI 학습" },
            { id: 8, title: "캔바Pro + 추가 AI (택1)", desc: "", price: "월 19,800원", tag: "생산성" },
            { id: 9, title: "라이너 Pro + 캔바 Pro", desc: "", price: "월 19,800원", tag: "추천 조합" },
            { id: 10, title: "우수 AI + 추가 AI (택1)", desc: "", price: "월 19,800원", tag: "전문가용" },
            { id: 11, title: "라이너Pro + 추가 AI (택1)", desc: "", price: "월 19,800원", tag: "검색 최적화" },
            { id: 13, title: "구글 AI Pro + 추가혜택 (택1)", desc: "", price: "월 29,000원", tag: "구글 매니아" },
            { id: 26, title: "클래스101+ 월구독권", desc: "", originalPrice: "월 22,900원", price: "월 19,900원", tag: "33% 할인" },
        ],
        "도서 / 음악 / 라이프": [
            { id: 15, title: "밀리의 서재 1개월 구독권", desc: "", price: "월 11,900원", tag: "독서" },
            { id: 27, title: "지니뮤직 마음껏 듣기", desc: "", price: "월 7,900원", tag: "음악" },
            { id: 28, title: "리디포인트 + 리디셀렉트 + 추가혜택", desc: "", price: "월 9,900원", tag: "전자책" },
            { id: 39, title: "리디셀렉트 도서멤버십", desc: "", originalPrice: "월 4,900원", price: "월 3,900원", tag: "20% 할인" },
            { id: 40, title: "예스24 크레마 클럽 30일", desc: "", originalPrice: "월 5,500원", price: "월 4,500원", tag: "18% 할인" },
            { id: 41, title: "모바일 한경 월 구독권", desc: "", originalPrice: "월 15,000원", price: "월 3,300원", tag: "78% 할인" },
            { id: 42, title: "GS칼텍스 주유/세탁/정비", desc: "", originalPrice: "월 29,000원", price: "월 5,900원", tag: "80% 할인" },
            { id: 44, title: "요기요 할인 쿠폰 정기구독권", desc: "", originalPrice: "월 12,000원", price: "월 6,000원", tag: "50% 할인" },
        ]
    },
    "SKT / T우주": {
        "전체": [] // 추후 데이터 추가용
    },
    "KT": {
        "전체": []
    },
    "신용카드": {
        "전체": []
    }
};