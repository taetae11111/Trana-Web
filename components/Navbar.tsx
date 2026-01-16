
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { label: 'Problem', href: '#problems' },
    { label: 'Vision', href: '#vision' },
    { label: 'Function', href: '#function' },
    { label: 'Solution', href: '#solution' },
    { label: 'Review', href: '#review' },
  ];

  useEffect(() => {
    const sectionIds = ['hero', 'problems', 'vision', 'function', 'solution', 'review'];
    
    /**
     * rootMargin 설정:
     * 상단 -40%, 하단 -40%로 설정하여 화면의 중앙 20% 영역에 
     * 섹션이 들어올 때만 활성 상태로 전환합니다. 
     * 이는 섹션이 바뀔 때 'Vision'이 미리 감지되는 것을 방지합니다.
     */
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 최상단 근처(Hero 영역)일 때는 강제로 hero 유지
          if (window.scrollY < 150 && entry.target.id === 'hero') {
            setActiveSection('hero');
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      // 스크롤이 거의 맨 위일 때는 무조건 Hero 활성화
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // 1. UI 상태 즉시 업데이트
      setActiveSection(targetId);

      // 2. 부드러운 스크롤 이동
      // 헤더 높이를 고려한 오프셋
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-8 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-xl font-bold tracking-tighter flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-inner" />
          <span className="text-2xl font-bold tracking-tight">Trana</span>
        </a>
        
        <div className="hidden md:flex items-center gap-2 text-sm font-semibold">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300 relative group",
                  isActive ? "text-emerald-400 font-bold" : "text-neutral-400 hover:text-neutral-200"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center">
          <Button 
            className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 transition-all duration-300 shadow-lg shadow-emerald-500/25 border-none h-11"
            onClick={onOpenModal}
          >
            지금 시작하기
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
