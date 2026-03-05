import Link from 'next/link'
import React from 'react'

export default function Header({ isScrolled }: { isScrolled: boolean }) {
    return (
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
    )
}
