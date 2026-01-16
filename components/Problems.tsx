
import React from 'react';
import { motion } from 'framer-motion';

export const Problems: React.FC = () => {
  // 실제 수치에 비례한 높이 설정 (500억 기준)
  const data = [
    { year: "2023", value: "334", height: "66.8%" },
    { year: "2024", value: "420", height: "84%" },
    { year: "2025", value: "500", height: "100%" }
  ];

  return (
    <section id="problems" className="py-32 min-h-[90vh] flex items-center bg-neutral-950 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            >
              기존 시장의 문제점
            </motion.h2>
            <div className="space-y-6">
              {[
                "사기꾼들의 놀이터가 된 중고거래 플랫폼",
                "사이버 사기 피해 3조, 경찰 검거율 하락",
                "개인은 계약을 쓰기 어렵고, 기존 계약은 기업용",
                "피해 발생 후 보상은 '속수무책'"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-neutral-300 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* 이미지 섹션을 반영한 그래프 카드 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-20 text-center text-white">급증하는 연간 사기 피해액</h3>
            
            <div className="flex items-end justify-center h-72 gap-6 md:gap-12 px-4">
              {data.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                  {/* 수치 텍스트 (바 위에 위치) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-lg font-bold text-white mb-4 z-10 whitespace-nowrap"
                  >
                    {item.value}억원
                  </motion.div>
                  
                  {/* 초록색 바 (더 밝고 선명한 에메랄드) */}
                  <div className="w-16 md:w-24 bg-white/5 rounded-2xl overflow-hidden relative flex items-end h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: item.height }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
                      className="w-full bg-gradient-to-t from-emerald-500 to-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.5)] relative rounded-t-2xl"
                    >
                      {/* 내부 광택 효과 */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                  
                  {/* 연도 텍스트 (바 아래 위치) */}
                  <div className="text-sm font-semibold text-neutral-600 mt-6 tracking-wider">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 카드 하단 은은한 빛 효과 */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-2/3 h-48 bg-emerald-500/10 blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
