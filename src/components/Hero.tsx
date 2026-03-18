"use client";

import React, { useEffect, useRef } from 'react';

const stats = [
  { value: "10K+", label: "Pasangan Bahagia" },
  { value: "98%", label: "Tingkat Kepuasan" },
  { value: "50+", label: "Fitur Lengkap" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".section-reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full mb-24 relative" id="home">
      {/* Ambient background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 blob animate-float-slow pointer-events-none z-0 dark:bg-primary/5" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 blob animate-float-reverse pointer-events-none z-0 dark:bg-secondary/5" />

      {/* Main Hero Container */}
      <div
        className="relative flex min-h-[640px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-center justify-center p-8 md:p-16 overflow-hidden shadow-[0_32px_80px_rgba(26,14,18,0.3)]"
        style={{
          backgroundImage: `url("/hero_wedding.png")`,
        }}
      >
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-primary/30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-0" />

        {/* Animated ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/3 pointer-events-none z-0" />

        {/* Floating decorative particles */}
        <div className="absolute top-16 right-24 w-3 h-3 bg-primary/60 rounded-full blur-[1px] animate-float z-10" />
        <div className="absolute top-32 left-16 w-2 h-2 bg-secondary/70 rounded-full blur-[1px] animate-float-reverse z-10" />
        <div className="absolute bottom-24 right-32 w-4 h-4 bg-white/20 rounded-full blur-[2px] animate-float-slow z-10" />
        <div className="absolute bottom-32 left-24 w-2 h-2 bg-primary/50 rounded-full animate-float z-10" />

        {/* Content */}
        <div className="flex flex-col gap-7 text-center relative z-10 max-w-3xl items-center">
          {/* Badge */}
          <div className="section-reveal animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-white/20 shadow-lg">
              <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              Perencanaan Pernikahan Profesional
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Heading */}
          <div className="section-reveal delay-200">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl drop-shadow-xl">
              Mulai Rencanakan{" "}
              <span className="relative inline-block">
                <span className="text-shimmer">Pernikahan</span>
              </span>
              <br />
              <span className="text-white/90">Impian Anda</span>
            </h1>
          </div>

          {/* Description */}
          <p className="section-reveal delay-300 text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl">
            Paduan sempurna antara keanggunan floral dan manajemen profesional.
            Kelola anggaran, daftar tamu, dan setiap detail dengan mudah.
          </p>

          {/* CTAs */}
          <div className="section-reveal delay-400 flex flex-wrap gap-4 justify-center mt-2">
            <button className="group relative overflow-hidden flex items-center gap-2.5 cursor-pointer rounded-full h-14 px-8 bg-gradient-cta text-white text-base font-bold leading-normal shadow-[0_8px_30px_rgba(191,146,112,0.45)] hover:shadow-[0_12px_40px_rgba(191,146,112,0.6)] hover:-translate-y-0.5 transition-all duration-300">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
              <span>Mulai Merencanakan</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="flex items-center gap-2.5 cursor-pointer rounded-full h-14 px-8 bg-white/10 text-white backdrop-blur-md border border-white/25 hover:bg-white/20 hover:-translate-y-0.5 hover:border-white/40 transition-all duration-300 text-base font-semibold">
              <span className="material-symbols-outlined text-lg">play_circle</span>
              <span>Lihat Demo</span>
            </button>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="section-reveal delay-600 relative z-10 w-full max-w-lg mt-6">
          <div className="flex items-center justify-center gap-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden divide-x divide-white/15">
            {stats.map(({ value, label }, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center py-4 px-3 hover:bg-white/10 transition-colors">
                <span className="text-white font-black text-xl md:text-2xl">{value}</span>
                <span className="text-white/60 text-xs font-medium mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
