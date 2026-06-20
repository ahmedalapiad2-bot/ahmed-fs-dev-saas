"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function GradientButton({ href, children, variant = 'primary', className = '' }: GradientButtonProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform';
  const styleClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow hover:scale-[1.02]'
    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10';

  const content = (
    <motion.span whileHover={isMobile || reduceMotion ? undefined : { scale: 1.02 }} className={`${baseClasses} ${styleClasses} ${className}`}>
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
