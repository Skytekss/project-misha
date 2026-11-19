import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { PageProps } from '../types';

type TimelineTab = 'helped' | 'delayed';

export const PageSimulator: React.FC<PageProps> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState<TimelineTab>('helped');
  const [evadeAttempt, setEvadeAttempt] = useState<number>(0);
  const [evadeOffset, setEvadeOffset] = useState<{ x: number; rotate: number }>({ x: 0, rotate: 0 });

  const evadeTexts = [
    'Подумаю потом...',
    'Точно потом? А как же Bar Rush?',
    'Тим Кук уже смотрит из Купертино 👀',
    'Не ломай мультивселенную!',
    'Ну шовнем? Жми на синюю кнопку!',
    'Всё, эта кнопка сломана :)',
  ];

  const currentEvadeText = evadeTexts[Math.min(evadeAttempt, evadeTexts.length - 1)];
  const isEvadeBroken = evadeAttempt >= 5;

  // Trigger ONLY on click
  const handleEvadeAction = () => {
    if (isEvadeBroken) return;
    const nextAttempt = evadeAttempt + 1;
    setEvadeAttempt(nextAttempt);

    // Random safe offsets within bounded container (-30px to +30px, -6 to +6 deg)
    const randomX = (Math.random() - 0.5) * 60;
    const randomRotate = (Math.random() - 0.5) * 12;
    setEvadeOffset({ x: randomX, rotate: randomRotate });
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Background ambient aura responding to current tab */}
      <div
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-80 sm:w-[500px] h-64 rounded-full blur-[70px] pointer-events-none transition-colors duration-700 -z-10 ${
          activeTab === 'helped'
            ? 'bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-cyan-500/10'
            : 'bg-gradient-to-r from-rose-600/15 via-amber-600/10 to-red-600/10'
        }`}
      />

      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-3">
          Эффект бабочки
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-md mx-auto">
          Посмотри, как одно действие в Лос-Анджелесе меняет таймлайн.
        </p>
      </div>

      {/* iOS Segmented Control - Pure CSS Hardware-Accelerated Sliding Indicator (no layoutId conflicts) */}
      <div className="w-full max-w-md p-1.5 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl flex items-center mb-8 relative select-none">
        {/* Sliding Pill Indicator */}
        <div
          className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-white/[0.12] shadow-inner border border-white/[0.15] transition-transform duration-300 ease-out pointer-events-none ${
            activeTab === 'delayed' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'
          }`}
        />

        <button
          type="button"
          onClick={() => setActiveTab('helped')}
          className={`relative z-10 flex-1 py-3 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
            activeTab === 'helped' ? 'text-white' : 'text-[#86868B] hover:text-[#F5F5F7]'
          }`}
        >
          <span>Миша помог 🚀</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('delayed')}
          className={`relative z-10 flex-1 py-3 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
            activeTab === 'delayed' ? 'text-white' : 'text-[#86868B] hover:text-[#F5F5F7]'
          }`}
        >
          <span>Миша отложил 😢</span>
        </button>
      </div>

      {/* Dynamic Results Card */}
      <div className="w-full max-w-lg mb-8">
        {activeTab === 'helped' ? (
          <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-emerald-500/30 backdrop-blur-2xl shadow-2xl shadow-emerald-500/10 relative overflow-hidden transition-all duration-300">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Оптимальный таймлайн (Калифорнийский триумф)</span>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center">
                <div className="text-[11px] text-[#86868B] mb-1">Статус Миши</div>
                <div className="text-sm font-bold text-emerald-400">Легенда Калифорнии</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center">
                <div className="text-[11px] text-[#86868B] mb-1">Bar Rush & LA</div>
                <div className="text-sm font-bold text-[#0A84FF]">Безлимит 🍸</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center">
                <div className="text-[11px] text-[#86868B] mb-1">Тим Кук</div>
                <div className="text-sm font-bold text-amber-300">Кивает с уважением</div>
              </div>
            </div>

            {/* Forecast text */}
            <div className="p-4 rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/20">
              <div className="flex items-start gap-2.5">
                <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#E5E5EA] leading-relaxed">
                  «Аккаунт одобрен. Код улетает в TestFlight и App Store. На вопрос друзей{' '}
                  <span className="text-emerald-300 font-semibold underline decoration-emerald-400/50 underline-offset-2">
                    „Шовнем?“
                  </span>{' '}
                  ты просто открываешь свой iPhone и показываешь наш релиз.»
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-rose-500/30 backdrop-blur-2xl shadow-2xl shadow-rose-500/10 relative overflow-hidden transition-all duration-300">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-5">
              <AlertTriangle className="w-4 h-4" />
              <span>Грустный таймлайн (Симуляторная тоска)</span>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                <div className="text-[11px] text-[#86868B] mb-1">Судьба кода</div>
                <div className="text-sm font-bold text-rose-400">Грустит в симуляторе</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                <div className="text-[11px] text-[#86868B] mb-1">Ужин в ЛА</div>
                <div className="text-sm font-bold text-[#86868B]">Перенесён на 2099</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                <div className="text-[11px] text-[#86868B] mb-1">Тим Кук</div>
                <div className="text-sm font-bold text-amber-500/80">Тяжело вздыхает</div>
              </div>
            </div>

            {/* Forecast text */}
            <div className="p-4 rounded-2xl bg-rose-500/[0.07] border border-rose-500/20">
              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#E5E5EA] leading-relaxed">
                  «Мир так и не узнал, шовнем. В Bar Rush тихо играет грустный трек, а iPhone-симулятор
                  плачет пикселями на мониторе в Тамбове.»
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Block with Main CTA and Evasive Button */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3">
        {/* Main CTA */}
        <button
          type="button"
          onClick={onNext}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0A84FF] to-[#0071E3] hover:from-[#0077ED] hover:to-[#0066CC] active:scale-[0.97] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
        >
          <span>Ладно, спасаем таймлайн</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Evasive Funny Button */}
        <div className="relative w-full flex justify-center py-2 overflow-visible">
          <motion.button
            type="button"
            onClick={handleEvadeAction}
            animate={{
              x: evadeOffset.x,
              rotate: evadeOffset.rotate,
              scale: isEvadeBroken ? 0.92 : 1,
              opacity: isEvadeBroken ? 0.45 : 0.85,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20,
            }}
            className={`min-h-11 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none max-w-full truncate active:scale-[0.95] ${
              isEvadeBroken
                ? 'bg-white/[0.02] border-white/[0.05] text-[#86868B] cursor-not-allowed'
                : 'bg-white/[0.04] border-white/[0.1] text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.08]'
            }`}
          >
            {currentEvadeText}
          </motion.button>
        </div>
      </div>
    </div>
  );
};
