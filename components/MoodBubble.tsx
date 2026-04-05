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
      whileHover={{ 
        scale: 1.05,
        y: -5,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onToggle(mood.id)}
      disabled={disabled && !isSelected}
      className={cn(
        "group relative flex flex-col items-center justify-center p-4 md:p-6 rounded-[2rem] transition-all duration-500",
        "bg-white/[0.03] border border-white/10 hover:border-white/20",
        "w-full aspect-square max-w-[120px] md:max-w-[150px] overflow-hidden",
        isSelected 
          ? "border-white/40 bg-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]" 
          : "",
        disabled && !isSelected && "opacity-20 cursor-not-allowed grayscale"
      )}
    >
      {/* Background Gradient Layer */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-700",
          isSelected ? "opacity-20" : "group-hover:opacity-10"
        )}
        style={{ 
          background: `radial-gradient(circle at center, ${mood.primaryColor}, transparent 70%)` 
        }} 
      />

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

      {/* Selection Ring */}
      {isSelected && (
        <motion.div
          layoutId="selection-ring"
          className="absolute inset-0 border-2 border-white/40 rounded-[2rem] z-20 pointer-events-none"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>

  );
});
