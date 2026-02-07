'use client';

import React from 'react';
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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 px-3 py-1 rounded-full bg-[var(--card)]/10 backdrop-blur border border-[var(--border)] text-sm text-[var(--muted-foreground)]">
        <ul className="flex gap-2 items-center">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className="px-3 py-1 rounded-md hover:bg-white/8 transition-colors"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="w-px h-6 bg-white/8 mx-2" />

        <button
          onClick={() => {
            // trigger the state toggle; effect will add the CSS transition class
            setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
          }}
          aria-label="Toggle theme"
          className="p-1 rounded-md hover:bg-white/8 transition-colors flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}
