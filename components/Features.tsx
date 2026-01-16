
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ScanFace, FileEdit, ShieldCheck, PenTool, Database } from 'lucide-react';

const coreFeatures = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "신분증 기반 본인 인증",
    description: "OCR로 사용자의 실명 정보를 검증해 거짓 계정을 차단합니다. 거래 시작 단계부터 강력한 신뢰도를 확보합니다."
  },
  {
    icon: <ScanFace className="w-6 h-6" />,
    title: "얼굴 라이브니스 인증",
    description: "실시간 얼굴 움직임을 검증해 도용 및 대리 사기를 방지합니다. 신분증 인증과 결합하여 완벽한 식별 체계를 구축합니다."
  },
  {
    icon: <FileEdit className="w-6 h-6" />,
    title: "AI 자동 계약 기입",
    description: "상품 링크나 핵심 정보만 입력하면 계약이 자동 완성됩니다. 복잡한 작성 과정 없이 누구나 쉽게 계약을 만듭니다."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "판매자 보증 선택",
    description: "판매자가 보증 기간과 범위를 직접 설정하여 책임 범위를 명확히 합니다. 구매자는 더 신뢰도 높은 거래를 선택할 수 있습니다."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "전자서명 및 계약 확정",
    description: "대면·비대면 관계없이 즉시 서명하고 합의를 확정합니다. 모든 기록은 자동 저장되어 분쟁 시 법적 근거로 활용됩니다."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "계약 및 증빙 저장",
    description: "계약서, 합의 내용, 인증 기록이 자동 구조화되어 보관됩니다. 필요할 때 빠르게 꺼낼 수 있어 사후 대응이 쉬워집니다."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="function" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-medium tracking-widest uppercase text-xs"
          >
            Core Functions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 tracking-tight"
          >
            Trana의 핵심 기능 개요
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 mt-6 text-lg"
          >
            기술로 신뢰를 증명하고, 안전한 거래를 기본값으로 만듭니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
