'use client';

import { useState } from 'react';
import { ArrowDownToLine, ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useIndiaTime, useToday } from '@/lib/tenure';
import { Accent, Reveal } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { email, socialLinks, location } = personalInfo.contact;
  const year = useToday().slice(0, 4);
  const time = useIndiaTime();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="tone-ink bg-canvas text-ink">
      <div className="container-page pt-24 md:pt-32">
        <Reveal className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="kicker flex items-center gap-3">
              <span className="text-accent-text">06</span>
              <span aria-hidden className="h-px w-8 bg-bronze" />
              <span>Contact</span>
            </p>
            <h2
              id="contact-title"
              className="mt-6 text-[clamp(2.25rem,4.4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
            >
              Have a team to grow or a system to build? <Accent>Let’s talk.</Accent>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-dim">
              Whether it’s a role, a project, or a conversation about engineering leadership, my inbox is
              open.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${email}`} className="btn-primary">
                <Mail size={16} aria-hidden /> Email me
              </a>
              <button onClick={copy} className="btn-secondary">
                {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                <span aria-live="polite">{copied ? 'Address copied' : 'Copy email address'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-14">
            <dl className="border-t border-line-strong">
              <div className="border-b border-line py-5">
                <dt className="text-sm text-faint">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${email}`} className="link break-all text-[17px] text-ink">
                    {email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-sm text-faint">Elsewhere</dt>
                <dd className="mt-2">
                  <ul className="space-y-2">
                    {socialLinks.map((l) => (
                      <li key={l.name}>
                        <a
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link inline-flex items-center gap-1.5 text-[17px] text-ink"
                        >
                          {l.name} <ArrowUpRight size={15} aria-hidden className="text-bronze" />
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={personalInfo.resume} download="Aryasree-TG-Resume.pdf" className="link inline-flex items-center gap-1.5 text-[17px] text-ink">
                        Résumé (PDF) <ArrowDownToLine size={15} aria-hidden className="text-bronze" />
                      </a>
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-sm text-faint">Based in</dt>
                <dd className="mt-1 text-[17px] text-ink">
                  {location}
                  <span className="block text-sm text-dim">{time ? `${time} IST (UTC+5:30)` : 'IST (UTC+5:30)'}</span>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <footer className="mt-28 flex flex-col gap-4 border-t border-line py-8 text-sm text-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {personalInfo.fullName}
          </p>
          <a href="#top" className="link w-fit text-dim hover:text-ink">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
