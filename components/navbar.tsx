'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved as 'dark' | 'light';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    // add a brief transition class for smoother theme changes
    const html = document.documentElement;
    html.classList.add('theme-transition');
    // toggle theme class and persist
    html.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    // remove transition class after animation completes
    const t = window.setTimeout(() => html.classList.remove('theme-transition'), 300);
    return () => clearTimeout(t);
  }, [theme]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-6">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--card)]/80 backdrop-blur-xl border border-[var(--border)] text-sm text-[var(--muted-foreground)] shadow-lg"
        >
          <ul className="flex gap-1 items-center">
            {sections.map((s) => (
              <motion.li key={s.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className="px-4 py-2 rounded-lg hover:bg-[var(--muted)]/60 hover:text-[var(--foreground)] transition-colors font-medium text-xs md:text-sm"
                >
                  {s.label}
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="w-px h-7 bg-[var(--border)] mx-3" />

          <motion.button
            onClick={() => {
              setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-[var(--muted)]/60 transition-colors flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
}
