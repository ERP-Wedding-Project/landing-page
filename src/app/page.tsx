"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
            {/* Header */}
            <header
              className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-4 md:px-10 py-3 mb-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl sticky top-4 z-50 transition-all ${isScrolled ? "shadow-lg" : ""
                }`}
            >
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-2xl">favorite</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
                  Wedhub
                </h2>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                <nav className="flex items-center gap-9">
                  <Link
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal"
                  >
                    Fitur
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal"
                  >
                    Cara Kerja
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal"
                  >
                    Testimoni
                  </Link>
                </nav>
                <div className="flex gap-2">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent text-primary hover:bg-primary/10 transition-all text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Masuk</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-secondary text-white hover:bg-primary transition-all text-sm font-bold leading-normal tracking-[0.015em] shadow-md hover:shadow-lg">
                    <span className="truncate">Mulai Merencanakan</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <section className="w-full mb-20">
              <div className="p-0 md:p-4 relative">
                {/* Decorative floating elements */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-secondary/40 rounded-full blur-[2px] z-20"></div>
                <div className="absolute bottom-20 right-20 w-6 h-6 bg-primary/30 rounded-full blur-[1px] z-20"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary/50 rounded-full blur-[2px] z-20"></div>

                <div
                  className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 relative overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: `linear-gradient(rgba(33, 17, 21, 0.4) 0%, rgba(33, 17, 21, 0.7) 100%), url("/hero_wedding.png")`,
                  }}
                >
                  <div className="flex flex-col gap-6 text-center relative z-10 max-w-3xl items-center">
                    <div className="bg-white/90 dark:bg-slate-800/90 text-primary px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg border border-primary/20 relative">
                      Perencanaan Pernikahan Profesional
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 dark:bg-slate-800/90 rotate-45 border-b border-r border-primary/20"></div>
                    </div>
                    <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl drop-shadow-lg">
                      Mulai Rencanakan Pernikahan Impian Anda
                    </h1>
                    <p className="text-white/90 text-lg font-medium leading-relaxed max-w-2xl drop-shadow-md">
                      Paduan sempurna antara keanggunan floral dan manajemen profesional. Kelola anggaran, daftar tamu,
                      dan tugas dengan mudah.
                    </p>
                    <div className="flex flex-wrap gap-4 flex justify-center relative z-10 mt-6">
                      <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-cta text-white hover:scale-105 transition-transform text-lg font-bold leading-normal tracking-[0.015em] shadow-xl shadow-primary/30">
                        <span className="truncate">Mulai Merencanakan</span>
                      </button>
                      <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all text-lg font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Lihat Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="flex flex-col gap-10 px-4 py-16 mb-10">
              <div className="flex flex-col gap-4 text-center items-center">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Cara Kerja</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight md:text-4xl max-w-[720px]">
                  3 Langkah Mudah Menuju Hari Bahagia
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8 justify-center relative mt-8">
                <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-primary/20 z-0"></div>

                {[
                  { icon: "person_add", title: "1. Buat Profil", desc: "Masukkan tanggal pernikahan dan visi Anda untuk mendapatkan rekomendasi personal." },
                  { icon: "checklist", title: "2. Ikuti Checklist", desc: "Selesaikan tugas mingguan yang disesuaikan dengan timeline pernikahan Anda.", highlighted: true },
                  { icon: "pie_chart", title: "3. Kelola Anggaran", desc: "Pantau pengeluaran dengan visualisasi data yang mudah dipahami." },
                ].map((step, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center text-center gap-4 relative z-10 group cursor-pointer">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:-translate-y-2 ${step.highlighted
                        ? "bg-background-light dark:bg-slate-800 border-2 border-primary"
                        : "bg-white dark:bg-slate-800 border border-primary/30 group-hover:bg-primary/5"
                      }`}>
                      <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-[250px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Smart Checklist & Budget Visualization */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-16 mb-20 bg-white/40 dark:bg-slate-900/40 rounded-3xl border border-white/50 backdrop-blur-sm">
              <div className="flex flex-col gap-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-primary/10">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">fact_check</span> Checklist Cerdas
                  </h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">Bulan Ini</span>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Pesan Gedung Resepsi", meta: "Tenggat: 15 Okt • Prioritas Tinggi", completed: false },
                    { title: "Tentukan Tema Warna", meta: "Selesai pada 1 Okt", completed: true },
                    { title: "Survey Katering", meta: "Tenggat: 20 Okt • Anggaran: Rp 50Jt", completed: false },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-4 p-4 rounded-xl transition-colors cursor-pointer border ${item.completed
                        ? "bg-primary/5 border-primary/20 opacity-70"
                        : "bg-slate-50 dark:bg-slate-700/50 hover:bg-primary/5 border-transparent hover:border-primary/20"
                      }`}>
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 mt-1 flex items-center justify-center ${item.completed ? "bg-primary text-white" : "border-2 border-primary/50"
                        }`}>
                        {item.completed && <span className="material-symbols-outlined text-sm">check</span>}
                      </div>
                      <div>
                        <p className={`font-bold text-slate-900 dark:text-white ${item.completed ? "line-through" : ""}`}>
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-primary/10">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">donut_large</span> Visualisasi Anggaran
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  <div
                    className="relative w-48 h-48 rounded-full shadow-inner flex items-center justify-center transition-transform hover:scale-105 duration-500"
                    style={{ background: "conic-gradient(#BF9270 0% 40%, #E3B7A0 40% 70%, #f1f5f9 70% 85%, #cbd5e1 85% 100%)" }}
                  >
                    <div className="w-32 h-32 bg-white dark:bg-slate-800 rounded-full flex flex-col items-center justify-center shadow-md">
                      <span className="text-sm text-slate-500 font-medium">Total Anggaran</span>
                      <span className="text-xl font-black text-slate-900 dark:text-white mt-1">Rp 150Jt</span>
                    </div>
                  </div>
                  <div className="w-full space-y-3">
                    {[
                      { label: "Gedung & Katering (40%)", amount: "Rp 60Jt", color: "bg-primary" },
                      { label: "Dekorasi & Busana (30%)", amount: "Rp 45Jt", color: "bg-secondary" },
                    ].map((row, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${row.color}`}></div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{row.label}</span>
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white">{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Premium CTA Banner */}
            <section
              className="relative flex flex-col items-center justify-center py-24 px-8 mb-20 rounded-3xl overflow-hidden bg-fixed bg-center bg-cover"
              style={{
                backgroundColor: "#BF9270",
                backgroundImage: `linear-gradient(rgba(191, 146, 112, 0.8), rgba(191, 146, 112, 0.9)), url("/hero_wedding.png")`
              }}
            >
              <div className="relative z-10 text-center max-w-3xl">
                <span className="material-symbols-outlined text-5xl text-white mb-6">workspace_premium</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Dirancang Untuk Pasangan Modern Yang Terorganisir
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed">
                  Baik Anda memiliki anggaran ketat atau merencanakan pesta mewah, Wedhub memberikan kendali penuh atas setiap detail persiapan pernikahan Anda.
                </p>
                <button className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                  Mulai Perencanaan Gratis
                </button>
              </div>
            </section>

            {/* Testimonials */}
            <section className="px-4 py-20 bg-background-light dark:bg-slate-900/20 rounded-3xl mb-20 border border-primary/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div className="text-center mb-16 relative z-10">
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em]">
                  Pasangan Bahagia Kami
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-4 font-medium text-lg">
                  Cerita nyata dari pernikahan yang terorganisir sempurna.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {[
                  { name: "Anna & Tom", img: "/couple_1.png", review: '"Wedhub membuat proses perencanaan kami sangat mulus dan bebas stres. Fitur checklist-nya adalah penyelamat sejati!"' },
                  { name: "Sarah & James", img: "/couple_2.png", review: '"Visualisasi anggaran sangat membantu kami tetap di jalur. Kami berhasil menghemat dan tetap mendapatkan pernikahan impian kami."', offset: true },
                  { name: "Emily & Michael", img: "/couple_3.png", review: '"Kombinasi antara desain elegan dan alat yang profesional. Sangat merekomendasikan Wedhub untuk setiap calon pengantin."', partial: true },
                ].map((user, idx) => (
                  <div key={idx} className={`flex flex-col gap-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/20 ${user.offset ? "md:-translate-y-4" : ""}`}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md">
                        <Image src={user.img} alt={user.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-slate-900 dark:text-white text-lg font-bold">{user.name}</p>
                        <div className="flex text-primary">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="material-symbols-outlined text-sm">
                              {star === 5 && user.partial ? "star_half" : "star"}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium leading-relaxed italic">
                      {user.review}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Siap Memulai Perjalanan Anda?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
                Bergabunglah dengan ribuan pasangan yang telah berhasil merencanakan pernikahan impian mereka dengan Wedhub.
              </p>
              <button className="px-10 py-5 bg-gradient-cta text-white rounded-full font-bold text-xl hover:shadow-[0_10px_25px_rgba(191,146,112,0.4)] hover:-translate-y-1 transition-all duration-300">
                Buat Akun Gratis Sekarang
              </button>
            </section>

            {/* Simple Footer */}
            <footer className="py-10 border-t border-primary/10 text-center text-slate-500 dark:text-slate-400 text-sm">
              <p>© 2024 Wedhub. Semua hak dilindungi undan-undang.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
