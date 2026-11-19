import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, HeartHandshake, UtensilsCrossed, Sparkles, Layers } from 'lucide-react';
import { PageProps } from '../types';

export const PageHero: React.FC<PageProps> = ({ onNext }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-8 sm:py-16 max-w-3xl mx-auto min-h-[calc(100dvh-4rem)]">
      {/* Ambient Glow behind Hero */}
      <div className="absolute top-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 apple-intelligence-glow pointer-events-none -z-10" />

      {/* Visual Center: Floating Glass Developer Emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-6 sm:mb-8"
      >
        {/* Floating motion wrapper */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle Outer Glow Rings */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#0A84FF]/30 via-purple-500/20 to-amber-300/20 blur-xl scale-110" />

          {/* App Store / Developer Icon Container */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] sm:rounded-[34px] p-[1.5px] bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-2xl">
            <div className="w-full h-full rounded-[26px] sm:rounded-[32px] bg-gradient-to-b from-[#1C1C1E] to-[#0A0A0C] flex flex-col items-center justify-center p-3 sm:p-4 relative overflow-hidden backdrop-blur-xl border border-white/[0.08]">
              {/* Internal Glass Reflection Line */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none" />

              {/* Developer Icon */}
              <div className="relative flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#0A84FF] to-[#5AC8FA] flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-bounce" />
                </div>
              </div>

              {/* ESports Analytics */}
              <div className="mt-2.5 flex items-center justify-center text-center">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
                  ESports Analytics
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption below emblem */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-xs sm:text-sm font-medium text-[#86868B] tracking-tight"
        >
          От Калифорнии до App Store — один шаг
        </motion.p>
      </motion.div>

      {/* Main H1 Title */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F7] mb-4 sm:mb-6 leading-[1.08]"
      >
        Миша.{' '}
        <span className="bg-gradient-to-r from-[#0A84FF] via-[#85BFFF] to-[#C7D2FE] bg-clip-text text-transparent">
          Историческое
        </span>{' '}
        решение.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base sm:text-lg text-[#86868B] leading-relaxed max-w-xl mb-8 sm:mb-10"
      >
        Ты буквально живёшь в одном штате с Тимом Куком. Пришло время использовать эту суперсилу и вытащить наш код из симулятора Xcode в Тамбове. Готов узнать{' '}
        <span className="text-[#F5F5F7] font-semibold underline decoration-[#0A84FF] decoration-2 underline-offset-4">
          шовнем
        </span>
        ?
      </motion.p>

      {/* Trust Strip (3 Micro-Chips) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-md mb-8 sm:mb-12"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 sm:py-2 sm:px-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium text-[#E5E5EA]">
            Риски: <strong className="text-emerald-400">0%</strong>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 sm:py-2 sm:px-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <HeartHandshake className="w-4 h-4 text-[#0A84FF] shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium text-[#E5E5EA]">
            Респект: <strong className="text-[#0A84FF]">∞</strong>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2.5 sm:py-2 sm:px-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <UtensilsCrossed className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-[11px] sm:text-xs font-medium text-[#E5E5EA]">
            Кэшбэк: <strong className="text-amber-400">ужин</strong>
          </span>
        </div>
      </motion.div>

      {/* Main CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full max-w-xs"
      >
        <button
          onClick={onNext}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0A84FF] to-[#0071E3] hover:from-[#0077ED] hover:to-[#0066CC] active:scale-[0.97] text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
        >
          <span>Шовнем? Открыть оффер</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
};
