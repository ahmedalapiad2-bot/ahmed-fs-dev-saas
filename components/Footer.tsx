import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Demos', href: '/demos' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
];

const services = [
  'E-commerce Systems',
  'Dashboards',
  'Custom Platforms',
  'AI-Optimized UI',
];

const solutions = [
  'Healthcare',
  'Construction',
  'Manufacturing',
  'Luxury Brands',
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] px-6 py-16 text-sm text-muted sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-white">
            <Image
              src="/logo.png"
              alt="Ahmed FS Dev"
              width={800}
              height={220}
              priority
              className="h-18 w-auto object-contain"
            />
          </div>
          <p className="max-w-sm leading-7 text-muted">Designing conversion-first digital products and systems with enterprise polish, built for growth.</p>
          <div className="flex items-center gap-3 text-white">
            <Github size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted">Quick Links</h3>
            <div className="space-y-3">
              {links.map((item) => (
                <Link key={item.href} href={item.href} className="block text-white transition hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-muted">Solutions</h3>
            <div className="space-y-3">
              {solutions.map((item) => (
                <p key={item} className="text-white transition hover:text-accent">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">© 2026 Ahmed FS Dev. All rights reserved.</p>
        <Link href="/custom-project" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">
          Start Your Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </footer>
  );
}
