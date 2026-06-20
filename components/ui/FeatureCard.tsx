"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  return (
    <motion.article whileHover={isMobile || reduceMotion ? undefined : { y: -6 }} transition={{ duration: isMobile ? 0.12 : 0.25 }} className="glass-card p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-accent shadow-glow">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
    </motion.article>
  );
}
