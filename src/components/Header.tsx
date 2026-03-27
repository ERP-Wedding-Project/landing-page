"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Header({ isScrolled }: { isScrolled: boolean }) {
  const navRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const links = navRef.current?.querySelectorAll("a");
    links?.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.setProperty("--underline-width", "100%");
      });
      link.addEventListener("mouseleave", () => {
        link.style.setProperty("--underline-width", "0%");
      });
    });
  }, []);

  return (
    <header
      className={`flex items-center justify-between whitespace-nowrap px-5 md:px-8 py-3 mb-10 sticky top-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "glass-card shadow-[0_8px_32px_rgba(191,146,112,0.18)]"
          : "bg-white/30 dark:bg-slate-900/20 backdrop-blur-md border border-white/40 dark:border-white/10"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-cta shadow-md">
          <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            favorite
          </span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">
          Wed<span className="text-gradient">hub</span>
        </h2>
      </div>

      {/* Desktop Nav */}
      <nav ref={navRef} className="hidden md:flex items-center gap-8">
        {[
          { label: "Fitur", href: "#features" },
          { label: "Cara Kerja", href: "#how-it-works" },
          { label: "Testimoni", href: "#testimonials" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="relative text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-300 text-sm font-semibold group"
          >
            {label}
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-cta rounded-full transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="hidden md:flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button
          id="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="relative w-9 h-9 flex items-center justify-center rounded-full border border-primary/20 bg-white/60 dark:bg-slate-800/60 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(191,146,112,0.35)] group overflow-hidden"
        >
          {/* Sun icon (shown in dark mode to switch to light) */}
          <span
            className={`material-symbols-outlined text-amber-500 text-[18px] absolute transition-all duration-300 ${
              theme === 'dark'
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 rotate-90 scale-50'
            }`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            light_mode
          </span>
          {/* Moon icon (shown in light mode to switch to dark) */}
          <span
            className={`material-symbols-outlined text-slate-600 dark:text-slate-300 text-[18px] absolute transition-all duration-300 ${
              theme === 'light'
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-50'
            }`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dark_mode
          </span>
          {/* Glow ring on hover */}
          <span className="absolute inset-0 rounded-full ring-0 ring-primary/30 group-hover:ring-2 transition-all duration-300" />
        </button>

        <button className="text-primary font-semibold text-sm px-5 py-2 rounded-full hover:bg-primary/10 transition-all duration-300">
          Masuk
        </button>
        <button className="relative overflow-hidden text-white text-sm font-bold px-6 py-2.5 rounded-full bg-gradient-cta shadow-lg hover:shadow-[0_8px_24px_rgba(191,146,112,0.45)] hover:-translate-y-0.5 transition-all duration-300 group">
          <span className="relative z-10">Mulai Merencanakan</span>
          <div className="absolute inset-0 bg-white/15 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
        </button>
      </div>

      {/* Mobile Right Side: Theme Toggle + Hamburger */}
      <div className="md:hidden flex items-center gap-2">
        {/* Theme Toggle (mobile) */}
        <button
          id="theme-toggle-btn-mobile"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="relative w-9 h-9 flex items-center justify-center rounded-full border border-primary/20 bg-white/60 dark:bg-slate-800/60 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 overflow-hidden"
        >
          <span
            className={`material-symbols-outlined text-amber-500 text-[18px] absolute transition-all duration-300 ${
              theme === 'dark'
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 rotate-90 scale-50'
            }`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            light_mode
          </span>
          <span
            className={`material-symbols-outlined text-slate-600 dark:text-slate-300 text-[18px] absolute transition-all duration-300 ${
              theme === 'light'
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-50'
            }`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            dark_mode
          </span>
        </button>

        {/* Hamburger */}
        <button className="text-primary p-2 rounded-xl hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-xl">menu</span>
        </button>
      </div>
    </header>
  );
}
