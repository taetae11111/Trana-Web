
import React from 'react';
import { motion } from 'framer-motion';

const insightReviews = [
  {
    name: "김민재",
    role: "중고거래 분쟁 경험자",
    text: "예전에 분쟁처리가 제대로되지 않아 불편함을 겪었는데 계약서에 정확하게 기입되어 있으니깐 마음이 편하네요!",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    name: "이소연",
    role: "고가 거래자",
    text: "300만원 이상의 고가 상품 거래가 불안했는데, 신원 인증이 확실한 판매자와 거래하니 너무 안심돼요.",
    image: "https://picsum.photos/100/100?random=12"
  },
  {
    name: "박준영",
    role: "사기피해 유경험자",
    text: "더치트 없는 사기꾼도 많은데 거래 전 계약서를 쓰니 사기 예방에 정말 큰 도움이 됩니다.",
    image: "https://picsum.photos/100/100?random=13"
  },
  {
    name: "최수아",
    role: "명품 리셀러",
    text: "전에는 진품 확인 질문이 너무 많았는데 제가 직접 보증을 해주니 신뢰도가 확 올라갔어요.",
    image: "https://picsum.photos/100/100?random=14"
  }
];

const doubledReviews = [...insightReviews, ...insightReviews];

export const Testimonials: React.FC = () => {
  return (
    <section id="review" className="py-32 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">사용자 리뷰</h2>
          <p className="text-neutral-500 text-base">Trana가 만들어가는 신뢰 거래 인프라의 변화입니다.</p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-5 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {doubledReviews.map((r, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[380px] p-8 rounded-2xl bg-neutral-900/80 border border-white/5 flex flex-col justify-between shrink-0 whitespace-normal"
            >
              <p className="text-lg text-neutral-300 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.image} alt={r.name} className="w-10 h-10 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-white text-sm">{r.name}</h4>
                  <p className="text-[10px] text-neutral-600">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
