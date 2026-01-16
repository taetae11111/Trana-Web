
import React from 'react';
import { motion } from 'framer-motion';

export const Vision: React.FC = () => {
  const visions = [
    {
      id: "01",
      title: "누구도 사기피해로 다치지 않는 세상",
      desc: "사기가 개인의 실수처럼 여겨지는 구조를 끝냅니다. 시스템이 보호하는 세상을 만듭니다."
    },
    {
      id: "02",
      title: "신뢰를 기술로 확장하는 사회적 기반",
      desc: "사람의 감에 의존하던 거래를 기술로 보완합니다. 공평한 '보호의 기준'을 디지털로 구축합니다."
    },
    {
      id: "03",
      title: "안전한 거래가 기본값이 되는 미래",
      desc: "안전이 선택이 아닌 기본값으로 작동하는 구조를 만듭니다. 안심할 수 있는 거래 일상을 만들어갑니다."
    }
  ];

  return (
    <section id="vision" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight"
            >
              Trana는<br />무엇을 만드는가?
            </motion.h2>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            {visions.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/10 pb-12 last:border-0"
              >
                <div className="flex gap-8">
                  <span className="text-2xl font-bold text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity">
                    {v.id}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{v.title}</h3>
                    <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
