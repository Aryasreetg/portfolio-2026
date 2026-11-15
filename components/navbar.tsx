'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowDownToLine, Menu, Moon, Sun, X } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { cn } from '@/lib/utils';
import { ease } from './ui';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
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
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch {}
}

function ThemeButton() {
  const isDark = useSyncExternalStore(subscribeTheme, getIsDark, () => false);
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-10 w-10 place-items-center text-dim transition-colors hover:text-ink"
    >
      {isDark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 12));

  // Highlight the section in the middle of the viewport.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b transition-[background-color,border-color] duration-500',
          scrolled || open ? 'border-line bg-canvas/90 backdrop-blur-md' : 'border-transparent bg-canvas',
        )}
      >
        <nav aria-label="Primary" className="container-page flex h-[72px] items-center justify-between gap-6">
          <a href="#top" onClick={() => setOpen(false)} className="group flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center bg-btn font-display text-[13px] font-bold tracking-tight text-btn-ink transition-colors duration-300 group-hover:bg-accent-text"
            >
              AT
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-semibold tracking-tight">
                {personalInfo.fullName}
              </span>
              <span className="block text-[12px] text-faint">{personalInfo.currentRole}</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={cn(
                    'relative py-2 text-[15px] transition-colors duration-300',
                    active === l.id ? 'text-ink' : 'text-dim hover:text-ink',
                  )}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-500',
                      active === l.id ? 'w-full' : 'w-0',
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeButton />
            <a href={personalInfo.resume} download="Aryasree-TG-Resume.pdf" className="btn-secondary hidden px-4! py-2.5! text-sm! sm:inline-flex">
              <ArrowDownToLine size={15} aria-hidden /> Résumé
            </a>
            <button
              ref={menuButton}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-10 w-10 place-items-center lg:hidden"
            >
              {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="tone-ink fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-canvas text-ink lg:hidden"
          >
            <div className="container-page flex min-h-full flex-col justify-between py-8">
              <ul>
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.04 * i, ease }}
                    className="border-b border-line"
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-5 font-display text-[28px] font-semibold tracking-tight"
                    >
                      {l.label}
                      <span className="text-sm font-normal text-faint">{String(i + 1).padStart(2, '0')}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 space-y-6">
                <a href={personalInfo.resume} download="Aryasree-TG-Resume.pdf" className="btn-primary w-full">
                  <ArrowDownToLine size={16} aria-hidden /> Download résumé
                </a>
                <p className="text-sm text-dim">
                  {personalInfo.contact.email}
                  <br />
                  {personalInfo.contact.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
