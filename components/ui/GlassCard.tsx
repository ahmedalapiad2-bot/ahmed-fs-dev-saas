"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={isMobile || reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: isMobile ? 0.12 : 0.25 }}
      className={`glass-card rounded-[28px] border border-white/10 shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  );
}
