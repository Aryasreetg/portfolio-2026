'use client';

import { useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function subscribeTheme(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => obs.disconnect();
}
const getIsDark = () => document.documentElement.classList.contains('dark');

function toggleTheme() {
  const dark = !getIsDark();
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

export default function Navbar() {
  const isDark = useSyncExternalStore(subscribeTheme, getIsDark, () => true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent-fill"
      />
      <div
        className={cn(
          'transition-all duration-500',
          scrolled || open
            ? 'border-b border-line bg-canvas/75 backdrop-blur-xl'
            : 'border-b border-transparent',
        )}
      >
        <nav className="container-x flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-serif text-lg italic text-canvas transition-transform duration-500 group-hover:rotate-[360deg]">
              a
            </span>
            <span className="text-sm font-medium tracking-tight">Aryasree</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm text-dim transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-dim transition-colors hover:text-ink"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="/resume.pdf" download className="btn-solid hidden !py-2 sm:inline-flex">
              Résumé
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="container-x overflow-hidden md:hidden"
            >
              {links.map((l) => (
                <li key={l.href} className="border-t border-line">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-2xl font-medium tracking-tight"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-line py-5">
                <a href="/resume.pdf" download className="btn-solid">
                  Download résumé
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
