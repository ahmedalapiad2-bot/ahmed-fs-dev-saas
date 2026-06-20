import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { solutions, services, demos } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SolutionDetailPage({ params }: Props) {
  const { id } = await params;
  const solution = solutions.find((item) => item.id === id);

  if (!solution) {
    notFound();
  }

  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-radial-glow opacity-30" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Solution Overview</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{solution.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{solution.description}</p>
            </div>
            <Link href="/solutions" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Back to Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <section className="space-y-8">
            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <SectionHeader title="Overview" description="A premium product story for the target industry." />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {solution.examples.map((example) => (
                  <div key={example} className="rounded-[24px] bg-[#08172f] p-4">
                    <p className="text-sm font-semibold text-white">{example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <h2 className="text-2xl font-semibold text-white">Features</h2>
              <div className="mt-6 grid gap-4">
                {['High performance UI', 'Business dashboard flows', 'Responsive enterprise systems'].map((feature) => (
                  <div key={feature} className="rounded-[24px] border border-white/10 bg-[#08172f] p-4 text-sm text-muted">{feature}</div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <h2 className="text-2xl font-semibold text-white">Related Demos</h2>
              <div className="mt-6 space-y-4">
                {demos.slice(0, 3).map((demo) => (
                  <Link key={demo.id} href={`/demos/${demo.id}`} className="block rounded-[24px] border border-white/10 bg-[#08172f] p-4 transition hover:border-accent">
                    <p className="text-lg font-semibold text-white">{demo.title}</p>
                    <p className="mt-2 text-sm text-muted">{demo.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Target Industry</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{solution.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">Designed for high-impact digital product experiences within the selected market.</p>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <h2 className="text-lg font-semibold text-white">Related Services</h2>
              <div className="mt-5 grid gap-3">
                {services.slice(0, 3).map((service) => (
                  <div key={service.id} className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-sm text-white/80">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">{service.title[0]}</span>
                    {service.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Request Similar Solution</p>
              <p className="mt-4 text-sm leading-7 text-muted">Build a custom system with the same premium experience and strategic workflows.</p>
              <Link href="/custom-project" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
                Request Custom Solution
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
