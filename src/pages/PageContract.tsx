import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, FileText, Sparkles, AlertCircle } from 'lucide-react';
import { PageProps } from '../types';

export const PageContract: React.FC<PageProps> = ({ onNext }) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false]);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [shakeKey, setShakeKey] = useState<number>(0);

  const contractClauses = [
    'Подтверждаю, что я лучший друг и главный инвестор 2026 года.',
    'Осознаю, что на вопрос «Шовнем?» теперь всегда будет легендарный ответ.',
    'Обязуюсь принять лютый простав в Bar Rush (Тамбов), а после хайпа — ужин в Лос-Анджелесе.',
    'Готов потратить немного времени, чтобы официально запустить нас в App Store.',
  ];

  const allChecked = checkedItems.every(Boolean);

  const toggleItem = (index: number) => {
    const next = [...checkedItems];
    next[index] = !next[index];
    setCheckedItems(next);
    if (showWarning) setShowWarning(false);
  };

  const handleCheckAll = () => {
    setCheckedItems([true, true, true, true]);
    if (showWarning) setShowWarning(false);
  };

  const handleCtaClick = () => {
    if (!allChecked) {
      setShowWarning(true);
      setShakeKey(prev => prev + 1);
      return;
    }
    onNext();
  };

  const currentDateFormatted = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="relative max-w-2xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 sm:w-[480px] h-64 apple-intelligence-glow pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#0A84FF] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>LEGAL PROTOCOL • ANGEL EDITION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-2 sm:mb-3">
          Официальное соглашение
        </h2>
        <p className="text-sm sm:text-base text-[#86868B]">
          Быстрее, чем читать Apple Terms & Conditions.
        </p>
      </motion.div>

      {/* Quick accelerator button */}
      <div className="w-full flex justify-end mb-2">
        <button
          type="button"
          onClick={handleCheckAll}
          className="text-xs text-[#0A84FF] hover:text-[#5AC8FA] hover:underline transition-colors py-1 px-2 font-medium cursor-pointer"
        >
          ⚡ Отметить всё сразу (я человек занятой)
        </button>
      </div>

      {/* Contract Document Card */}
      <motion.div
        key={shakeKey}
        animate={shakeKey > 0 ? { x: [-6, 6, -4, 4, -2, 2, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] border border-white/[0.12] backdrop-blur-2xl shadow-2xl p-5 sm:p-7 mb-6 relative overflow-hidden"
      >
        {/* Document Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#E5E5EA]">
            <FileText className="w-4 h-4 text-[#0A84FF]" />
            <span className="font-semibold tracking-wider">AGREEMENT #LA-RUS-2026</span>
          </div>
          <div className="text-[11px] font-mono text-[#86868B] px-2 py-0.5 rounded-full bg-white/[0.05]">
            CONFIDENTIAL
          </div>
        </div>

        {/* 4 Checklist Items */}
        <div className="space-y-3 mb-6">
          {contractClauses.map((clause, idx) => {
            const isChecked = checkedItems[idx];
            return (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.985 }}
                onClick={() => toggleItem(idx)}
                className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer select-none ${
                  isChecked
                    ? 'bg-blue-500/[0.08] border-[#0A84FF]/40 text-[#F5F5F7]'
                    : 'bg-white/[0.02] border-white/[0.07] text-[#86868B] hover:bg-white/[0.04] hover:text-[#E5E5EA]'
                }`}
              >
                {/* Tactile iOS Checkbox */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${
                    isChecked
                      ? 'bg-[#0A84FF] text-white shadow-md shadow-blue-500/40'
                      : 'border-2 border-white/20 bg-black/40'
                  }`}
                >
                  {isChecked && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </motion.div>
                  )}
                </div>

                <div className="text-xs sm:text-sm font-medium leading-relaxed">
                  {clause}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Digital Signature Simulation */}
        <div className="pt-4 border-t border-white/[0.08] min-h-[85px] flex flex-col justify-center">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B] mb-1">
            Электронная подпись инвестора:
          </div>

          {allChecked ? (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between py-2 px-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/25"
            >
              <div className="flex items-center gap-2">
                <div className="font-serif italic text-lg sm:text-xl font-bold tracking-wide text-emerald-300">
                  Misha Approved ✓
                </div>
                <span className="text-[10px] font-mono text-emerald-400/80 px-1.5 py-0.5 rounded bg-emerald-500/10">
                  VERIFIED
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#86868B]">
                {currentDateFormatted} • Los Angeles
              </div>
            </motion.div>
          ) : (
            <div className="text-xs text-[#86868B] italic py-2 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400/60 animate-pulse" />
              <span>Ожидание подтверждения всех пунктов соглашения...</span>
            </div>
          )}
        </div>

        {/* Fine Print - Тамбовская область */}
        <p className="mt-4 text-[10px] sm:text-[11px] text-[#86868B]/70 leading-relaxed text-center">
          *Не является юридической офертой в штате Калифорния и Тамбовской области. Является железобетонной гарантией вечного респекта.
        </p>
      </motion.div>

      {/* Warning message if user tries to proceed without checking */}
      {showWarning && !allChecked && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs mb-4"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Отметь все 4 пункта выше, бро, чтобы запустить магию!</span>
        </motion.div>
      )}

      {/* CTA Button */}
      <div className="w-full max-w-sm">
        <button
          onClick={handleCtaClick}
          className={`w-full h-14 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-[0.97] ${
            allChecked
              ? 'bg-gradient-to-r from-[#0A84FF] via-purple-600 to-[#0A84FF] bg-[length:200%_auto] animate-pulse hover:shadow-blue-500/40 text-white'
              : 'bg-white/[0.08] text-[#86868B] border border-white/[0.1] hover:bg-white/[0.12] hover:text-[#F5F5F7]'
          }`}
        >
          <span>Подписать и забрать сертификат ✨</span>
        </button>
      </div>
    </div>
  );
};
