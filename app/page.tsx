'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOODS, MoodId } from '@/lib/moodMap';
import { getGameRecommendation, GameRecommendation } from '@/lib/recommendGame';
import { MoodBubble } from '@/components/MoodBubble';
import { MoodScene } from '@/components/MoodScene';
import { Shuffle, Command, Gamepad2 } from 'lucide-react';
import { cn, shuffle } from '@/lib/utils';

type Screen = 'selection' | 'result';

export default function MoodMixer() {
  const [mounted, setMounted] = useState(false);
  const [selectedMoods, setSelectedMoods] = useState<MoodId[]>([]);
  const [screen, setScreen] = useState<Screen>('selection');
  const [gameRec, setGameRec] = useState<GameRecommendation | null>(null);
  const [isMixing, setIsMixing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMood = useCallback((id: MoodId) => {
    setSelectedMoods(prev => {
      if (prev.includes(id)) {
        return prev.filter(m => m !== id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }, []);

  const handleMixMood = async () => {
    if (selectedMoods.length === 0) return;
    
    setIsMixing(true);
    const rec = await getGameRecommendation(selectedMoods);
    setGameRec(rec);
    
    setTimeout(() => {
      setScreen('result');
      setIsMixing(false);
    }, 1000);
  };

  const handleShuffle = () => {
    const allIds = Object.keys(MOODS) as MoodId[];
    setSelectedMoods(shuffle(allIds, Math.floor(Math.random() * 3) + 1));
  };

  const handleBack = () => {
    setScreen('selection');
  };

  const handleRemix = async () => {
    const rec = await getGameRecommendation(selectedMoods);
    setGameRec(rec);
  };

  const handleShare = () => {
    alert("Vibe captured! ✨");
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <main className="min-h-screen relative bg-[#050505] overflow-x-hidden font-sans text-white selection:bg-white/10">
      <AnimatePresence mode="wait">
        {screen === 'selection' ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen flex flex-col items-center justify-between p-6 md:p-12"
          >
            {/* Ambient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/10 blur-[120px]"
              />
              <motion.div 
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-purple-500/10 blur-[120px]"
              />
            </div>

            {/* Header */}
            <header className="w-full flex justify-between items-center max-w-6xl mx-auto">
              <div className="flex items-center gap-2 text-white/20">
                <Command className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Findmygame</span>
              </div>
              <div className={cn(
                "text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] transition-colors",
                selectedMoods.length > 0 ? "text-white/60" : "text-white/10"
              )}>
                {selectedMoods.length} / 3 Selected
              </div>
            </header>

            {/* Selection Content */}
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 md:gap-20 py-12">
              <div className="space-y-4 md:space-y-6 text-center">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9]"
                >
                  What should you <br/> 
                  <span className="text-white/15 italic font-serif text-3xl md:text-7xl block mt-2">play today?</span>
                </motion.h1>
              </div>

              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 w-full px-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
              >
                {Object.values(MOODS).map(mood => (
                  <div key={mood.id} className="flex justify-center">
                    <MoodBubble
                      mood={mood}
                      isSelected={selectedMoods.includes(mood.id)}
                      onToggle={toggleMood}
                      disabled={selectedMoods.length >= 3}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Footer / Actions */}
            <footer className="w-full flex flex-col items-center gap-8 pb-4">
              <div className="flex flex-col items-center gap-6 w-full">
                <AnimatePresence>
                  {selectedMoods.length > 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="flex items-center gap-4 w-full max-w-md"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleMixMood}
                        disabled={isMixing}
                        className="flex-grow group relative px-8 md:px-12 py-5 md:py-6 rounded-full bg-white text-black font-black text-lg md:text-xl tracking-tighter overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isMixing ? 'Analyzing...' : 'Find My Game'}
                          <Gamepad2 className={cn("w-5 h-5 md:w-6 md:h-6", isMixing && "animate-bounce")} />
                        </span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleShuffle}
                        className="p-5 md:p-6 rounded-full bg-white/5 border border-white/10 text-white/30 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <Shuffle className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                      Select your current mood to start
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-2"
                >
                  <span>Made by anubhav</span>
                </motion.div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <MoodScene
            key="result"
            selectedMoodIds={selectedMoods}
            gameRec={gameRec!}
            onBack={handleBack}
            onRemix={handleRemix}
            onShare={handleShare}
          />
        )}
      </AnimatePresence>

      {/* Global Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </main>
  );
}
