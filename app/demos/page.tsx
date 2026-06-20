"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { demos } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function DemosPage() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeader 
          title="Explore Our Production-Ready Demos" 
          description="Premium website and software demo presentations for modern digital brands."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <motion.article
              key={demo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-[32px] border border-white/10 overflow-hidden group hover:border-accent/50 transition"
            >
              {/* Demo Preview Area */}
              <div className="h-48 overflow-hidden border-b border-white/10">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Demo Info */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-accent mb-4">
                  <span>{demo.category}</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">Featured</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{demo.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{demo.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <Link
                    href={`/demos/${demo.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white group-hover:gap-3"
                  >
                    View Demo <ArrowRight size={16} />
                  </Link>
                  <span className="text-sm text-white/70">Explore</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Start your Project to a signed Down, consan on the next steps →
          </p>
        </div>
      </div>
    </div>
  );
}
