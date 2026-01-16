
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-8 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <a href="#hero" className="text-xl font-bold tracking-tighter flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-xl shadow-inner" />
          <span className="text-2xl font-bold tracking-tight">Trana</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-neutral-400">
          <a href="#problems" className="hover:text-white transition-all duration-300">Problem</a>
          <a href="#vision" className="hover:text-white transition-all duration-300">Vision</a>
          <a href="#function" className="hover:text-white transition-all duration-300">Function</a>
          <a href="#solution" className="hover:text-white transition-all duration-300">Solution</a>
          <a href="#review" className="hover:text-white transition-all duration-300">Review</a>
        </div>

        <div className="flex items-center">
          <Button 
            className="rounded-full bg-white text-black font-bold px-8 hover:bg-neutral-200 transition-all duration-300 shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            지금 시작하기
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
