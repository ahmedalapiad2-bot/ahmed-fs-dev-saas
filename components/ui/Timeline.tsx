"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 8 : 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="glass-card rounded-[32px] border border-white/10 p-6 text-center"
        >
          <div className="mb-4 text-3xl font-semibold text-primary">{item.title}</div>
          <p className="text-sm leading-6 text-muted">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
