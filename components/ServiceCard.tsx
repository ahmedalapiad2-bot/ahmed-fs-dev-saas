"use client";

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  features: string[];
}

export function ServiceCard({ title, description, href, features }: ServiceCardProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  return (
    <motion.article whileHover={isMobile || reduceMotion ? undefined : { y: -8 }} transition={{ duration: isMobile ? 0.12 : 0.25 }} className="glass-card rounded-[32px] border border-white/10 p-6">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-6 space-y-2 text-sm text-white/80">
        {features.map((feature) => (
          <p key={feature} className="rounded-3xl bg-white/5 px-4 py-3">{feature}</p>
        ))}
      </div>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white">
        Learn More <ArrowRight size={16} />
      </Link>
    </motion.article>
  );
}
