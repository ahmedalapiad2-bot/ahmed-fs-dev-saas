import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { services, solutions } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-radial-glow opacity-30" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Service Overview</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{service.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{service.description}</p>
            </div>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Back to Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <section className="space-y-8">
            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <SectionHeader title="Overview" description="A premium service presentation outlining the value, process, and business outcomes." />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((item) => (
                  <div key={item} className="rounded-[24px] bg-[#08172f] p-4">
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <h2 className="text-2xl font-semibold text-white">Related Solutions</h2>
              <p className="mt-4 text-sm leading-7 text-muted">Tailored systems and vertical solutions that align with this service offering.</p>
              <div className="mt-6 space-y-4">
                {solutions.slice(0, 3).map((solution) => (
                  <div key={solution.id} className="rounded-[24px] border border-white/10 bg-[#08172f] p-4">
                    <h3 className="font-semibold text-white">{solution.title}</h3>
                    <p className="mt-2 text-sm text-muted">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Benefits</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
                <p>Premium design systems that strengthen brand trust and accelerate conversions.</p>
                <p>Fast front-end builds with consistent design language and scalable modular architecture.</p>
              </div>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Process</p>
              <div className="mt-4 grid gap-3">
                {['Discovery', 'Design', 'Build', 'Launch'].map((step) => (
                  <div key={step} className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-sm text-white/80">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">{step[0]}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <h2 className="text-lg font-semibold text-white">Request a Custom Project</h2>
              <p className="mt-3 text-sm leading-7 text-muted">Talk about your product, timeline, or business goals with a tailored front-end plan.</p>
              <Link href="/custom-project" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
                Start Your Project
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
