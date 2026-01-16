
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-6 text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg shadow-inner" />
              Trana
            </div>
            <p className="text-neutral-500 max-w-sm mb-8 text-lg leading-relaxed">
              신뢰를 기술로 확장하여 누구도 거래로 상처받지 않는 세상을 만듭니다. 고액·고위험 C2C 거래의 새로운 표준.
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">App</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold">Web</span>
               </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Roadmap</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Pay 시스템 연동</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">법률 AI 엔진</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">중고 경매 시스템</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">글로벌 확장 비전</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">시장 기회 분석</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">차별화 구조 (C2C)</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">인재 채용</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">고객 지원</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-neutral-600">
          <p>© 2025 Trana Digital Inc. All rights reserved. 믿음이 필요한 순간, Trana.</p>
          <div className="flex gap-8 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">사업자정보</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
