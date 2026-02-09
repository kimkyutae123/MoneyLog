export interface Benefit {
    id: number;
    title: string;
    desc: string;
    originalPrice?: string;
    price: string;
    tag: string;
    link?: string;
}

export const BENEFIT_DATA: Record<string, Record<string, Benefit[]>> = {
    "LG U+ / 유독": {
        "OTT / 영상": [
            { id: 2, title: "넷플릭스 + 유튜브 프리미엄 연간권", desc: "넷플릭스+유튜브 프리미엄 국내 유일 월 18,900원!", originalPrice: "월 21,900원", price: "월 18,900원", tag: "14% 할인", link: "https://www.lguplus.com/pogg/product/double-streaming" },
            { id: 3, title: "유튜브 프리미엄 + 추가혜택 (택1)", desc: "유튜브 프리미엄과 추가 라이프 혜택까지", price: "월 13,900원", tag: "스테디셀러", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2" },
            { id: 4, title: "티빙 월정액", desc: "티빙 오리지널 콘텐츠, 방송,영화,해외시리즈까지!", originalPrice: "월 5,500원", price: "월 4,900원", tag: "10% 할인", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%EB%8F%85-%ED%8B%B0%EB%B9%99-%EC%9B%94%EC%A0%95%EC%95%A1-%EC%9D%B4%EC%9A%A9%EA%B6%8C" },
            { id: 5, title: "유튜브 프리미엄 + 이모티콘 플러스", desc: "유튜브프리미엄과 카카오이모티콘 무제한 구독상품을 한번에", price: "월 14,900원", tag: "인기 결합", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98%ED%94%8C%EB%9F%AC%EC%8A%A4-%EA%B5%AC%EB%8F%85%ED%8C%A9" },
            { id: 25, title: "유튜브 프리미엄 + CGV 구독팩 (3개월)", desc: "유튜브는 광고없이 프리미엄 영화는 1+1 스마트하게!", price: "월 15,900원", tag: "영화 매니아", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84%EA%B3%BC-cgv-%EA%B5%AC%EB%8F%85%ED%8C%A9-3%EA%B0%9C%EC%9B%94-2025" },
            { id: 34, title: "유튜브 프리미엄 + CGV 구독팩 (1개월)", desc: "영화에 진심인 당신! 유튜브 & CGV에서 최신 영화를 보세요", price: "월 17,900원", tag: "영화 매니아", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-cgv%EA%B5%AC%EB%8F%85%ED%8C%A9-new" },
            { id: 35, title: "유튜브 프리미엄 + 스타벅스 구독팩", desc: "유튜브프리미엄과 매월 제공되는 스타벅스 5000원 모바일카드!", price: "월 17,900원", tag: "커피 할인", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EA%B5%AC%EB%8F%85%ED%8C%A9" },
            { id: 36, title: "유튜브 프리미엄 + 배달의민족 구독팩", desc: "매월 제공되는 배달앱 1위 배민 5000원 교환권 제공!", price: "월 17,900원", tag: "생활 밀착", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1-%EA%B5%AC%EB%8F%85%ED%8C%A9" },
            { id: 46, title: "디즈니+ 월정액", desc: "지금 스트리밍중! 내가 좋아하는 이야기가 모두 여기에!", originalPrice: "월 9,900원", price: "월 9,405원", tag: "5% 할인", link: "https://www.lguplus.com/pogg/product/%EB%94%94%EC%A6%88%EB%8B%88%ED%94%8C%EB%9F%AC%EC%8A%A4-%EC%9B%94%EC%A0%95%EC%95%A1-%EA%B5%AC%EB%8F%85" },
            { id: 47, title: "넷플릭스 월정액", desc: "넷플릭스에서 영화와 시리즈를 무제한으로 즐겨보세요!", originalPrice: "월 7,000원", price: "월 6,500원", tag: "7% 할인", link: "https://www.lguplus.com/pogg/product/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%EC%9B%94%EC%A0%95%EC%95%A1" },
        ],
        "AI / 교육 / 자기계발": [
            { id: 1, title: "구글 AI Pro + 도미노 피자", desc: "구글 AI 프로와 도미노 피자 할인까지 한 번에!", originalPrice: "월 29,000원", price: "월 19,800원", tag: "32% 할인", link: "https://www.lguplus.com/pogg/product/%EA%B5%AC%EA%B8%80-ai-%ED%94%84%EB%A1%9C-%EB%8F%84%EB%AF%B8%EB%85%B8%ED%94%BC%EC%9E%90" },
            { id: 6, title: "국어 + 영어 AI 교육 팩", desc: "국어 실력 AI가 척척! 영어 말하기 자신감 쑥쑥", price: "월 19,800원", tag: "AI 학습", link: "https://www.lguplus.com/pogg/product/%EB%9F%AC%EB%8B%88-%ED%94%8C%EB%9E%AD-ai%EA%B5%90%EC%9C%A1%ED%8C%A9-26y" },
            { id: 7, title: "수학 + 과학 AI 교육 팩", desc: "수학대왕으로 맞춤 문제풀이, 과학동아로 호기심까지!", price: "월 19,800원", tag: "AI 학습", link: "https://www.lguplus.com/pogg/product/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-%EA%B3%BC%ED%95%99%EB%8F%99%EC%95%84air-ai%EA%B5%90%EC%9C%A1%ED%8C%A9-26y" },
            { id: 8, title: "캔바Pro + 추가 AI (택1)", desc: "쉽게 만드는 디자인 플랫폼 캔바", price: "월 19,800원", tag: "생산성", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%EB%8F%85-%EC%BA%94%EB%B0%94-%EB%8D%94%EB%B8%94-ai-26y" },
            { id: 9, title: "라이너 Pro + 캔바 Pro", desc: "라이너로 핵심요약, 캔바로 PPT와 썸네일 까지!", price: "월 19,800원", tag: "추천 조합", link: "https://www.lguplus.com/pogg/product/%EB%9D%BC%EC%9D%B4%EB%84%88-%EC%BA%94%EB%B0%94-ai-%EA%B2%B0%ED%95%A9%EC%83%81%ED%92%88-26y" },
            { id: 10, title: "우수 AI + 추가 AI (택1)", desc: "GPT, 클로드, 제미나이 모든 AI를 한번에 우수AI와 추가AI 하나", price: "월 19,800원", tag: "전문가용", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%EB%8F%85-%EC%9A%B0%EC%88%98-pick-ai-26y" },
            { id: 11, title: "라이너Pro + 추가 AI (택1)", desc: "챗GPT, 제미나이 하나로 모아 라이너로 정확하게!", price: "월 19,800원", tag: "검색 최적화", link: "https://www.lguplus.com/pogg/product/%EC%9C%A0%EB%8F%85-%EB%9D%BC%EC%9D%B4%EB%84%88-pick-ai-26y" },
            { id: 13, title: "구글 AI Pro + 추가혜택 (택1)", desc: "구글 AI프로 구독에 라이프 혜택까지", price: "월 29,000원", tag: "구글 매니아", link: "https://www.lguplus.com/pogg/product/%EA%B5%AC%EA%B8%80-ai-%ED%94%84%EB%A1%9C-%EC%9C%A0%EB%8F%85pick" },
            { id: 26, title: "클래스101+ 월구독권", desc: "언제든 자유롭게 수강해요 세상의 모든 클래스", originalPrice: "월 22,900원", price: "월 19,900원", tag: "33% 할인", link: "https://www.lguplus.com/pogg/product/%ED%81%B4%EB%9E%98%EC%8A%A4101" },
        ],
        "도서 / 음악 / 라이프": [
            { id: 15, title: "밀리의 서재 1개월 구독권", desc: "여행 가방은 가볍게, 독서는 깊게! AI책도 밀리의 서제에서", price: "월 11,900원", tag: "독서", link: "https://www.lguplus.com/pogg/product/%EB%B0%80%EB%A6%AC%EC%9D%98%EC%84%9C%EC%9E%AC-1%EA%B0%9C%EC%9B%94-new" },
            { id: 27, title: "지니뮤직 마음껏 듣기", desc: "데이터 걱정없는 무제한 나만의 음악 요정 지니", price: "월 7,900원", tag: "음악", link: "https://www.lguplus.com/pogg/product/%EC%A7%80%EB%8B%88%EB%AE%A4%EC%A7%81-%EB%A7%88%EC%9D%8C%EA%BB%8F-%EB%93%A3%EA%B8%B0-%EC%9B%94%EC%A0%95%EC%95%A1" },
            { id: 28, title: "리디포인트 + 리디셀렉트 + 추가혜택", desc: "리디 금액권과 리디셀렉트, 추가 라이프 혜택까지", price: "월 9,900원", tag: "전자책", link: "https://www.lguplus.com/pogg/product/%EB%A6%AC%EB%94%94-%EC%9C%A0%EB%8F%85pick" },
            { id: 39, title: "리디셀렉트 도서멤버십", desc: "소설,웹툰, 전문서적까지 이 모든걸 3,900원으로", originalPrice: "월 4,900원", price: "월 3,900원", tag: "20% 할인", link: "https://www.lguplus.com/pogg/product/%EB%A6%AC%EB%94%94%EC%85%80%EB%A0%89%ED%8A%B8-%EB%8F%84%EC%84%9C%EB%A9%A4%EB%B2%84%EC%89%BD-%EC%9B%94%EC%A0%95%EC%95%A1" },
            { id: 40, title: "예스24 크레마 클럽 30일", desc: "제한 없는 전자책 백화점 지식클럽 크레마 클럽", originalPrice: "월 5,500원", price: "월 4,500원", tag: "18% 할인", link: "https://www.lguplus.com/pogg/product/%EC%98%88%EC%8A%A424-%ED%81%AC%EB%A0%88%EB%A7%88-%ED%81%B4%EB%9F%BD-30%EC%9D%BC-%EC%9D%B4%EC%9A%A9%EA%B6%8C" },
            { id: 41, title: "모바일 한경 월 구독권", desc: "6개월만 꾸준히 구독하시면 돈의 흐름이 보입니다.", originalPrice: "월 15,000원", price: "월 3,300원", tag: "78% 할인", link: "https://www.lguplus.com/pogg/product/%EB%AA%A8%EB%B0%94%EC%9D%BC%ED%95%9C%EA%B2%BD-%EC%9B%94-%EA%B5%AC%EB%8F%85%EA%B6%8C" },
            { id: 42, title: "GS칼텍스 주유/세탁/정비", desc: "주유,세차,차량정비 한번에 편하게 알뜰하게", originalPrice: "월 29,000원", price: "월 5,900원", tag: "80% 할인", link: "https://www.lguplus.com/pogg/product/gs%EC%B9%BC%ED%85%8D%EC%8A%A4-%EC%A3%BC%EC%9C%A0%EC%84%B8%EC%B0%A8%EA%B6%8C%EA%B3%BC-%EC%B0%A8%EB%9F%89%EC%A0%95%EB%B9%84%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B5%AC%EB%8F%85%EA%B6%8C" },
            { id: 44, title: "요기요 할인 쿠폰 정기구독권", desc: "우리 동네 맛집을 빠르게 즐겨요, 요기요", originalPrice: "월 12,000원", price: "월 6,000원", tag: "50% 할인", link: "https://www.lguplus.com/pogg/product/%EC%9A%94%EA%B8%B0%EC%9A%94-%ED%95%A0%EC%9D%B8%EC%BF%A0%ED%8F%B0-%EC%A0%95%EA%B8%B0%EA%B5%AC%EB%8F%85%EA%B6%8C" },
        ]
    },
    "KT": {
        "OTT / 영상": [
            { id: 48, title: "디즈니+ 프리미엄 + 메가커피", desc: "고화질 디즈니 콘텐츠에 매달 메가커피 3잔의 여유를 더해보세요.", originalPrice: "월 19,000원", price: "월 13,900원", tag: "5,100원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 49, title: "디즈니+ 스탠다드 + 메가커피", desc: "디즈니 인기작과 시원한 커피를 가장 경제적으로 즐기는 방법입니다.", originalPrice: "월 15,000원", price: "월 9,900원", tag: "5,100원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 50, title: "디즈니+ 프리미엄 생활구독팩", desc: "4K 화질의 디즈니+와 편의점/쇼핑/이모티콘 혜택을 자유롭게 골라보세요.", price: "월 13,900원", tag: "추천", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 51, title: "디즈니+ 스탠다드 생활구독팩", desc: "실속 있는 디즈니+ 시청과 일상 필수 혜택을 하나로 묶었습니다.", price: "월 9,900원", tag: "추천", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 52, title: "티빙 프리미엄 + 메가커피", desc: "티빙 오리지널 콘텐츠와 매월 커피 혜택을 풍성하게 누릴 수 있습니다.", originalPrice: "월 22,100원", price: "월 17,000원", tag: "5,100원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 53, title: "티빙 스탠다드 + 메가커피", desc: "화제성 1위 티빙 예능과 커피 혜택을 합리적인 가격에 제공합니다.", originalPrice: "월 18,600원", price: "월 13,500원", tag: "5,100원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 54, title: "티빙 베이직 + 메가커피", desc: "티빙의 모든 콘텐츠와 커피 한 잔의 즐거움을 실속 있게 챙기세요.", originalPrice: "월 14,500원", price: "월 9,500원", tag: "5,100원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 55, title: "티빙 광고형 스탠다드 + 메가커피", desc: "광고형 요금제로 부담은 낮추고 티빙과 커피 혜택은 그대로 유지했습니다.", originalPrice: "월 7,200원", price: "월 5,500원", tag: "1,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 56, title: "유튜브 프리미엄 생활 구독팩", desc: "유튜브 광고 제거는 물론 편의점이나 쇼핑 쿠폰까지 덤으로 드립니다.", price: "월 14,900원", tag: "생활밀착", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 57, title: "유튜브 프리미엄 + 스타벅스", desc: "광고 없는 유튜브 시청과 스타벅스 커피의 프리미엄 조합입니다.", originalPrice: "월 19,600원", price: "월 14,900원", tag: "4,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 58, title: "티빙 프리미엄 + 스타벅스", desc: "최고 화질 티빙 콘텐츠와 스타벅스 브랜드 혜택을 함께 누려보세요.", originalPrice: "월 21,700원", price: "월 17,000원", tag: "4,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 59, title: "티빙 스탠다드 + 스타벅스", desc: "티빙 인기작 정주행과 스타벅스의 여유를 동시에 선사합니다.", originalPrice: "월 18,200원", price: "월 13,500원", tag: "4,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 60, title: "티빙 베이직 + 스타벅스", desc: "실속파를 위한 티빙 구독과 스타벅스 커피 혜택의 알찬 구성입니다.", originalPrice: "월 14,200원", price: "월 9,500원", tag: "4,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 61, title: "디즈니+ 프리미엄 + 스타벅스", desc: "디즈니 대작 영화를 감상하며 즐기는 스타벅스 커피 한 잔의 행복입니다.", originalPrice: "월 18,600원", price: "월 13,900원", tag: "4,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 62, title: "디즈니+ 스탠다드 + 스타벅스", desc: "디즈니+ 오리지널 시리즈와 스타벅스 혜택을 더 가벼운 가격으로 만나세요.", originalPrice: "월 14,600원", price: "월 9,900원", tag: "4,700원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 63, title: "유튜브 프리미엄 + 롯데시네마", desc: "스마트폰으로는 유튜브를, 주말엔 롯데시네마에서 영화를 즐겨보세요.", originalPrice: "월 29,900원", price: "월 27,900원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 64, title: "유튜브 프리미엄 단독", desc: "복잡한 혜택 없이 유튜브 프리미엄만 깔끔하게 할인받는 요금제입니다.", originalPrice: "월 14,900원", price: "월 13,900원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 65, title: "넷플릭스 (광고형~프리미엄)", desc: "다양한 넷플릭스 요금제를 KT 전용 할인 혜택으로 저렴하게 가입하세요.", price: "월 6,500원 ~", tag: "최대 1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 66, title: "TVING 프리미엄", desc: "티빙의 모든 콘텐츠를 동시 4인까지 고화질로 자유롭게 감상하세요.", originalPrice: "월 17,000원", price: "월 16,000원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 67, title: "TVING 스탠다드", desc: "2인이 동시에 티빙의 드라마와 예능을 고화질로 즐길 수 있는 추천형입니다.", originalPrice: "월 13,500원", price: "월 12,500원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 68, title: "TVING 베이직", desc: "혼자서 즐기기에 충분한 티빙의 핵심 혜택을 합리적인 가격에 드립니다.", originalPrice: "월 9,500원", price: "월 8,500원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 69, title: "TVING 광고형 스탠다드", desc: "최소한의 광고 시청으로 티빙의 가치를 최대치로 누리는 실속 요금제입니다.", originalPrice: "월 5,500원", price: "월 5,000원", tag: "500원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 70, title: "디즈니+ 프리미엄", desc: "최대 4인 동시 시청과 돌비 애트모스 사운드로 완벽한 몰입감을 느껴보세요.", originalPrice: "월 13,900원", price: "월 12,900원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 71, title: "디즈니+ 스탠다드", desc: "디즈니, 픽사, 마블 등 방대한 콘텐츠를 부담 없는 가격으로 구독하세요.", originalPrice: "월 9,900원", price: "월 8,900원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
        ],
        "AI / 교육 / 자기계발": [
            { id: 72, title: "DeepL 인디비주얼 (AI 번역)", desc: "세계 최고 수준의 AI 번역기 DeepL의 프로 기능을 마음껏 활용해보세요.", originalPrice: "월 11,900원", price: "월 9,900원", tag: "2,200원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 73, title: "콴다 프리미엄", desc: "모르는 문제도 AI가 척척! 수학 공부 필수 앱 콴다의 무제한 혜택입니다.", originalPrice: "월 18,500원", price: "월 16,500원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 74, title: "콴다 프리미엄 Lite", desc: "학습에 꼭 필요한 콴다의 기능들만 모아 더 가벼운 가격에 제공합니다.", originalPrice: "월 11,000원", price: "월 9,000원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
        ],
        "도서 / 음악 / 라이프": [
            { id: 75, title: "모아진 (국내외 매거진 무제한)", desc: "국내외 수천 종의 잡지를 언제 어디서나 스마트폰으로 무제한 감상하세요.", originalPrice: "월 15,000원", price: "월 13,000원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 76, title: "모아진 (국내 매거진 무제한)", desc: "패션, 경제, 라이프스타일 등 국내 모든 매거진을 한곳에 모았습니다.", originalPrice: "월 9,000원", price: "월 7,000원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 77, title: "모아진 (매거진 5종)", desc: "내가 좋아하는 핵심 잡지 5종을 골라 가볍게 구독하는 실속형 서비스입니다.", originalPrice: "월 5,000원", price: "월 4,000원", tag: "1,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 78, title: "밀리의 서재", desc: "15만 권의 독서 콘텐츠를 무제한으로! 독서 습관을 만드는 가장 쉬운 방법입니다.", originalPrice: "월 11,900원", price: "월 9,900원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 79, title: "지니 스마트 음악감상", desc: "지니뮤직의 모든 곡을 모바일 기기에서 무제한으로 마음껏 감상해보세요.", originalPrice: "월 8,140원", price: "월 6,140원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
            { id: 80, title: "블라이스 셀렉트 (웹소설)", desc: "화제의 인기 웹소설과 장르 문학을 선별하여 무제한 감상 혜택을 드립니다.", originalPrice: "월 9,900원", price: "월 7,900원", tag: "2,000원 할인", link: "https://m.my.kt.com/product/s_OttSubscribeView.do" },
        ]
    },
    "SKT / T우주": {
        "OTT / 영상": [
            { id: 84, title: "YouTube Premium 이용권 + 추가 상품 1개 더", desc: "유튜브 프리미엄 이용권과 함께 제휴사 혜택 1종을 선택하여 이용할 수 있습니다.", price: "월 14,900원~", tag: "인기 조합", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000714" },
            { id: 85, title: "Youtube Premium 이용권 + Google One 100GB", desc: "유튜브 프리미엄 혜택과 구글 원 클라우드 스토리지 100GB를 함께 제공합니다.", price: "월 14,900원", tag: "강력 추천", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000737" },
            { id: 86, title: "TVING 광고형 스탠다드, Wavve 광고형 스탠다드", desc: "티빙과 웨이브의 광고형 요금제를 결합하여 합리적인 가격으로 감상하세요.", originalPrice: "월 11,000원", price: "월 6,500원", tag: "41% 할인", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000726" },
            { id: 87, title: "TVING 스탠다드, Wavve 콘텐츠 팩 플러스", desc: "티빙과 웨이브의 고화질 콘텐츠를 결합 혜택가로 동시에 누릴 수 있습니다.", originalPrice: "월 24,400원", price: "월 13,900원", tag: "43% 할인", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000727" },
            { id: 88, title: "TVING 프리미엄, Wavve 콘텐츠 팩 프리미엄", desc: "티빙과 웨이브의 최고 화질 및 동시 시청 혜택을 제공하는 최상위 결합 상품입니다.", originalPrice: "월 30,900원", price: "월 17,900원", tag: "42% 할인", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000728" },
            { id: 90, title: "티빙 & 네이버 웹툰 쿠키 30개", desc: "티빙 콘텐츠 시청과 네이버 웹툰 쿠키 혜택을 통합하여 제공합니다.", price: "월 6,500원~", tag: "엔터 팩", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000656" },
            { id: 91, title: "티빙 1개월 이용권 + 추가 상품 1개더", desc: "티빙 이용권에 원하는 추가 혜택 1종을 더해 이용할 수 있습니다.", price: "월 5,900원~", tag: "선택형", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000651" },
            { id: 92, title: "Dinsey + 이용권 + 추가 상품 1개 더", desc: "디즈니+ 콘텐츠와 추가 제휴 혜택 1종을 함께 이용 가능한 상품입니다.", price: "월 9,900원~", tag: "선택형", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000538" },
            { id: 95, title: "미디어 기본 상품 중 택 1 + 추가 상품 1개 더", desc: "영상 구독 서비스를 기반으로 라이프스타일 추가 상품을 선택할 수 있습니다.", price: "월 9,900원~", tag: "가성비", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000437" },
            { id: 98, title: "Netfilx + Wavve 콘텐츠팩", desc: "넷플릭스 요금제와 웨이브 콘텐츠 팩을 결합하여 폭넓은 콘텐츠를 제공합니다.", price: "월 12,000원~", tag: "OTT 결합", link: "https://m.sktuniverse.co.kr/netfunnel?path=%2Fproduct%2Fdetail%3FprdId%3DPR00000506" },
            { id: 105, title: "세븐일레븐/투썸플레이스 최대 30% 할인 + 티빙 이용권", desc: "편의점 및 카페 할인 혜택과 티빙 구독이 결합된 라이프 상품입니다.", price: "월 9,900원~", tag: "라이프", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000109" },
        ],
        "AI / 교육 / 자기계발": [
            { id: 89, title: "밀리의서재 1개월 이용권 + 추가 상품 1개 더", desc: "무제한 독서 콘텐츠와 함께 원하는 추가 제휴 혜택을 이용해 보세요.", price: "월 11,900원~", tag: "자기계발", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000664" },
            { id: 94, title: "DIY 기본 상품 택 2 + 추가 상품 1~2개 더", desc: "기본 상품과 추가 상품을 취향대로 직접 조합하여 구성하는 구독 상품입니다.", price: "월 9,900원~", tag: "내맘대로", link: "https://m.sktuniverse.co.kr/netfunnel?path=%2Fproduct%2Fdetail%3FprdId%3DPR00000434" },
            { id: 104, title: "세븐일레븐/투썸플레이스 최대 30% 할인 + 밀리의서재 이용권", desc: "편의점, 카페 상시 할인에 밀리의 서재 무제한 독서 혜택을 더했습니다.", price: "월 11,900원", tag: "독서 팩", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000618" },
        ],
        "도서 / 음악 / 라이프": [
            { id: 81, title: "올리브영 3종 쿠폰팩, 스타벅스20% 할인, 이마트24 1000원당 200원 할인", desc: "생활에 필요한 3가지 구독을 한번에! ", price: "월 9,900원", tag: "생활 밀착", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000758"},
            { id: 82, title: "멜론 1개월 이용권 + 추가상품 1개더", desc: "멜론의 음악 스트리밍 서비스와 추가 제휴 혜택 1종을 함께 누리세요.", price: "월 7,500원~", tag: "음악 추천", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000738" },
            { id: 83, title: "멜론 1개월 이용권 + 티빙 광고형 스탠다드 이용권", desc: "음악 스트리밍과 영상 구독 서비스를 결합하여 엔터테인먼트 혜택을 강화했습니다.", price: "월 11,500원~", tag: "음악+영상", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000757" },
            { id: 93, title: "Google One 100GB + 추가 상품 1개~2개 더", desc: "구글 클라우드 스토리지와 다양한 라이프스타일 혜택을 함께 제공합니다.", price: "월 7,900원~", tag: "클라우드", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000436" },
            { id: 96, title: "스마일캐시 3000원,G마켓 & 유니버스 클럽 쿠폰, 구글원 100G + 추가 상품1~2개", desc: "G마켓과 유니버스 클럽의 다양한 혜택을 우주패스와 함께", price: "월 9,900원~", tag: "쇼핑 특화", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000488" },
            { id: 97, title: "스마일 캐시 3000원. G마켓 & 유니버스 클럽 쿠폰 매월 지급, 구글원 100G + 추가 상품 1개", desc: "쇼핑 멤버십과 클라우드 혜택을 합리적인 가격으로 구성한 실속 상품입니다.", price: "월 5,900원~", tag: "실속 쇼핑", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000485" },
            { id: 99, title: "Amazon 무료배송, 쿠폰2개 (총 10,000원), 쇼핑 포인트 41,000P, Google One 100GB + 추가 상품 1~2개 더", desc: "쇼핑 포인트와 무료 배송 등 강력한 쇼핑 혜택을 연간 단위로 이용하세요.", originalPrice: "연 118,000원", price: "연 99,000원", tag: "16% 할인", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000107" },
            { id: 100, title: "세븐일레븐/ 투썸플레이스 최대 30% 할인 + 추가 상품 1개~2개 더 (연간)", desc: "편의점 및 카페 할인 혜택을 연간권으로 가입하여 더 큰 할인을 적용받으세요.", originalPrice: "연 118,000원", price: "연 99,000원", tag: "16% 할인", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000110" },
            { id: 101, title: "세븐일레븐 / 투썸플레이스 최대 30% 할인 + 추가 상품 1~2개 더", desc: "주요 제휴처에서 상시 할인 혜택과 추가 선택 상품을 제공합니다.", price: "월 9,900원~", tag: "카페/편의점", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000109" },
            { id: 102, title: "세븐일레븐/투썸플레이스 최대 30% 할인 + 배스킨라빈스 7000원 쿠폰", desc: "일상의 할인 혜택에 배스킨라빈스 제휴 쿠폰을 더한 구성입니다.", price: "월 9,900원", tag: "디저트 팩", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000555" },
            { id: 103, title: "세븐일레븐/투썸플레이스 최대 30% 할인 +배민 알뜰/한집배달 3000원 쿠폰 3장", desc: "오프라인 할인과 배달의민족 쿠폰 혜택을 통합하여 제공합니다.", price: "월 9,900원", tag: "배달 할인", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000607" },
            { id: 106, title: "세븐일레븐/투썸플레이스 최대 30% 할인 + 멜론 모바일 무제한 듣기", desc: "생활 브랜드 할인과 음악 무제한 스트리밍을 결합한 라이프 스타일 상품입니다.", price: "월 9,900원", tag: "음악 라이프", link: "https://m.sktuniverse.co.kr/product/detail?prdId=PR00000756" },
            { id: 107, title: "Amazon 무료배송, 쿠폰2개 (총 10000원), 쇼핑포인트 3000P, Google One 100GB + 추가 상품 1~2개 더", desc: "아마존 직구 혜택과 쇼핑 포인트, 클라우드 서비스를 기본으로 제공합니다.", price: "월 9,900원~", tag: "쇼핑 기본", link: "https://m.sktuniverse.co.kr/netfunnel?path=%2Fproduct%2Fdetail%3FprdId%3DPR00000107" },
        ]
    }
};