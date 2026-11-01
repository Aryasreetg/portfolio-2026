'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, type LucideIcon } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useToday } from '@/lib/tenure';
import { Reveal } from './ui';

const icons: Record<string, LucideIcon> = { Github, Linkedin, Instagram };

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { email, socialLinks } = personalInfo.contact;
  const year = useToday().slice(0, 4);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden pt-20 md:pt-28">
      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-fill/10 blur-[140px]" />

      <div className="container-x relative">
        <Reveal>
          <div className="mb-8 flex items-center gap-4">
            <span className="eyebrow text-accent">06</span>
            <span className="h-px w-10 bg-line" />
            <span className="eyebrow">Contact</span>
          </div>
          <h2 className="text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.9] tracking-[-0.045em]">
            Let&apos;s build
            <br />
            <span className="font-serif font-normal italic text-accent">something great.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${email}`} className="btn-solid text-base">
              {email} <ArrowUpRight size={16} />
            </a>
            <button onClick={copy} className="btn-ghost" aria-label="Copy email address">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="flex gap-2">
            {socialLinks.map((l) => {
              const Icon = icons[l.icon];
              return (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.name}
                  className="grid h-12 w-12 place-items-center rounded-full border border-line text-dim transition-all duration-300 hover:-translate-y-1 hover:border-accent-fill hover:bg-accent-fill hover:text-accent-ink"
                >
                  {Icon ? <Icon size={18} /> : l.name[0]}
                </a>
              );
            })}
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-3 border-t border-line py-8 text-sm text-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {personalInfo.fullName}. Designed & built with care.
          </p>
          <a href="#top" className="link-underline w-fit">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
