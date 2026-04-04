'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoodConfig, MoodId } from '@/lib/moodMap';
import { cn } from '@/lib/utils';

interface MoodBubbleProps {
  mood: MoodConfig;
  isSelected: boolean;
  onToggle: (id: MoodId) => void;
  disabled: boolean;
}

export const MoodBubble: React.FC<MoodBubbleProps> = React.memo(({ 
  mood, 
  isSelected, 
  onToggle, 
  disabled 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.button
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: prefersReducedMotion ? 0 : [0, -4, 0],
      }}
      transition={{
        y: {
          duration: mounted ? 4 + Math.random() * 2 : 5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onToggle(mood.id)}
      disabled={disabled && !isSelected}
      className={cn(
        "group relative flex flex-col items-center justify-center p-4 md:p-6 rounded-3xl transition-all duration-500",
        "bg-white/5 backdrop-blur-2xl border border-white/10",
        "w-full aspect-square max-w-[120px] md:max-w-[150px]",
        isSelected 
          ? "border-white/40 bg-white/15 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] ring-1 ring-white/30" 
          : "hover:border-white/20",
        disabled && !isSelected && "opacity-10 cursor-not-allowed grayscale blur-[2px]"
      )}
    >
      <motion.span 
        animate={isSelected ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl mb-2 md:mb-3 drop-shadow-2xl"
      >
        {mood.emoji}
      </motion.span>
      
      <span className={cn(
        "text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-colors duration-300 text-center",
        isSelected ? "text-white" : "text-white/40 group-hover:text-white/70"
      )}>
        {mood.label}
      </span>

      {/* Dynamic Background Glow */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 -z-10 blur-3xl rounded-full opacity-30"
            style={{ backgroundColor: mood.primaryColor }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
});
