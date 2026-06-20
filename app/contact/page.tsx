"use client";

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, MessageSquare } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function ContactPage() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-35" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Contact" description="Premium contact layout for SaaS website inquiries, collaboration, and support." />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.55fr]">
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-8">
            <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
            <p className="mt-5 text-sm leading-7 text-muted">Reach out by email, WhatsApp, or use the contact form for premium software project discussions.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[32px] bg-[#08172f] p-6">
                <div className="flex items-center gap-3 text-accent"><Mail size={20} /><span className="text-sm font-semibold">Email</span></div>
                <p className="mt-4 text-sm text-muted">hello@ahmedfsdev.com</p>
              </div>
              <div className="rounded-[32px] bg-[#08172f] p-6">
                <div className="flex items-center gap-3 text-accent"><MessageSquare size={20} /><span className="text-sm font-semibold">WhatsApp</span></div>
                <p className="mt-4 text-sm text-muted">201550534011</p>
              </div>
              <div className="rounded-[32px] bg-[#08172f] p-6">
                <div className="flex items-center gap-3 text-accent"><Phone size={20} /><span className="text-sm font-semibold">Phone</span></div>
                <p className="mt-4 text-sm text-muted">Available for project consultations and quick responses.</p>
              </div>
              <div className="rounded-[32px] bg-[#08172f] p-6">
                <div className="flex items-center gap-3 text-accent"><MessageCircle size={20} /><span className="text-sm font-semibold">Social</span></div>
                <p className="mt-4 text-sm text-muted">LinkedIn, Twitter, GitHub placeholders for premium presence.</p>
              </div>
            </div>
          </motion.section>

          <aside className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-8">
              <h2 className="text-2xl font-semibold text-white">Contact Form</h2>
              <p className="mt-4 text-sm leading-7 text-muted">Use the form below to share your project idea or ask about a custom SaaS system.</p>
              <div className="mt-6 space-y-4 text-sm text-white/80">
                <div className="rounded-3xl bg-[#08172f] p-4">Name</div>
                <div className="rounded-3xl bg-[#08172f] p-4">Email</div>
                <div className="rounded-3xl bg-[#08172f] p-4">Message</div>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
                Start Project on WhatsApp
              </button>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
