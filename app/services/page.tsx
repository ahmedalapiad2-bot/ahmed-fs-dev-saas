"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function ServicesPage() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-35" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Services" description="Strategic service offerings for modern SaaS brands and enterprise digital experiences." />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article key={service.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass-card rounded-[32px] border border-white/10 p-6">
              <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">Service</span>
              <h2 className="mt-5 text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              <div className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <p key={feature} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    {feature}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <Link href={`/services/${service.id}`} className="text-sm font-semibold text-accent transition hover:text-white">
                  Explore <ArrowRight size={16} />
                </Link>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">Core Offer</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
