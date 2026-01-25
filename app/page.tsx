
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar.tsx';
import { BackgroundPaths } from '../components/ui/background-paths.tsx';
import { Features } from '../components/Features.tsx';
import { Problems } from '../components/Problems.tsx';
import { Vision } from '../components/Vision.tsx';
import { Testimonials } from '../components/Testimonials.tsx';
import { Footer } from '../components/Footer.tsx';
import { LeadModal } from '../components/LeadModal.tsx';
import { PolicyModal } from '../components/PolicyModal.tsx';
import { useModals } from './providers.tsx';

export default function Home() {
  const { 
    isLeadModalOpen, 
    closeLeadModal, 
    openLeadModal, 
    isPolicyModalOpen, 
    closePolicyModal, 
    openPolicyModal 
  } = useModals();

  const solutions = [
    {
      id: "01",
      title: "C2C 전용 계약 템플릿",
      description: "개인 간 거래에서 발생하는 하자·반품 조건을 구조화해 누구나 바로 사용할 수 있는 표준 템플릿을 제공합니다."
    },
    {
      id: "02",
      title: "AI 기반 초간편 계약 생성",
      description: "링크 자동 파싱으로 최소 입력만으로 계약이 완성됩니다. 복잡한 문서 작성 없이 단 몇 초면 충분합니다."
    },
    {
      id: "03",
      title: "개인 인증 강화 생태계",
      description: "신분증 OCR과 얼굴 인증을 기반으로 사기 계정을 원천 차단하고 신뢰 가능한 환경을 구축합니다."
    },
    {
      id: "04",
      title: "조건 명확화로 분쟁 최소화",
      description: "거래 조건과 책임이 자동으로 정리되어 오해를 줄이고 분쟁 발생 가능성을 획기적으로 낮춥니다."
    }
  ];

  return (
    <>
      <Navbar onOpenModal={openLeadModal} />
      
      <main>
        <section id="hero">
          <BackgroundPaths 
            title={"믿음이 필요한 순간\nTrana"} 
            subtitle={"법적 효력으로 막는 중고사기, 간편 계약으로 사기를 예방하세요"}
            onOpenModal={openLeadModal}
          />
        </section>

        <Problems />
        <Vision />
        <Features />
        
        <section id="solution" className="py-32 bg-neutral-950 text-white border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center text-white">Trana의 해결 방식</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 md:p-10 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 group"
                  >
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
                        <span className="opacity-50">{item.id}.</span>
                        {item.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        
        <section id="contact" className="py-32 relative overflow-hidden bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">안전한 거래가 기본값이 되는 미래</h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              지금 Trana를 통해 누구도 거래로 상처받지 않는 세상을 함께 만드세요.<br />
              당신의 신뢰 선택이 다음 거래의 이익이 됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openLeadModal}
                className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20"
              >
                지금 무료로 시작하기
              </button>
              <button 
                onClick={openPolicyModal}
                className="px-10 py-5 bg-neutral-800 border border-white/10 text-white font-bold rounded-2xl hover:bg-neutral-700 transition-all"
              >
                BM 정책 안내
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <LeadModal isOpen={isLeadModalOpen} onClose={closeLeadModal} />
      <PolicyModal isOpen={isPolicyModalOpen} onClose={closePolicyModal} />
    </>
  );
}
