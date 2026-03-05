import React from 'react'

export default function Hero() {
    return (
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
    )
}
