
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 운영 시에는 여기서 API 연동을 진행합니다.
    alert("상담 신청이 완료되었습니다. 곧 연락드리겠습니다!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl pointer-events-auto relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-500/10 blur-[60px] pointer-events-none" />

              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <h3 className="text-3xl font-bold tracking-tight mb-2 text-white">신청하기</h3>
                <p className="text-neutral-400 text-sm mb-8">안전한 중고거래의 시작, Trana가 도와드립니다.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 px-1">성함</label>
                    <input 
                      required
                      type="text" 
                      placeholder="홍길동"
                      className="w-full bg-neutral-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 px-1">연락처</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="010-0000-0000"
                      className="w-full bg-neutral-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 px-1">문의 내용</label>
                    <textarea 
                      placeholder="궁금하신 내용을 입력해주세요"
                      rows={3}
                      className="w-full bg-neutral-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-7 text-lg shadow-xl shadow-emerald-600/20 transition-all duration-300 mt-4"
                  >
                    제출하기
                  </Button>
                </form>

                <p className="mt-6 text-center text-[10px] text-neutral-600">
                  개인정보 수집 및 이용에 동의하시는 경우에만 제출해 주세요.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
