'use client';
import { useState, useEffect} from 'react';
import { supabase } from "@/lib/supabase";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface Subscription {
    id: number;
    name: string;
    price: number;
    category: string;
    billing_date: string;
    cycle: number;
}
export default function StatisticsPage() {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const selectedYearSubscriptions = subscriptions.filter((sub: Subscription) => {
        const year = new Date(sub.billing_date).getFullYear();
        return year === selectedYear;
    });

    useEffect(() => {
        const fetchSubscriptions = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if(user) {
                const { data } = await supabase
                    .from('subscriptions')
                    .select('*')
                    .eq('user_id', user.id);
                if(data) setSubscriptions(data);
            }
        };
        fetchSubscriptions();
    }, []);

    const getCharData = (subs: Subscription[], year: number) =>{

        const monthlyData = Array.from({ length: 12 }, (_, i) => ({
            month: `${i + 1}월`,
            amount: 0,
        }));

        subs.forEach((sub) => {
            const date = new Date(sub.billing_date);
            if(date.getFullYear() === year) {
                const monthIndex = date.getMonth();
                monthlyData[monthIndex].amount += Number(sub.price);
            }
        });

        return monthlyData;

    };

    const charData = getCharData(subscriptions, selectedYear);
    const categoryTotals = subscriptions.reduce((acc: { [key: string]: number }, sub: Subscription) => {
        const subYear = new Date(sub.billing_date).getFullYear();
        if(subYear === selectedYear) {
            acc[sub.category] = (acc[sub.category] || 0) + sub.price;
        }
        return acc;
    }, {});

    const nextMonthTotal = subscriptions.reduce((acc: number, sub: Subscription) => {
        return acc + sub.price;
    }, 0);
    const totalYearlyAmount = charData.reduce((acc, cur) => acc + cur.amount, 0);
    return (
        <div className="pt-24 pb-10 px-6 max-w-4xl mx-auto">
            {/* 1. 헤더 부분 */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">지출 통계</h1>
                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    className="p-2 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {[2026, 2025, 2024, 2023,2022,2021,2020].map(y => <option key={y} value={y}>{y}년</option>)}

                </select>
            </div>


            <div className="bg-blue-600 rounded-3xl p-8 text-white mb-8 shadow-xl shadow-blue-100">
                <p className="text-blue-100 text-sm mb-1">{selectedYear}년 총 지출 금액</p>
                <h2 className="text-4xl font-black">{totalYearlyAmount.toLocaleString()}원</h2>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-80 flex items-center justify-center">
               <ResponsiveContainer width="100%" height="100%">

                   <BarChart data ={charData} margin={{ top: 30, right:10, left:10, bottom:10 }}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0"/>
                       <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}}/>
                       <YAxis hide />
                       <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '15px', border: 'none'}} />
                       <Bar dataKey="amount" fill="#2563eb" radius={[10, 10, 0, 0]} barSize={40}>

                           <LabelList
                               dataKey="amount"
                               position="top"
                               formatter={(val) => {
                                   if (typeof val === 'number' && val > 0) {
                                       return `${val.toLocaleString()}원`;                                   }
                                   return '';
                               }}
                               style={{ fontSize: '11px', fill: '#3b82f6', fontWeight: 'bold' }}
                           />
                       </Bar>
                   </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{selectedYear}년 결제 상세내역</h3>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    {selectedYearSubscriptions.length > 0 ? (
                        <div className="divide-y divide-y divide-gray-50">
                            {selectedYearSubscriptions.map((sub: Subscription) => (
                                <div key={sub.id} className="p-5 flex justify-between items-center hover:bg-gray-50 transition">
                                    <div>
                                        <p className="font-bold text-gray-800">{sub.name}</p>
                                        <p className="text-xs text-gray-400">{sub.billing_date} · {sub.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-blue-600">{sub.price.toLocaleString()}원</p>
                                        <p className="text-[10px] text-gray-400">{sub.cycle === 365 ? '연 결제' : '월 결제'}</p>
                                    </div>
                                    </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-10 text-center text-gray-400">
                            해당 연도에는 결제 내역이 없습니다.
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-4 text-sm">카테고리별 비중</h3>
                    <div className="space-y-3">
                        {Object.entries(categoryTotals).map(([cat, total]) => (
                            <div key={cat} className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">{cat}</span>
                                    <span className="font-semibold text-gray-800">{(total as number).toLocaleString()}원</span>
                            </div>
                            ))}
                    </div>

                    </div>
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl shadow-lg text-white">
                    <h3 className="font-bold opacity-90 mb-4 text-sm"> 지출 예측 리포트</h3>
                    <p className="text-xs opacity-80 mb-1">다음 달 예상되는 고정 지출액</p>
                    <p className="text-2xl font-black">{nextMonthTotal.toLocaleString()}원</p>
                    <div className="mt-4 p-2 bg-white/20 rounded-xl text-[11px">
                        이번 달 보다 효율적인 소비를 위해 구독을 관리해 보세요!
                    </div>
                </div>
                </div>
            </div>

    );
}