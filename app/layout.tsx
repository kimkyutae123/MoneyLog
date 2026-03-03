import './globals.css';
import Navbar from './components/Navbar'; // 1. Navbar 임포트

export const metadata = {
    title: 'MoneyLog - 똑똑한 구독 생활',
    description: '통신사 혜택 비교 및 지출 관리 서비스',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body>
        <Navbar />
        {children}
        </body>
        </html>
    );
}