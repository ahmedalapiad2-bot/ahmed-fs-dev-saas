"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const values = ['Design quality', 'Fast delivery', 'Scalable architecture', 'Business-first strategy'];
const expertise = ['Next.js', 'Tailwind CSS', 'Framer Motion', 'UI systems', 'Responsive platforms'];

export default function AboutPage() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-35" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeader title="About Ahmed FS Dev" description="A premium front-end design and development partner for modern digital products." />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.55fr]">
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
            <div className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-3xl font-semibold text-white">Company Story</h2>
              <p className="mt-5 text-sm leading-7 text-muted">Ahmed FS Dev builds digital products with enterprise polish, focused on delivering premium SaaS websites, platforms, and dashboards for growth-stage businesses.</p>
            </div>
            <div className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-3xl font-semibold text-white">Mission</h2>
              <p className="mt-5 text-sm leading-7 text-muted">Create elegant, high-impact interfaces that help businesses launch, scale, and operate with confidence.</p>
            </div>
            <div className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-3xl font-semibold text-white">Development Process</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
                <li>Research and strategy</li>
                <li>UI/UX design and validation</li>
                <li>Frontend development and animation</li>
                <li>Testing and refinement</li>
                <li>Launch and optimization</li>
              </ul>
            </div>
          </motion.section>
          <aside className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white">Values</h2>
              <div className="mt-5 space-y-3">
                {values.map((value) => (
                  <div key={value} className="rounded-3xl bg-[#08172f] p-4 text-sm text-white/80">{value}</div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white">Technology Expertise</h2>
              <div className="mt-5 grid gap-3">
                {expertise.map((item) => (
                  <div key={item} className="rounded-3xl bg-[#08172f] p-4 text-sm text-white/80">{item}</div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white">Project Workflow</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                <p>Strategy, visual design, implementation, refinement, and deployment.</p>
                <p>Transparent delivery and premium UI craftsmanship for every build.</p>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
