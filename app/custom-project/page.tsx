"use client";

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, MessageCircle, Phone, Send } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const projectTypes = ['Website Development', 'E-commerce System', 'Custom Web Application', 'Dashboard', 'AI Integration', 'Other'];
const budgets = ['<$500', '$2k-$5k', '$5k-$7k', '$10k+', 'Other'];
const whatsappNumber = '201550534011';

export default function CustomProjectPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: projectTypes[0], budget: budgets[0], description: '' });
  const message = useMemo(() => {
  return `🚀 New Project Inquiry

👤 Name: ${form.name}

📱 WhatsApp: ${form.phone}

📧 Email: ${form.email}

💼 Project Type: ${form.type}

💰 Budget: ${form.budget}

📝 Project Description:
${form.description}`;
}, [form]);
  const handleWhatsApp = () => {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-radial-glow opacity-30" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Custom Project" description="Start a premium SaaS system design project with a frontend-only submission experience." />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.55fr]">
          <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-8 space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-3 text-sm text-white/80">
                <span>Full Name</span>
                <input value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-[#08172f] px-4 py-3 text-white outline-none ring-primary/20 focus:border-accent focus:ring" />
              </label>
              <label className="space-y-3 text-sm text-white/80">
                <span>WhatsApp Number</span>
                <input value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} placeholder="+1234567890" className="w-full rounded-3xl border border-white/10 bg-[#08172f] px-4 py-3 text-white outline-none ring-primary/20 focus:border-accent focus:ring" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-3 text-sm text-white/80">
                <span>Email</span>
                <input value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-[#08172f] px-4 py-3 text-white outline-none ring-primary/20 focus:border-accent focus:ring" />
              </label>
              <label className="space-y-3 text-sm text-white/80">
                <span>Project Type</span>
                <select value={form.type} onChange={(event) => setForm((prev) => ({ ...prev, type: event.target.value }))} className="w-full rounded-3xl border border-white/10 bg-[#08172f] px-4 py-3 text-white outline-none ring-primary/20 focus:border-accent focus:ring">
                  {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                </select>
              </label>
            </div>
            <label className="space-y-3 text-sm text-white/80">
              <span>Budget Range</span>
              <select value={form.budget} onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))} className="w-full rounded-3xl border border-white/10 bg-[#08172f] px-4 py-3 text-white outline-none ring-primary/20 focus:border-accent focus:ring">
                {budgets.map((budget) => (<option key={budget} value={budget}>{budget}</option>))}
              </select>
              <p className="mt-2 text-sm text-gray-400">
  Selected budget is indicative. The final cost may be lower or higher depending on project complexity and agreed scope.
</p>
            </label>
            <label className="space-y-3 text-sm text-white/80">
              <span>Project Description</span>
              <textarea value={form.description} onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))} rows={6} placeholder="Briefly describe your product vision, goals, and must-have features." className="w-full rounded-[28px] border border-white/10 bg-[#08172f] px-4 py-4 text-white outline-none ring-primary/20 focus:border-accent focus:ring" />
            </label>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1 text-sm text-muted">
                <p className="text-white">Ready to discuss your project?</p>
                <p>WhatsApp will open with your details pre-filled.</p>
              </div>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
                Send via WhatsApp <Send size={16} />
              </a>
            </div>
          </motion.form>

          <aside className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-6">
              <div className="flex items-center gap-3 text-accent">
                <Globe2 size={24} />
                <h2 className="text-xl font-semibold text-white">Premium Project Inquiry</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">No backend needed. Use this front-end form to share your project requirements and get a polished WhatsApp submission.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[32px] border border-white/10 p-6">
              <div className="flex items-center gap-3 text-accent">
                <Phone size={24} />
                <h2 className="text-xl font-semibold text-white">Direct Contact</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">Reach out via WhatsApp for fast responses, onboarding details, and project timelines.</p>
              <div className="mt-5 space-y-3 text-sm text-white/80">
                <p>Phone: 201550534011</p>
                <p>Email: hello@ahmedfsdev.com</p>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
