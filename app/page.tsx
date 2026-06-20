"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Timeline } from '@/components/ui/Timeline';
import { GradientButton } from '@/components/ui/GradientButton';
import { DemoCard } from '@/components/DemoCard';
import { ModernHero } from '@/components/ModernHero';
import { demos, services, solutions, processSteps } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Modern Hero Section */}
      <ModernHero />

      {/* Main Content */}
      <div className="relative overflow-hidden py-10">
        <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-70" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <section className="mt-16 space-y-10">
          <SectionHeader
            subtitle="Product Showcase"
            title="Live demo previews for premium digital products"
              description="Explore real visual experiences for fashion retail, luxury commerce, mobile storefronts, and enterprise systems."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {demos.slice(0, 3).map((demo) => (
                <DemoCard
                  key={demo.id}
                  title={demo.title}
                  category={demo.category}
                  description={demo.description}
                  tags={demo.tags}
                  href={`/demos/${demo.id}`}
                  image={demo.image}
                />
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionHeader title="Services Preview" description="Strategic service offerings designed to launch modern SaaS products with enterprise polish." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <FeatureCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={<Sparkles size={20} />}
                />
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionHeader
              subtitle="Solutions"
              title="Enterprise-grade systems for specialized industries"
              description="Scale your business with digital platforms tailored to retail, healthcare, construction, manufacturing, and luxury brands."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  key={solution.id}
                  className="glass-card rounded-[32px] border border-white/10 p-6"
                >
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">{solution.title}</p>
                  <p className="text-white/80">{solution.description}</p>
                  <div className="mt-5 space-y-2">
                    {solution.examples.map((example) => (
                      <span key={example} className="inline-flex rounded-2xl bg-white/5 px-3 py-2 text-sm text-muted">
                        {example}
                      </span>
                    ))}
                  </div>
                  <Link href={`/solutions/${solution.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Explore Solution
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionHeader title="Featured Demos" description="High-value experiences across fashion, healthcare, construction, and manufacturing." />
            <div className="grid gap-6 xl:grid-cols-3">
              {demos.slice(3, 6).map((demo) => (
                <DemoCard
                  key={demo.id}
                  title={demo.title}
                  category={demo.category}
                  description={demo.description}
                  tags={demo.tags}
                  href={`/demos/${demo.id}`}
                  image={demo.image}
                />
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionHeader title="Why Choose Ahmed FS Dev" description="A premium development partner with polished interfaces, speed, and industry focus." />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {['Modern UI/UX', 'Fast Delivery', 'Scalable Systems', 'Business Focused', 'Premium Quality', 'Mobile Optimized'].map((item) => (
                <FeatureCard key={item} title={item} description="Designed for growth, usability, and enterprise confidence." icon={<Briefcase size={20} />} />
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionHeader title="Our Process Timeline" description="A clear delivery path from discovery to launch, built for premium client experiences." />
            <Timeline items={processSteps} />
          </section>

          <section className="mt-16 rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-10 shadow-glow">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Ready to launch</p>
                <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Build your custom SaaS system with premium polish.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted">From scalable commerce storefronts to tailored custom saas platforms, Ahmed FS Dev creates front-end experiences that feel modern, secure, and production-ready.</p>
              </div>
              <div className="flex flex-col gap-4 sm:items-end">
                <GradientButton href="/custom-project">Start Your Project</GradientButton>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Contact Sales
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
