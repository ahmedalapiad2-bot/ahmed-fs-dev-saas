"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

const ANIMATED_WORDS = ['Solution.', 'Platform.', 'System.', 'Software.', 'Product.'];
const PAUSE_DURATION = 1000;

function TypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState(0);

  const currentWord = ANIMATED_WORDS[wordIndex];
  const typeDuration = reduceMotion ? 0 : Math.max(0.25, currentWord.length * (isMobile ? 0.06 : 0.08));
  const deleteDuration = reduceMotion ? 0 : Math.max(0.15, currentWord.length * (isMobile ? 0.04 : 0.06));

  const caretTransition = useMemo(() => {
    if (reduceMotion) return { duration: 0 };
    if (isMobile) return { duration: 0.35, repeat: 0 };
    return { duration: 0.6, repeat: Infinity };
  }, [isMobile, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      const timeout = window.setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
      }, PAUSE_DURATION);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      if (phase === 'typing') {
        setPhase('pause');
      } else if (phase === 'pause') {
        setPhase('deleting');
      } else {
        setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
        setPhase('typing');
      }
    },
    phase === 'typing' ? typeDuration * 1000
      : phase === 'pause' ? PAUSE_DURATION
      : deleteDuration * 1000);

    return () => window.clearTimeout(timeout);
  }, [phase, currentWord, deleteDuration, reduceMotion, typeDuration]);

  return (
    <span className="relative inline-flex max-w-full flex-wrap items-center justify-center">
      <span className="invisible whitespace-nowrap">{currentWord}</span>

      <span className="absolute inset-0 overflow-hidden">
        {ANIMATED_WORDS.map((word, index) => {
          const isActive = index === wordIndex;
          const shouldReveal = isActive && phase !== 'deleting';
          const shouldHide = isActive && phase === 'deleting';

          return (
            <motion.span
              key={word}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                width: shouldReveal ? '100%' : shouldHide ? '0%' : '0%',
              }}
              transition={{
                width: {
                  duration: shouldReveal ? typeDuration : shouldHide ? deleteDuration : 0,
                  ease: 'linear',
                },
                opacity: { duration: 0.15, ease: 'easeInOut' },
              }}
              className="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                {word}
              </span>
            </motion.span>
          );
        })}
      </span>

      <motion.span
        animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0] }}
        transition={caretTransition}
        className="ml-0.5 inline-block h-[1em] w-1 bg-gradient-to-r from-blue-400 to-purple-600"
      />
    </span>
  );
}

