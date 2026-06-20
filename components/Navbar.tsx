"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { GeometricAFLogo } from './GeometricAFLogo';

const navItems = [
  { label: 'Demos', href: '/demos' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(2,6,23,0.80)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-0 text-base sm:text-lg font-semibold tracking-tight text-white hover:opacity-90 transition">
          <GeometricAFLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/custom-project" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:bg-violet-500">
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#061024] px-6 pb-6 md:hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10">
                {item.label}
              </Link>
            ))}
            <Link href="/custom-project" className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
              Start Your Project
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
