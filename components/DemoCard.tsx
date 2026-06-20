"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { useReducedMotion } from 'framer-motion';

interface DemoCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
}

export function DemoCard({ title, category, description, tags, href, image }: DemoCardProps) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  return (
    <motion.article whileHover={isMobile || reduceMotion ? undefined : { y: -8 }} transition={{ duration: isMobile ? 0.12 : 0.25 }} className="group glass-card rounded-[32px] border border-white/10 overflow-hidden bg-[#08172f]">
      <div className="overflow-hidden">
        <Image src={image} alt={`${title} preview`} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" width={600} height={300} />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-accent">
          <span>{category}</span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">Demo</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">{tag}</span>
          ))}
        </div>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white">
          View Demo <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
