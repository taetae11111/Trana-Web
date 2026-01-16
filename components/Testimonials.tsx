
import React from 'react';
import { motion } from 'framer-motion';

const insightReviews = [
  {
    name: "김민재",
    role: "중고거래 분쟁 경험자",
    text: "예전에 분쟁처리가 제대로되지 않아 불편함을 겪었는데 계약서에 정확하게 기입되어 있으니깐 마음이 편하네요 앞으로도 많이 이용할게요!",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    name: "이소연",
    role: "300만원 맥북프로 거래자",
    text: "300만원 이상의 고가의 상품을 거래해서 불안했는데, 신분증 인증에 얼굴인증까지 한 판매자와 거래하니깐 너무 믿음이가네요 ㅎㅎ",
    image: "https://picsum.photos/100/100?random=12"
  },
  {
    name: "박준영",
    role: "150만원 명품 가방 사기피해자",
    text: "요즘에 더치트에 등록이 안된 사기꾼들도 많아서 예방이 어려운데 거래 전에 계약서를 미리 작성하니깐 더욱더 예방에 도움이되는 것 같아요!",
    image: "https://picsum.photos/100/100?random=13"
  },
  {
    name: "최수아",
    role: "명품 리셀러",
    text: "진짜 감사해요ㅠ 전에는 구매자분들이 진품이 맞냐를 거래 이후에도 많이 여쭤보셨는데, 제가 보증을 해주니깐 진품,가품 질문이 싹 없어졌어요 ㅎㅎ",
    image: "https://picsum.photos/100/100?random=14"
  },
  {
    name: "정훈기",
    role: "복학생",
    text: "첫 중고거래였는데 Trana 덕분에 신원 확실한 분과 안전하게 전자기기를 거래할 수 있어서 좋았네요!.",
    image: "https://picsum.photos/100/100?random=15"
  },
  {
    name: "강지민",
    role: "카메라 수집가",
    text: "저는 카메라를 많이 수집하면서 렌즈 불량이 너무 많았는데 Trana를 이용하면서 사기꾼들이 1차적으로 걸러지니깐 너무 도움이되네요 ㅎㅎ",
    image: "https://picsum.photos/100/100?random=16"
  },
  {
    name: "윤서진",
    role: "구제 빈티지샵 운영자",
    text: "구제 옷 특성상 짜잘짜잘한 하자가 많았는데 이젠 그런 하자들 없이 구제 옷들을 받을 수 있네요! 저 또한 판매를 하면서 명확하게 하자를 명시할 수 있어서 서로에게 득이 되네요!",
    image: "https://picsum.photos/100/100?random=17"
  },
  {
    name: "한승우",
    role: "화분 5만원 사기피해자",
    text: "아무리 소액이라도 Trana를 이용해서 상품에대한 계약서를 생성하니깐 정말 안심이되네요. 이런 앱 만들어주셔서 정말 감사합니다!!",
    image: "https://picsum.photos/100/100?random=18"
  }
];

// 무한 루프를 위해 데이터를 복제합니다.
const doubledReviews = [...insightReviews, ...insightReviews];

export const Testimonials: React.FC = () => {
  return (
    <section id="review" className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Trana와 함께하는 사용자들</h2>
          <p className="text-neutral-400 text-lg">상호 이익 구조의 거래 인프라, Trana가 만들어가는 변화입니다.</p>
        </div>
      </div>

      {/* 무한 흐르는 리뷰 컨테이너 */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: [0, -1920], // 데이터 길이에 따라 조정 필요 (아이템 개수 * 너비)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // 속도 조절 (값이 클수록 천천히 움직임)
              ease: "linear",
            },
          }}
        >
          {doubledReviews.map((r, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[420px] p-10 rounded-[2.5rem] bg-neutral-900/80 border border-white/5 flex flex-col justify-between hover:border-emerald-500/50 transition-colors shrink-0 whitespace-normal"
            >
              <p className="text-xl text-neutral-300 italic mb-10 leading-relaxed font-medium">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={r.image} 
                  alt={r.name} 
                  className="w-12 h-12 rounded-full border border-white/10" 
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">{r.name}</h4>
                  <p className="text-sm text-neutral-500 font-medium">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 좌우 그라데이션 페이드 효과 (자연스럽게 사라지도록) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
