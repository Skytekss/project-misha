import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StepNumber } from './types';
import { Navbar } from './components/Navbar';
import { PageHero } from './pages/PageHero';
import { PageBenefits } from './pages/PageBenefits';
import { PageSimulator } from './pages/PageSimulator';
import { PageContract } from './pages/PageContract';
import { PageCertificate } from './pages/PageCertificate';

export const App: React.FC = () => {
  const [step, setStep] = useState<StepNumber>(1);

  // Smooth scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleNext = () => {
    setStep((prev) => (Math.min(prev + 1, 5) as StepNumber));
  };

  const handlePrev = () => {
    setStep((prev) => (Math.max(prev - 1, 1) as StepNumber));
  };

  const handleGoToStep = (newStep: StepNumber) => {
    setStep(newStep);
  };

  return (
    <div className="min-h-[100dvh] bg-[#000000] text-[#F5F5F7] flex flex-col relative overflow-x-hidden selection:bg-[#0A84FF]/30 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        {/* Soft top-left glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/[0.12] rounded-full blur-[120px]" />
        {/* Soft center-right glow */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/[0.09] rounded-full blur-[130px]" />
        {/* Soft bottom glow */}
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-96 bg-cyan-600/[0.08] rounded-full blur-[140px]" />
      </div>

      {/* Sticky Header Navbar */}
      <Navbar
        currentStep={step}
        totalSteps={5}
        onPrev={handlePrev}
        onGoToStep={handleGoToStep}
      />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col justify-start pb-[max(env(safe-area-inset-bottom),2rem)]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <PageHero onNext={handleNext} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <PageBenefits onNext={handleNext} onPrev={handlePrev} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <PageSimulator onNext={handleNext} onPrev={handlePrev} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <PageContract onNext={handleNext} onPrev={handlePrev} />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <PageCertificate
                onNext={() => {}}
                onPrev={handlePrev}
                onGoToStep={handleGoToStep}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
