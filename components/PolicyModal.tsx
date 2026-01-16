
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Info } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  const bmSections = [
    {
      id: "01",
      title: "과금의 기준",
      content: "트라나는 고위험·고금액 개인 간 거래에서 발생하는 분쟁 문제를 해결하기 위해 신원 인증부터 증거 확보까지 하나의 표준 흐름으로 제공합니다. 이에 따라 거래 금액이 아닌 '계약서 1건'을 기준으로 신뢰 인프라 사용료를 과금합니다."
    },
    {
      id: "02",
      title: "기본 과금 주체",
      content: "계약서 1건당 과금의 기본 주체는 구매자입니다. 보호를 요청하는 구매자가 안전 장치의 직접적인 수혜자가 되며, 요청한 주체가 비용을 부담하는 구조를 통해 과금의 명확성을 확보합니다."
    },
    {
      id: "03",
      title: "공정한 과금 분기",
      content: "판매자가 보증 옵션을 선택하지 않아 신뢰 수단이 제공되지 않는 최소 신뢰 거래의 경우에는 계약서 비용을 판매자가 부담하도록 설계함으로써 책임을 합리적으로 분산합니다."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh] scrollbar-hide"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-neutral-500 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              {/* Header */}
              <div className="inline-block mb-8">
                <h3 className="text-3xl font-bold tracking-tighter text-white">
                  Trana BM
                </h3>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="h-1 bg-emerald-500 rounded-full mt-1.5" 
                />
              </div>

              {/* Core BM Logic Sections */}
              <div className="space-y-0 mb-8">
                {bmSections.map((section, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex gap-4 py-5 border-b border-white/5 last:border-0">
                      <span className="text-lg font-black text-emerald-500 shrink-0">
                        {section.id}
                      </span>
                      <div>
                        <h4 className="text-white font-bold text-base mb-1.5">{section.title}</h4>
                        <p className="text-neutral-400 text-[13px] leading-relaxed font-medium">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Pricing Structure Visual */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 mb-6">
                <h4 className="text-emerald-400 font-bold text-[12px] mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  신뢰 기반 과금 구조
                </h4>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <p className="text-[9px] text-neutral-500 uppercase font-bold mb-1">보증 없음</p>
                    <p className="text-white text-[11px] font-bold mb-1">최소 신뢰</p>
                    <p className="text-emerald-500 text-[9px] font-black italic">비용: 판매자 부담</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <p className="text-[9px] text-neutral-500 uppercase font-bold mb-1">보증 선택</p>
                    <p className="text-white text-[11px] font-bold mb-1">추가 신뢰</p>
                    <p className="text-emerald-500 text-[9px] font-black italic">비용: 구매자 부담</p>
                  </div>
                </div>

                <div className="relative h-20 flex items-center justify-center mb-4">
                  <div className="absolute left-[20%] w-16 h-16 rounded-full bg-white border border-white/20 flex items-center justify-center text-[10px] text-black font-bold">판매자</div>
                  <div className="absolute right-[20%] w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-[10px] text-white font-bold">구매자</div>
                  <div className="z-10 bg-neutral-800/90 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-xl">보증</div>
                </div>

                <p className="text-center text-[10px] text-emerald-400/80 font-bold">
                  "신뢰 제공자가 장기적으로 더 낮은 비용을 갖습니다"
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl mb-8">
                <Info className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-neutral-500 leading-normal font-medium">
                  누적된 신뢰 점수는 계정 단위로 관리되어, 장기적으로 거래 비용을 낮추는 혜택을 제공합니다.
                </p>
              </div>

              <button 
                onClick={onClose}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all text-sm shadow-md"
              >
                닫기
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
