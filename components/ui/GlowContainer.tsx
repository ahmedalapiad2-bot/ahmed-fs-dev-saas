"use client";

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface GlowContainerProps {
  children: ReactNode;
  className?: string;
}

export function GlowContainer({ children, className = '' }: GlowContainerProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div whileHover={isMobile || reduceMotion ? undefined : { scale: 1.01 }} className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(15,23,42,0.65)] p-6 shadow-glow ${className}`}>
      <div className="pointer-events-none absolute -left-6 top-6 h-20 w-20 md:-left-10 md:h-28 md:w-28 rounded-full bg-primary/20 blur-[10px] md:blur-3xl" />
      <div className="pointer-events-none absolute -right-6 bottom-6 h-16 w-16 md:-right-10 md:bottom-8 md:h-24 md:w-24 rounded-full bg-accent/20 blur-[10px] md:blur-3xl" />
      {children}
    </motion.div>
  );
}
