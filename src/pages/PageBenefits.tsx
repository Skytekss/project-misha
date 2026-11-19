import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  MapPin,
  Utensils,
  Infinity as InfinityIcon,
  MessageSquareQuote,
  Smartphone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { PageProps } from '../types';

export const PageBenefits: React.FC<PageProps> = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 sm:w-[500px] h-60 apple-intelligence-glow pointer-events-none -z-10" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-3 sm:mb-4">
          Шовнем? Смотрим начинку сделки.
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-xl mx-auto">
          Почему помощь с Apple Developer Account — лучшая инвестиция 2026 года.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 sm:mb-12"
      >
        {/* 1. HERO CARD: Крёстный отец App Store */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(255, 215, 0, 0.35)' }}
          className="sm:col-span-2 group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent border border-white/[0.1] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400/20 to-amber-300/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-md">
              <Crown className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 font-semibold">
              VIP TIER
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] mb-2 tracking-tight">
            Титул: Крёстный отец App Store
          </h3>
          <p className="text-sm sm:text-base text-[#86868B] leading-relaxed">
            Твоё имя навсегда войдёт в историю релиза. Хочешь — добавлю в раздел{' '}
            <span className="text-amber-200 font-semibold italic">Credits / About</span> золотым шрифтом.
            Уважение уровня сооснователя Apple, только без работы в пыльном гараже.
          </p>
        </motion.div>

        {/* 2. Калифорнийский блат */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(10, 132, 255, 0.35)' }}
          className="group relative rounded-3xl p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[#0A84FF] mb-4 shadow-md">
            <MapPin className="w-5 h-5" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] mb-2 tracking-tight">
            Калифорнийский блат
          </h3>
          <p className="text-sm text-[#86868B] leading-relaxed">
            Ты в ЛА, Apple в Купертино — по меркам США вы почти соседи по лестничной клетке.
            Тим Кук одобряет локальную калифорнийскую поддержку земляков.
          </p>
        </motion.div>

        {/* 3. Гастро-дивиденды: 2 этапа */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(236, 72, 153, 0.35)' }}
          className="sm:col-span-2 group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-md">
              <Utensils className="w-5 h-5" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
              <span>Bar Rush (Тамбов)</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>Los Angeles</span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] mb-2 tracking-tight">
            Гастро-дивиденды: 2 этапа
          </h3>
          <div className="space-y-2 text-sm text-[#86868B] leading-relaxed">
            <p>
              <strong className="text-[#F5F5F7]">Этап 1 (база):</strong> При встрече с меня лютый простав в{' '}
              <span className="text-rose-300 font-semibold underline decoration-rose-400/40 underline-offset-2">
                Bar Rush в Тамбове
              </span>{' '}
              — вообще без лимитов и тормозов.
            </p>
            <p>
              <strong className="text-[#F5F5F7]">Этап 2 (после хайпа):</strong> Приложение залетает в топы App Store —
              лечу в ЛА и закрываю твой лучший ужин на Сансет-бульваре.
            </p>
          </div>
        </motion.div>

        {/* 4. Lifetime VIP Pass */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(168, 85, 247, 0.35)' }}
          className="group relative rounded-3xl p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-md">
            <InfinityIcon className="w-5 h-5" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] mb-2 tracking-tight">
            Lifetime VIP Pass
          </h3>
          <p className="text-sm text-[#86868B] leading-relaxed">
            Пожизненный бесплатный доступ ко всем моим приложениям и будущим фичам. Никаких пейволлов.
            Даже когда акции улетят в космос.
          </p>
        </motion.div>

        {/* 5. Лицензия на главную фразу */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(52, 211, 153, 0.35)' }}
          className="group relative rounded-3xl p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-md">
            <MessageSquareQuote className="w-5 h-5" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] mb-2 tracking-tight">
            Лицензия на панчлайн
          </h3>
          <p className="text-sm text-[#86868B] leading-relaxed">
            Официальное право на любой тусовке в ЛА небрежно кидать фразу:{' '}
            <span className="text-[#F5F5F7] font-medium italic">
              «Вообще-то это приложение существует только благодаря мне»
            </span>
            .
          </p>
        </motion.div>

        {/* 6. Спасение кода из плена */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -3, borderColor: 'rgba(56, 189, 248, 0.35)' }}
          className="sm:col-span-2 group relative rounded-3xl p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-md">
            <Smartphone className="w-5 h-5" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] mb-2 tracking-tight">
            Спасение кода из плена Xcode
          </h3>
          <p className="text-sm text-[#86868B] leading-relaxed">
            Мои проекты наконец-то сбегут из серого локального симулятора Xcode на реальные экраны iPhone.
            Плюс <span className="text-emerald-400 font-semibold">+10 000 к карме</span> калифорнийского IT-ангела.
          </p>
        </motion.div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm"
      >
        <button
          onClick={onNext}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0A84FF] to-[#0071E3] hover:from-[#0077ED] hover:to-[#0066CC] active:scale-[0.97] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
        >
          <span>Просчитать две реальности</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