export function ModernHero() {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const enterTransition = useMemo(() => {
    if (reduceMotion) return { duration: 0 };
    if (isMobile) return { duration: 0.35 };
    return { duration: 0.6 };
  }, [isMobile, reduceMotion]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050814]">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large radial glow top-left (blue) - reduced on mobile via responsive classes */}
        <div className="absolute -top-20 -left-20 h-64 w-64 md:-top-40 md:-left-40 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/10 blur-[32px] md:blur-[120px]" />
        {/* Large radial glow bottom-right (purple) */}
        <div className="absolute -bottom-20 -right-20 h-64 w-64 md:-bottom-40 md:-right-40 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/10 blur-[32px] md:blur-[120px]" />
        {/* Mid-center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-[24px] md:blur-[100px]" />
      </div>

      {/* Perspective Grid (Left Side) */}
      <svg className="absolute left-0 top-0 h-full w-1/3 opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Curved Swoosh Line (Right Side) */}
      <svg className="absolute right-0 top-0 h-full w-1/4 opacity-20" preserveAspectRatio="none">
        <path
          d="M 0,0 Q 100,200 80,400 T 50,800"
          stroke="url(#swooshGradient)"
          strokeWidth="2"
          fill="none"
          filter="drop-shadow(0 0 8px rgba(59,130,246,0.6))"
        />
        <defs>
          <linearGradient id="swooshGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,1)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-14 text-center sm:px-8 lg:px-12 lg:py-32">
        {/* Top Badge */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 6 : 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...(enterTransition as any), delay: 0.1 }}
          viewport={isMobile ? { once: true } : undefined}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Digital Solutions That Drive Growth
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 8 : 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...(enterTransition as any), delay: 0.2 }}
          viewport={isMobile ? { once: true } : undefined}
          className="mb-6 w-full max-w-3xl lg:max-w-5xl px-4"
        >
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[0.95]">
            <span className="block">Build Your Idea.</span>
            <span className="block inline-block">
              We Code The <span className="block sm:inline"><TypewriterWord /></span>
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 8 : 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...(enterTransition as any), delay: 0.3 }}
          viewport={isMobile ? { once: true } : undefined}
          className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl"
        >
          Building modern digital solutions that bring ideas to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 8 : 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...(enterTransition as any), delay: 0.4 }}
          viewport={isMobile ? { once: true } : undefined}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/demos"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-xl hover:shadow-blue-500/40"
          >
            Explore Demos
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/custom-project"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-500 bg-transparent px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-white transition hover:border-white hover:bg-white/5"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 8 : 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...(enterTransition as any), delay: 0.5 }}
          viewport={isMobile ? { once: true } : undefined}
          className="mb-10 sm:mb-16 flex flex-col items-center gap-3 sm:flex-row"
        >
          {/* Premium Trust Badge */}
          <motion.div
            animate={reduceMotion ? undefined : { y: isMobile ? [0, -1, 0] : [0, -2, 0] }}
            transition={{ duration: isMobile ? 2 : 4, repeat: isMobile || reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
            whileHover={isMobile ? undefined : { y: -4 }}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/8 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30">
              <Sparkles size={12} className="text-blue-300 group-hover:text-blue-200" />
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-white">End-to-End</div>
              <div className="text-[10px] leading-tight text-gray-400 group-hover:text-gray-300">
              Development
              </div>
            </div>
          </motion.div>
          <p className="text-sm text-gray-400">
            Built with modern technologies and scalable architecture
          </p>
        </motion.div>

        {/* Floating Hero Showcase */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: isMobile ? 20 : 40 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.6 }}
          viewport={isMobile ? { once: true } : undefined}
          className="relative mb-10 sm:mb-16 w-full max-w-3xl lg:max-w-5xl"
        >
          <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-28 w-28 md:h-44 md:w-44 rounded-full bg-blue-500/10 blur-[18px] md:blur-3xl opacity-40" />
          <div className="pointer-events-none absolute right-0 top-20 h-20 w-20 md:h-32 md:w-32 rounded-full bg-purple-500/10 blur-[16px] md:blur-3xl opacity-30" />
          <div className="pointer-events-none absolute left-0 top-28 h-16 w-16 md:h-24 md:w-24 rounded-full bg-cyan-400/10 blur-[16px] md:blur-3xl opacity-30" />

          {/* Large Center Window */}
          <motion.div
            animate={reduceMotion ? undefined : { y: isMobile ? [0, -4, 0] : [0, -8, 0] }}
            transition={{ duration: isMobile ? 4 : 8, repeat: isMobile || reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
            whileHover={isMobile ? undefined : { scale: 1.015 }}
            className={`relative mx-auto mb-10 w-full max-w-3xl ${isMobile && activeCard !== 0 ? "hidden" : "block"}`}
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_40px_80px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
              <div className="border-b border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-gray-400">
                  <span>Custom SaaS Platform</span>
                  <span className="text-blue-300">AI Automation</span>
                </div>
              </div>
              <div className="relative h-[280px] overflow-hidden sm:h-[420px]">
                <Image
                  src="https://www.brevitysoftware.com/wp-content/uploads/2025/07/Saas.png"
                  alt="Enterprise SaaS dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>
              <div className="space-y-3 px-6 py-5 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">AI Operations</p>
                <h3 className="text-2xl font-semibold text-white">Intelligent automation for modern teams</h3>
                <p className="max-w-2xl text-sm leading-6 text-gray-400">
                  Centralize cloud workflows, observability, and API orchestration in a premium enterprise workspace.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Left Secondary Window */}
          <motion.div
            initial={reduceMotion ? undefined : { x: -12, opacity: 0 }}
            animate={reduceMotion ? undefined : { x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={isMobile ? undefined : { scale: 1.02, y: -4 }}
            className={`absolute inset-x-0 left-1/2 top-10 z-20 -ml-80 w-64 -translate-x-1/2 ${isMobile ? (activeCard === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none") : "opacity-100"} transition-all duration-700`}
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 shadow-2xl backdrop-blur-2xl">
              <div className="border-b border-white/10 bg-slate-950/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
                PRODUCT DESIGN
              </div>
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src="https://thumbs.dreamstime.com/b/ui-ux-design-ai-analytics-dashboard-concept-laptop-keyboard-businessman-typing-virtual-icons-representing-user-431927739.jpg?w=768"
                  alt="PRODUCT DESIGN platform screenshot"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Secondary Window */}
          <motion.div
            initial={reduceMotion ? undefined : { x: 12, opacity: 0 }}
            animate={reduceMotion ? undefined : { x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            whileHover={isMobile ? undefined : { scale: 1.02, y: -4 }}
            className={`absolute right-0 top-32 z-10 w-60 ${isMobile ? (activeCard === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none") : "opacity-100"} transition-all duration-700`}
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/75 shadow-2xl backdrop-blur-2xl">
              <div className="border-b border-white/10 bg-slate-950/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-emerald-300">
                Cloud Infrastructure
              </div>
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src="https://caskgov.com/wp-content/uploads/2024/01/cloud-infrastructure-blog-post-jpg.webp"
                  alt="Cloud analytics dashboard screenshot"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <ChevronDown size={20} />
          <span className="text-sm">Scroll Down</span>
        </motion.div>
      </div>
    </div>
  );
}



