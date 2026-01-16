
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ScanFace, FileEdit, ShieldCheck, PenTool, Database } from 'lucide-react';

const coreFeatures = [
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "신분증 기반 본인 인증",
    description: "OCR로 사용자의 실명 정보를 검증해 거짓 계정을 차단합니다."
  },
  {
    icon: <ScanFace className="w-5 h-5" />,
    title: "얼굴 라이브니스 인증",
    description: "실시간 얼굴 움직임을 검증해 도용 및 대리 사기를 방지합니다."
  },
  {
    icon: <FileEdit className="w-5 h-5" />,
    title: "AI 자동 계약 기입",
    description: "상품 링크나 핵심 정보만 입력하면 계약이 자동 완성됩니다."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "판매자 보증 선택",
    description: "판매자가 보증 기간과 범위를 직접 설정하여 책임 범위를 명확히 합니다."
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "전자서명 및 계약 확정",
    description: "대면·비대면 관계없이 즉시 서명하고 합의를 확정합니다."
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "계약 및 증빙 저장",
    description: "계약서, 합의 내용, 인증 기록이 자동 구조화되어 보관됩니다."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="function" className="py-32 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-500 font-medium tracking-widest uppercase text-[10px]"
          >
            Core Functions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
          >
            Trana의 핵심 기능 개요
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
