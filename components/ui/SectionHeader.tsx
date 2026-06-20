"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 12 : 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 space-y-3 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">{subtitle}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-muted">{description}</p> : null}
    </motion.div>
  );
}
