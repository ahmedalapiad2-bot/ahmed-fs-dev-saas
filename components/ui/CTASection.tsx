"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import type { ReactNode } from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function CTASection({ title, description, children }: CTASectionProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 12 : 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[32px] border border-white/10 bg-[rgba(15,23,42,0.75)] p-10 shadow-glow"
    >
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <p className="text-sm leading-7 text-muted">{description}</p>
      </div>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}
