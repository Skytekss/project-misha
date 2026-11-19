import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { StepNumber } from '../types';

interface NavbarProps {
  currentStep: StepNumber;
  totalSteps?: number;
  onPrev: () => void;
  onGoToStep?: (step: StepNumber) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentStep,
  totalSteps = 5,
  onPrev,
}) => {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/70 border-b border-white/[0.08] transition-colors">
      <div className="max-w-4xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        {/* Left: Back Button or Spacer */}
        <div className="w-20 flex items-center">
          {currentStep > 1 ? (
            <motion.button
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onPrev}
              whileTap={{ scale: 0.92 }}
              className="group flex items-center gap-1 text-xs sm:text-sm font-medium text-[#86868B] hover:text-[#F5F5F7] transition-colors py-2 pr-2 cursor-pointer"
              aria-label="Назад"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-[#0A84FF]" />
              <span>Назад</span>
            </motion.button>
          ) : (
            <div className="flex items-center gap-1.5 opacity-60">
              <Sparkles className="w-3.5 h-3.5 text-[#0A84FF]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868B]">Keynote</span>
            </div>
          )}
        </div>

        {/* Center: ESports Analytics with pulsating LA ↔ TMB badge */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] shadow-inner">
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-[#F5F5F7]">
              ESports Analytics
            </span>
            <div className="h-3 w-[1px] bg-white/[0.15]" />
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wide text-emerald-400 font-medium">
                LA ↔ TMB
              </span>
            </div>
          </div>
        </div>

        {/* Right: Step Indicator */}
        <div className="w-20 flex justify-end items-center">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-[#86868B]">
            <span className="text-[#F5F5F7] font-semibold">{currentStep}</span>
            <span>/</span>
            <span>{totalSteps}</span>
          </div>
        </div>
      </div>

      {/* Thin Animated Gradient Progress Bar */}
      <div className="w-full h-[2px] bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0A84FF] via-purple-500 to-amber-400"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </header>
  );
};
