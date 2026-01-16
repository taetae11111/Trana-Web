
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const navItems = [
    { label: 'Problem', href: '#problems' },
    { label: 'Vision', href: '#vision' },
    { label: 'Function', href: '#function' },
    { label: 'Solution', href: '#solution' },
    { label: 'Review', href: '#review' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 py-2 rounded-full text-neutral-400 hover:text-white transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
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
