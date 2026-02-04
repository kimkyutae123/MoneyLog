
'use client';
import { useState, useEffect, useRef } from 'react';
import {supabase} from "@/lib/supabase";
import { User } from '@supabase/supabase-js';
interface Subscription {
  id: number;
  name: string;
  price: number;
  category: string;
  billing_date: string;
  cycle: number;
}

export default function SubscriptionPage() {


    const [mySubscriptions, setMySubscriptions] = useState<Subscription[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const totalExpense = mySubscriptions.reduce((acc, sub) => acc + sub.price, 0);
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newCategory, setNewCategory] = useState('OTT');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]); // 기본값 오늘
    const [selectedCycle, setSelectedCycle] = useState('30'); // 기본값 1개월(30일)
    const isLoaded = useRef(false);
    const [user, setUser] = useState<any>(null);


    const getNextBillingDate = (startDateStr: string, cycleDays: number) => {
        const date = new Date(startDateStr);
        date.setDate(date.getDate() + cycleDays);
        return date.toISOString().split('T')[0];
    };
    const getDaysUntil = (startDateStr: string, cycleDays: number) => {
        const nextDate = new Date(startDateStr);
        nextDate.setDate(nextDate.getDate() + cycleDays);

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        nextDate.setHours(0, 0, 0, 0);

        const diffTime = nextDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));

        return diffDays;
    }

    useEffect(() => {
        const initAuth = async () => {
            const {data: {session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);

            supabase.auth.onAuthStateChange((_event, session) => {
                setUser(session?.user ?? null);

            });
        };
        const loadData = async () => {
            const {data, error} = await supabase
                .from('subscriptions')
                .select('*')
                .order('id', { ascending: false});

            if (error) console.error('데이터 로드 실패:', error.message);
            else if (data) setMySubscriptions(data);

            setIsMounted(true);
            isLoaded.current = true;
        };

        initAuth();
        loadData();


    }, []);




    const handleLogOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };



    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();


        const numbericPrice = Number(newPrice.replace(/[^0-9]/g, ''));

        if (!newName || !newPrice) {
            alert('이름과 가격을 모두 입력해주세요!');
            return;
        }

        // Supabase DB에 저장
        const { data, error } = await supabase
            .from('subscriptions')
            .insert([
                {
                    name: newName,
                    price: numbericPrice,
                    category: newCategory,
                    billing_date: startDate,
                    cycle: Number(selectedCycle),
                },
            ])
            .select();

        if (error) {
            console.error('저장 실패:', error.message);
            alert('DB 저장에 실패했습니다.');
        } else if (data) {

            setMySubscriptions([...mySubscriptions, data[0]]);
            setNewName('');
            setNewPrice('');

        }
    };

    // 4. 구독 삭제 함수
    const handleDelete = async (id: number) => {
        if(!confirm('정말 삭제하시겠습니까 ?')) return;

        const {error} = await supabase
            .from('subscriptions')
            .delete()
            .eq('id', id);

        if(error) {
            console.error('삭제 실패:', error.message);
            alert('데이터를 삭제하는 중 오류가 발생했습니다.');
        } else {
            const updatedList = mySubscriptions.filter(sub => sub.id !== id);
            setMySubscriptions(updatedList);
        }
    };

    if (!isMounted) return null;

  return (
      <div className="pt-24 pb-10 px-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">나의 구독 관리</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                  <p className="text-sm font-medium text-gray-500 mb-1">월간 총 지출</p>
                  <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-blue-600">{totalExpense.toLocaleString()}</span>
                      <span className="text-sm font-medium text-gray-600">원</span>
                  </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-gray-500 mb-1">구독 중인 서비스</p>
                  <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-800">{mySubscriptions.length}</span>
                      <span className="text-sm font-medium text-gray-600">개</span>
                  </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-md text-white">
                  <p className="text-sm font-medium opacity-80 mb-1">절약 팁</p>
                  <p className="text-xs font-bold">통신사 혜택 결합 시 더 저렴해집니다! ✨</p>
              </div>
          </div>
          <form onSubmit={handleAdd} className="mb-8 p-6 bg-blue-50 rounded-xl flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                  <label className="block test-sm font-medium text-gray-700 mb-1">서비스 이름</label>
                  <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="예 : 유튜브 프리미엄"
                      className="w-full p-2 border rounded-md focus:ring-2  focus:ring-blue-500 outline-none text-sm"
                      />
              </div>
              <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 mb-1"> 가격(원)</label>
                  <input
                      type="text"
                      value={newPrice}
                      onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '');
                          setNewPrice(value)
                      }}
                      placeholder="0"
                      className="w-full p-2 border rounded-md focus:ring-2  focus:ring-blue-500 outline-none text-sm"
                      />
              </div>

              <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 mb-1">카테고리 </label>
                  <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full p-2 border rounded-md bg-white outline-none"
                  >
                      <option value="OTT">OTT</option>
                      <option value="Music">음악</option>
                      <option value="Game">게임</option>
                      <option value="Work">업무</option>
                  </select>

              </div>
              <div className="w-32">
                  <label className="block text-sm font-bold text-gray-600 mb-1">구독 시작일</label>
                  <input
                      type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-2  focus:ring-blue-500 outline-none text-sm"
                  />
              </div>
              <div className="w-32">
                  <label className="block text-xs font-bold text-gray-600 mb-1">결제 주기</label>
                  <select
                      value={selectedCycle} onChange={(e) => setSelectedCycle(e.target.value)}
                      className="w-full p-2 border rounded-md bg-white outline-none text-sm"
                  >
                      <option value="30">1개월 (30일)</option>
                      <option value="90">3개월 (90일)</option>
                      <option value="180">6개월 (180일)</option>
                      <option value="365">12개월 (365일)</option>
                  </select>
              </div>

              <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-bold"
                  >
                  추가하기
              </button>

          </form>

        <div className="overflow-x-auto bg-white rounded-lg shadow border">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b">
                <tr>
                    <th className="p-4 font-semibold text-gray-600 text-sm">서비스 정보</th>
                    <th className="p-4 font-semibold text-gray-600 text-sm text-center">등록일</th>
                    <th className="p-4 font-semibold text-gray-600 text-sm text-center">정기 결제일</th>
                    <th className="p-4 font-semibold text-gray-600 text-sm text-center">남은 기한</th>
                    <th className="p-4 font-semibold text-gray-600 text-sm text-center">금액</th>
                    <th className="p-4 font-semibold text-gray-600 text-sm text-center">관리</th>
                </tr>
                </thead>
                <tbody>
                {mySubscriptions.map((sub) => (
                    <tr key={sub.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition">
                        <td className="p-4">
                            <div className="font-bold text-gray-800">{sub.name}</div>
                            <div className="text-xs text-gray-400">{sub.category}</div>
                        </td>

                        <td className="p-4 text-sm text-gray-500 text-center">
                            {sub.billing_date}
                        </td>

                        <td className="p-4 text-center">
                            <div className="text-sm font-bold text-blue-600">
                                {getNextBillingDate(sub.billing_date, sub.cycle)}
                            </div>
                            <div className="text-[10px] text-gray-400">
                                ({sub.cycle === 365 ? '1년' : `${sub.cycle / 30}개월`} 주기)
                            </div>

                        </td>
                        <td className="p-4 text-center">
                            {(() => {
                                const dDay = getDaysUntil(sub.billing_date, sub.cycle);
                                if(dDay === 0) return <span className="text-red-600 font-bold animate-pluse"> 오늘 결제!</span>
                                if(dDay < 0 ) return <span className="text-gray-400">만료</span>;

                                return(
                                    <span className={`font-bold ${dDay <= 3 ? 'text-grange-500' : 'text-green-600'}`}>
                                        D-{dDay}
                                    </span>
                                );
                            })()}

                        </td>
                        <td className="p-4 text-center font-semibold text-gray-700">
                            {Number(sub.price).toLocaleString()}원
                        </td>
                        <td className="p-4 text-center">
                            <button
                                onClick={() => handleDelete(sub.id)}
                                className="text-red-300 hover:text-red-500 text-sm transition"
                            >
                                삭제
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
          {mySubscriptions.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                  구독중인 서비스가 없습니다.
              </div>
          )}
      </div>

  );
}