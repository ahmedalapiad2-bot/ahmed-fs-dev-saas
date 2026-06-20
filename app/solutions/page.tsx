"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function SolutionsPage() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-35" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Solutions" description="Enterprise-grade digital solutions tailored for every industry." />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.article key={solution.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass-card rounded-[32px] border border-white/10 p-8">
              <div className="flex items-center gap-3 text-accent">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white/5">{solution.title.charAt(0)}</span>
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-accent">Solution</p>
                  <h2 className="text-2xl font-semibold text-white">{solution.title}</h2>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-muted">{solution.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {solution.examples.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-4 py-2 text-sm text-muted">{item}</span>
                ))}
              </div>
              <Link href={`/solutions/${solution.id}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white">
                Explore Solution <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
