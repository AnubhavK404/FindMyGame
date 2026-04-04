'use client';

import React, { useMemo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoodConfig, MoodId, getMoodConfig } from '@/lib/moodMap';
import { RefreshCcw, ArrowLeft, Share2, Gamepad2, Sparkles } from 'lucide-react';
import { GameRecommendation } from '@/lib/recommendGame';
import { cn } from '@/lib/utils';

interface MoodSceneProps {
  selectedMoodIds: MoodId[];
  gameRec: GameRecommendation;
  onBack: () => void;
  onRemix: () => void;
  onShare: () => void;
}

const Particle: React.FC<{ color: string; type: MoodConfig['particleType'] }> = ({ color, type }) => {
  const initialX = Math.random() * 100;
  const initialY = Math.random() * 100;
  const size = Math.random() * 40 + 10;
  
  const getAnimation = () => {
    switch (type) {
      case 'jitter':
        return {
          x: [0, Math.random() * 20 - 10, 0],
          y: [0, Math.random() * 20 - 10, 0],
          transition: { duration: 0.1 + Math.random() * 0.2, repeat: Infinity }
        };
      case 'pulse':
        return {
          scale: [0.8, 1.4, 0.8],
          opacity: [0.1, 0.4, 0.1],
          transition: { duration: 3 + Math.random() * 3, repeat: Infinity }
        };
      case 'drift':
        return {
          x: [0, 100, 0],
          y: [0, 50, 0],
          transition: { duration: 15 + Math.random() * 10, repeat: Infinity }
        };
      case 'orbit':
        return {
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          transition: { duration: 10 + Math.random() * 5, repeat: Infinity, ease: "linear" }
        };
      case 'fade':
        return {
          opacity: [0, 0.3, 0],
          scale: [0.5, 1.5, 0.5],
          transition: { duration: 5 + Math.random() * 5, repeat: Infinity }
        };
      case 'float':
      default:
        return {
          y: [0, -100, 0],
          opacity: [0, 0.4, 0],
          transition: { duration: 8 + Math.random() * 4, repeat: Infinity }
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        ...getAnimation()
      }}
      className="absolute rounded-full blur-[40px] pointer-events-none"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

export const MoodScene: React.FC<MoodSceneProps> = ({
  selectedMoodIds,
  gameRec,
  onBack,
  onRemix,
  onShare,
}) => {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const configs = useMemo(() => 
    selectedMoodIds.map(id => getMoodConfig(id)), 
    [selectedMoodIds]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Mesh Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {configs.map((config, i) => (
            <motion.div
              key={`bg-${i}`}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 10 + i * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute w-[150%] h-[150%] rounded-full opacity-30 blur-[120px]"
              style={{
                background: `radial-gradient(circle, ${config.primaryColor} 0%, transparent 70%)`,
                left: `${(i / configs.length) * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-10 mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {mounted && configs.map((config, i) => (
          Array.from({ length: 12 }).map((_, j) => (
            <Particle key={`${i}-${j}`} color={config.tertiaryColor || config.primaryColor} type={config.particleType} />
          ))
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6 md:px-10 text-center max-w-4xl w-full flex-grow overflow-y-auto pt-20 pb-32 scrollbar-hide">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 md:space-y-12 w-full"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl">
                  <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">
                  Recommended For You
                </div>
              </div>

              <div className="space-y-2 md:space-y-4">
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                  {gameRec.title}
                </h2>
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/40">
                  {gameRec.genre}
                </div>
              </div>
              
              <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto">
                <p className="text-base md:text-xl text-white/80 leading-relaxed font-medium">
                  {gameRec.description}
                </p>
                
                <div className="p-5 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-left relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:text-white/10 transition-colors">
                    <Sparkles className="w-12 h-12" />
                  </div>
                  <div className="text-[9px] md:text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-3">The Insight</div>
                  <p className="text-white/70 italic font-serif text-base md:text-lg leading-relaxed relative z-10">
                    &ldquo;{gameRec.why}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="fixed bottom-0 left-0 right-0 z-40 px-6 pb-10 md:pb-16 flex justify-between items-center max-w-lg mx-auto w-full bg-gradient-to-t from-black via-black/80 to-transparent"
      >
        <button onClick={onBack} className="flex flex-col items-center gap-2 group">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-xl">
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
          </div>
          <span className="text-[9px] text-white/30 font-black uppercase tracking-widest">Back</span>
        </button>

        <button onClick={onRemix} className="flex flex-col items-center gap-3 group">
          <div className="p-6 md:p-7 rounded-full bg-white text-black group-hover:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-500 relative">
            <RefreshCcw className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <span className="text-[10px] text-white font-black tracking-[0.3em] uppercase">Remix</span>
        </button>

        <button onClick={onShare} className="flex flex-col items-center gap-2 group">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-xl">
            <Share2 className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
          </div>
          <span className="text-[9px] text-white/30 font-black uppercase tracking-widest">Share</span>
        </button>
      </motion.div>
    </motion.div>
  );
};
