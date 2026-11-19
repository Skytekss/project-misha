import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, PartyPopper, RotateCcw, Cpu, Award } from 'lucide-react';
import { PageProps } from '../types';

export const PageCertificate: React.FC<PageProps> = ({ onGoToStep }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Trigger double confetti burst
  const triggerConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#0A84FF', '#FFFFFF', '#E5E5EA', '#FFD700', '#A855F7'],
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.5),
      spread: 60,
      angle: 60,
      origin: { x: 0, y: 0.75 },
    });

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.5),
      spread: 60,
      angle: 120,
      origin: { x: 1, y: 0.75 },
    });
  }, []);

  // Fire on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerConfetti();
    }, 250);
    return () => clearTimeout(timer);
  }, [triggerConfetti]);

  // Mouse tilt physics for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentDateFormatted = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const telegramUrl =
    'https://t.me/Skytekss?text=%D0%9B%D0%B0%D0%B4%D0%BD%D0%BE%2C%20%D1%81%D0%B0%D0%B9%D1%82%20%D1%80%D0%B0%D0%B7%D1%8A%D1%91%D0%B1!%20%D0%A8%D0%BE%D0%B2%D0%BD%D0%B5%D0%BC%3F%20%D0%9F%D0%BE%D0%B3%D0%BD%D0%B0%D0%BB%D0%B8%20%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20Apple%20Developer%20Account%20%F0%9F%9A%80';

  return (
    <div className="relative max-w-2xl mx-auto px-4 py-6 sm:py-10 flex flex-col items-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -translate-y-1/2 w-80 sm:w-[500px] h-80 apple-intelligence-glow pointer-events-none -z-10" />

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-emerald-400 mb-6 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>ОФФЕР ПРИНЯТ • СЕРТИФИКАТ СГЕНЕРИРОВАН</span>
      </motion.div>

      {/* 3D Apple Card / Black Titanium Certificate */}
      <div className="w-full max-w-md perspective-1000 mb-8 sm:mb-10">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[1.586/1] rounded-[24px] sm:rounded-[28px] p-[1.5px] bg-gradient-to-tr from-white/30 via-white/10 to-transparent shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_40px_rgba(10,132,255,0.25)] select-none cursor-grab active:cursor-grabbing"
        >
          {/* Card inner body - Black Titanium finish */}
          <div className="w-full h-full rounded-[22px] sm:rounded-[26px] bg-gradient-to-br from-[#1A1A1E] via-[#0E0E11] to-[#151518] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-white/[0.1] backdrop-blur-2xl">
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent w-[200%] -translate-x-full animate-card-shimmer pointer-events-none" />

            {/* Top Bar: Certificate title and metallic chip */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-[#E5E5EA]">
                  <Cpu className="w-4 h-4 text-amber-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-[#86868B] leading-none">
                    Apple Ecosystem
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#F5F5F7] tracking-wider uppercase">
                    Angel Investor
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[9px] sm:text-[10px] font-mono text-[#E5E5EA]">
                <Award className="w-3 h-3 text-[#0A84FF]" />
                <span>TITANIUM</span>
              </div>
            </div>

            {/* Center Area: MISHA & Titles */}
            <div className="my-auto py-2 z-10 text-center sm:text-left">
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#F5F5F7] via-white to-[#A1A1A6] bg-clip-text text-transparent drop-shadow-sm">
                МИША
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#0A84FF] mt-1 tracking-tight">
                Почётный сооснователь Apple Developer Account
              </div>
              {/* Скрин 5: «ESports Analytics. Теперь — официально в App Store.» */}
              <p className="text-[11px] sm:text-xs text-[#86868B] italic mt-1.5">
                «ESports Analytics. Теперь — официально в App Store.»
              </p>
            </div>

            {/* Bottom Bar: Valid At, Serial ID, Date (Тамбов) */}
            <div className="pt-3 border-t border-white/[0.08] flex items-end justify-between text-[9px] sm:text-[11px] font-mono text-[#86868B] z-10">
              <div className="space-y-0.5 text-left">
                <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-white/40">VALID AT</div>
                <div className="font-medium text-[#E5E5EA]">Bar Rush (Тамбов) & LA (USA)</div>
              </div>

              <div className="space-y-0.5 text-right">
                <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-white/40">SERIAL / DATE</div>
                <div className="font-medium text-[#E5E5EA]">
                  MISHA-2026 • {currentDateFormatted}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons Block */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3">
        {/* Main CTA: Telegram */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0A84FF] to-[#0071E3] hover:from-[#0077ED] hover:to-[#0066CC] active:scale-[0.97] text-white font-semibold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/30 transition-all cursor-pointer"
        >
          <Send className="w-5 h-5" />
          <span>Написать: Погнали регать!</span>
        </a>

        {/* Secondary: Fire More Confetti */}
        <button
          type="button"
          onClick={triggerConfetti}
          className="w-full h-12 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-[0.97] border border-white/[0.1] text-xs sm:text-sm font-medium text-[#F5F5F7] flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <PartyPopper className="w-4 h-4 text-amber-300" />
          <span>Запустить ещё конфетти 🎉</span>
        </button>

        {/* Restart Presentation */}
        {onGoToStep && (
          <button
            type="button"
            onClick={() => onGoToStep(1)}
            className="mt-3 text-xs text-[#86868B] hover:text-[#F5F5F7] flex items-center gap-1.5 transition-colors py-2 cursor-pointer active:scale-[0.97]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Пройти презентацию заново</span>
          </button>
        )}
      </div>
    </div>
  );
};
