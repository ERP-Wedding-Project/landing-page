"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────
interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: string;
  gradient: string;
}

interface Step {
  icon: string;
  title: string;
  desc: string;
  highlighted?: boolean;
}

interface ChecklistItem {
  title: string;
  meta: string;
  completed: boolean;
  priority?: "high" | "medium";
}

interface BudgetRow {
  label: string;
  amount: string;
  percent: number;
  color: string;
}

interface Testimonial {
  name: string;
  img: string;
  role: string;
  review: string;
  rating: number;
  offset?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const features: Feature[] = [
  {
    icon: "checklist",
    title: "Checklist Cerdas",
    desc: "Timeline otomatis disesuaikan dengan tanggal pernikahan Anda. Tidak ada lagi yang terlewat.",
    color: "text-primary",
    gradient: "from-primary/20 to-secondary/10",
  },
  {
    icon: "pie_chart",
    title: "Manajemen Anggaran",
    desc: "Visualisasi pengeluaran real-time. Pantau setiap rupiah dengan grafik yang intuitif.",
    color: "text-rose-400",
    gradient: "from-rose-400/20 to-orange-300/10",
  },
  {
    icon: "groups",
    title: "Daftar Tamu",
    desc: "Kelola undangan, konfirmasi kehadiran, dan tempat duduk secara terorganisir.",
    color: "text-violet-400",
    gradient: "from-violet-400/20 to-purple-300/10",
  },
  {
    icon: "storefront",
    title: "Vendor Terpercaya",
    desc: "Temukan vendor terbaik — fotografer, katering, dekorasi — semuanya dalam satu platform.",
    color: "text-emerald-400",
    gradient: "from-emerald-400/20 to-teal-300/10",
  },
];

const steps: Step[] = [
  {
    icon: "person_add",
    title: "Buat Profil",
    desc: "Masukkan tanggal pernikahan dan visi Anda untuk mendapatkan rekomendasi yang dipersonalisasi.",
  },
  {
    icon: "checklist",
    title: "Ikuti Checklist",
    desc: "Selesaikan tugas mingguan yang disesuaikan otomatis dengan timeline pernikahan Anda.",
    highlighted: true,
  },
  {
    icon: "pie_chart",
    title: "Kelola Anggaran",
    desc: "Pantau pengeluaran dengan visualisasi data yang mudah dipahami kapan saja.",
  },
];

const checklistItems: ChecklistItem[] = [
  { title: "Pesan Gedung Resepsi", meta: "Tenggat: 15 Okt", completed: false, priority: "high" },
  { title: "Tentukan Tema Warna", meta: "Selesai pada 1 Okt", completed: true },
  { title: "Survey Katering", meta: "Tenggat: 20 Okt", completed: false, priority: "medium" },
  { title: "Booking Fotografer", meta: "Tenggat: 30 Okt", completed: false, priority: "medium" },
];

const budgetRows: BudgetRow[] = [
  { label: "Gedung & Katering", amount: "Rp 60Jt", percent: 40, color: "bg-primary" },
  { label: "Dekorasi & Busana", amount: "Rp 45Jt", percent: 30, color: "bg-secondary" },
  { label: "Fotografer & Video", amount: "Rp 22.5Jt", percent: 15, color: "bg-rose-400" },
  { label: "Lain-lain", amount: "Rp 22.5Jt", percent: 15, color: "bg-slate-300" },
];

const testimonials: Testimonial[] = [
  {
    name: "Anna & Tom",
    img: "/couple_1.png",
    role: "Menikah Oktober 2024",
    review: "Wedhub membuat proses perencanaan kami sangat mulus dan bebas stres. Fitur checklist-nya adalah penyelamat sejati! Semua terorganisir dengan sempurna.",
    rating: 5,
  },
  {
    name: "Sarah & James",
    img: "/couple_2.png",
    role: "Menikah Agustus 2024",
    review: "Visualisasi anggaran sangat membantu kami tetap di jalur. Kami berhasil menghemat 15% dan tetap mendapatkan pernikahan impian kami.",
    rating: 5,
    offset: true,
  },
  {
    name: "Emily & Michael",
    img: "/couple_3.png",
    role: "Menikah Desember 2024",
    review: "Kombinasi antara desain elegan dan alat yang profesional. Sangat merekomendasikan Wedhub untuk setiap calon pengantin.",
    rating: 5,
  },
];

// ─── Section Reveal Hook ──────────────────────────────────────────────────────
function useSectionReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    const els = ref.current?.querySelectorAll(".section-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useSectionReveal(pageRef as React.RefObject<HTMLElement>);

  return (
    <div
      ref={pageRef}
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"
    >
      {/* Global ambient gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[1200px] flex-1 w-full">

            {/* Header */}
            <Header isScrolled={isScrolled} />

            {/* Hero */}
            <Hero />

            {/* ── Features Grid ─────────────────────────────────────────── */}
            <section id="features" className="mb-24 px-2">
              <div className="section-reveal text-center mb-14">
                <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                  Fitur Unggulan
                </span>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight max-w-2xl mx-auto">
                  Semua yang Anda Butuhkan{" "}
                  <span className="text-gradient">dalam Satu Platform</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {features.map((f, idx) => (
                  <div
                    key={idx}
                    className={`section-reveal delay-${(idx + 1) * 100} feature-card relative group bg-white dark:bg-slate-800/80 rounded-2xl p-6 hover-lift border border-primary/10 dark:border-primary/5 overflow-hidden cursor-pointer`}
                  >
                    {/* Card glow bg */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                    <div className="relative z-10 flex flex-col gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} border border-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`material-symbols-outlined ${f.color} text-2xl`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          {f.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-slate-900 dark:text-white font-bold text-base mb-1.5">{f.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                      <div className={`flex items-center gap-1 ${f.color} text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300`}>
                        Pelajari lebih
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── How It Works ──────────────────────────────────────────── */}
            <section id="how-it-works" className="mb-24 px-2">
              <div className="section-reveal text-center mb-14">
                <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                  Cara Kerja
                </span>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight max-w-2xl mx-auto">
                  3 Langkah Mudah{" "}
                  <span className="text-gradient">Menuju Hari Bahagia</span>
                </h2>
              </div>

              <div className="relative">
                {/* Connector line */}
                <div className="hidden md:block absolute top-[56px] left-[calc(16.6%+20px)] right-[calc(16.6%+20px)] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`section-reveal delay-${(idx + 1) * 200} flex-1 flex flex-col items-center text-center gap-4 group cursor-pointer`}
                    >
                      <div className={`relative w-28 h-28 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(191,146,112,0.3)] ${
                        step.highlighted
                          ? "bg-gradient-cta border-2 border-primary/50"
                          : "bg-white dark:bg-slate-800 border-2 border-primary/20 group-hover:border-primary/50"
                      }`}>
                        {/* Step number */}
                        <span className={`absolute -top-3 -right-3 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${
                          step.highlighted ? "bg-white text-primary" : "bg-primary text-white"
                        }`}>
                          {idx + 1}
                        </span>
                        <span
                          className={`material-symbols-outlined text-4xl ${step.highlighted ? "text-white" : "text-primary"}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {step.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[220px] mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Smart Dashboard Mockup ─────────────────────────────────── */}
            <section className="mb-24 px-2" id="dashboard-preview">
              <div className="section-reveal bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-primary/10 dark:border-primary/5 shadow-[0_8px_40px_rgba(191,146,112,0.1)] overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-6 py-4 border-b border-primary/10 dark:border-white/5 bg-white/60 dark:bg-slate-900/60">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4 bg-slate-100 dark:bg-slate-800 rounded-full h-6 flex items-center px-4">
                    <span className="text-xs text-slate-400 font-mono">app.wedhub.id/dashboard</span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-base">lock</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Checklist Panel */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-primary/10 dark:border-white/5">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                            fact_check
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Checklist Cerdas</h3>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                        Bulan Ini
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                        <span>Progress Keseluruhan</span>
                        <span className="text-primary">25%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-cta progress-bar transition-all duration-1000"
                          style={{ width: "25%" }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {checklistItems.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 cursor-pointer border ${
                            item.completed
                              ? "bg-primary/5 border-primary/15 opacity-70"
                              : "bg-slate-50 dark:bg-slate-800/60 hover:bg-primary/5 border-transparent hover:border-primary/20"
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border-2 transition-colors ${
                              item.completed ? "bg-primary border-primary" : "border-primary/40"
                            }`}
                          >
                            {item.completed && (
                              <span className="material-symbols-outlined text-white" style={{ fontSize: "12px" }}>
                                check
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-semibold text-sm text-slate-900 dark:text-white truncate ${item.completed ? "line-through" : ""}`}>
                              {item.title}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">{item.meta}</p>
                          </div>
                          {item.priority && !item.completed && (
                            <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${
                              item.priority === "high"
                                ? "bg-red-100 text-red-500 dark:bg-red-900/30"
                                : "bg-orange-100 text-orange-500 dark:bg-orange-900/30"
                            }`}>
                              {item.priority === "high" ? "Penting" : "Sedang"}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget Panel */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-rose-400/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-rose-400 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                          donut_large
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Visualisasi Anggaran</h3>
                    </div>

                    {/* Donut chart */}
                    <div className="flex items-center justify-center mb-8">
                      <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="14" />
                          <circle cx="50" cy="50" r="38" fill="none" stroke="#BF9270" strokeWidth="14"
                            strokeDasharray="239.4" strokeDashoffset="0" />
                          <circle cx="50" cy="50" r="38" fill="none" stroke="#E3B7A0" strokeWidth="14"
                            strokeDasharray="239.4" strokeDashoffset="143.6" />
                          <circle cx="50" cy="50" r="38" fill="none" stroke="#f87171" strokeWidth="14"
                            strokeDasharray="239.4" strokeDashoffset="215.5" />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-xs text-slate-400 font-medium">Total</span>
                          <span className="text-lg font-black text-slate-900 dark:text-white">Rp 150Jt</span>
                          <span className="text-xs text-emerald-500 font-semibold">Hemat 8%</span>
                        </div>
                      </div>
                    </div>

                    {/* Budget rows */}
                    <div className="space-y-3">
                      {budgetRows.map((row, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${row.color}`} />
                          <div className="flex-1">
                            <div className="flex justify-between text-xs font-semibold mb-1">
                              <span className="text-slate-600 dark:text-slate-300">{row.label}</span>
                              <span className="text-slate-900 dark:text-white">{row.amount}</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${row.color}`}
                                style={{ width: `${row.percent}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── CTA Banner ────────────────────────────────────────────── */}
            <section className="mb-24 px-2">
              <div
                className="section-reveal relative flex flex-col items-center justify-center py-20 px-8 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1A0E12 0%, #2D1520 50%, #1A0E12 100%)",
                }}
              >
                {/* Glow orbs */}
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />

                {/* Decorative ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

                {/* Floating dots */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-primary/40 rounded-full animate-float" />
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-secondary/40 rounded-full animate-float-reverse" />
                <div className="absolute top-1/2 right-16 w-1.5 h-1.5 bg-white/20 rounded-full animate-float-slow" />

                <div className="relative z-10 text-center max-w-3xl">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 mb-8">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    Dirancang untuk Pasangan Modern
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Pernikahan Impian <br />
                    <span className="text-shimmer">Dimulai dari Sini</span>
                  </h2>
                  <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed max-w-xl mx-auto">
                    Baik anggaran ketat atau pesta mewah — Wedhub memberi kendali penuh atas setiap detail persiapan pernikahan Anda.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-cta text-white rounded-full font-bold text-base hover:shadow-[0_12px_40px_rgba(191,146,112,0.5)] hover:-translate-y-1 transition-all duration-300">
                      <span className="relative z-10">Mulai Perencanaan Gratis</span>
                      <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Testimonials ──────────────────────────────────────────── */}
            <section id="testimonials" className="mb-24 px-2">
              <div className="section-reveal text-center mb-14">
                <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                  Testimoni
                </span>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">
                  Pasangan <span className="text-gradient">Bahagia</span> Kami
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-base max-w-lg mx-auto">
                  Cerita nyata dari pernikahan yang terorganisir sempurna.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((user, idx) => (
                  <div
                    key={idx}
                    className={`section-reveal delay-${(idx + 1) * 200} group bg-white dark:bg-slate-800/80 p-7 rounded-2xl hover-lift border border-primary/10 dark:border-primary/5 flex flex-col gap-5 ${
                      user.offset ? "md:-translate-y-5 md:border-primary/30" : ""
                    }`}
                  >
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: user.rating }).map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-amber-400 text-base"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1 italic">
                      &ldquo;{user.review}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                        <Image src={user.img} alt={user.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white font-bold text-sm">{user.name}</p>
                        <p className="text-slate-400 text-xs">{user.role}</p>
                      </div>
                      <div className="ml-auto">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                            favorite
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────────────────────────── */}
            <section className="section-reveal flex flex-col items-center justify-center py-20 px-4 text-center mb-10 relative">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-[0_8px_24px_rgba(191,146,112,0.4)] mb-6 animate-pulse-glow">
                  <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                  Siap Memulai <span className="text-gradient">Perjalanan</span> Anda?
                </h2>
                <p className="text-base text-slate-500 dark:text-slate-400 mb-10 max-w-lg">
                  Bergabunglah dengan ribuan pasangan yang telah berhasil merencanakan pernikahan impian mereka dengan Wedhub.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="group relative overflow-hidden px-10 py-5 bg-gradient-cta text-white rounded-full font-bold text-lg hover:shadow-[0_16px_48px_rgba(191,146,112,0.45)] hover:-translate-y-1 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      Buat Akun Gratis Sekarang
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
                    Pelajari Lebih Lanjut
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-slate-400 text-xs font-medium">
                  {[
                    { icon: "lock", label: "Data Aman & Terenkripsi" },
                    { icon: "credit_card_off", label: "Gratis Tanpa Kartu Kredit" },
                    { icon: "cancel", label: "Batalkan Kapan Saja" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-sm">{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Footer ────────────────────────────────────────────────── */}
            <footer className="py-10 border-t border-primary/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-cta flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                  <span className="font-black text-slate-700 dark:text-slate-300">
                    Wed<span className="text-gradient">hub</span>
                  </span>
                </div>
                <p className="text-slate-400 text-sm">© 2024 Wedhub. Semua hak dilindungi undang-undang.</p>
                <div className="flex gap-4 text-slate-400 text-sm">
                  <a href="#" className="hover:text-primary transition-colors">Privasi</a>
                  <a href="#" className="hover:text-primary transition-colors">Ketentuan</a>
                  <a href="#" className="hover:text-primary transition-colors">Kontak</a>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}
