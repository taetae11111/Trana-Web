
import React from 'react';
import { motion } from 'framer-motion';

export const Problems: React.FC = () => {
  const data = [
    { year: "2023", value: "334", height: "66.8%" },
    { year: "2024", value: "420", height: "84%" },
    { year: "2025", value: "500", height: "100%" }
  ];

  return (
    <section 
      id="problems" 
      className="py-32 flex items-center bg-neutral-950 border-y border-white/5"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-12"
            >
              기존 시장의 문제점
            </motion.h2>
            <div className="space-y-4">
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
                  className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span className="text-neutral-300 font-medium text-base">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0c0c0c] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-16 text-center text-white">급증하는 연간 사기 피해액</h3>
            
            <div className="flex items-end justify-center h-64 gap-6 md:gap-10 px-4">
              {data.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-sm font-black text-white mb-4 z-10 tracking-tighter"
                  >
                    {item.value}억원
                  </motion.div>
                  
                  <div className="w-12 md:w-20 bg-white/5 rounded-2xl overflow-hidden relative flex items-end h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: item.height }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 }}
                      className="w-full bg-gradient-to-t from-emerald-600 via-emerald-400 to-emerald-300 relative rounded-t-2xl"
                    />
                  </div>
                  
                  <div className="text-xs font-bold text-neutral-500 mt-6 tracking-widest">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
