'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { experienceData } from '@/data/experience';
import { useIndiaTime, useTenure, useToday } from '@/lib/tenure';
import { cn } from '@/lib/utils';
import { ease } from './ui';

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const { years } = useTenure(personalInfo.careerStart);
  const time = useIndiaTime();
  const year = useToday().slice(0, 4);
  const company = experienceData[0]?.company.split(' (')[0];
  const roleParts = [personalInfo.title, ...personalInfo.subtitle.split('|').map((s) => s.trim())];

  const facts = [
    { value: `${years}+`, label: 'years building production software' },
    { value: personalInfo.teamSize, label: 'engineers I lead today' },
    { value: '7', label: 'Spring Boot microservices owned' },
    { value: '3', label: 'projects delivered in parallel' },
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="pt-[72px]">
      <div className="container-page grid items-center gap-14 pb-16 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        {/* Introduction */}
        <div className="lg:col-span-7 lg:pr-8">
          <motion.ul {...rise(0)} className="kicker flex flex-wrap items-center gap-x-3 gap-y-2">
            <li>{personalInfo.contact.location}</li>
            <li aria-hidden className="h-1 w-1 rounded-full bg-bronze" />
            <li>
              {personalInfo.currentRole}, {company}
            </li>
            <li aria-hidden className="h-1 w-1 rounded-full bg-bronze" />
            <li>Portfolio {year}</li>
          </motion.ul>

          <motion.h1
            {...rise(0.08)}
            id="hero-title"
            className="mt-8 text-[clamp(2.75rem,5.6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em]"
          >
            {personalInfo.fullName}
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg font-medium text-ink md:text-xl"
          >
            {roleParts.map((part, i) => (
              <span key={part} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-accent">
                    |
                  </span>
                )}
                {part}
              </span>
            ))}
          </motion.p>

          <motion.p {...rise(0.24)} className="mt-8 max-w-[34rem] text-lg leading-[1.7] text-dim">
            {personalInfo.bio}
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Start a Conversation <ArrowRight size={16} aria-hidden />
            </a>
            <a href="#experience" className="btn-secondary">
              Explore My Experience <ArrowDown size={16} aria-hidden />
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none"
        >
          <div className="relative">
            {/* stone mat offset behind the frame */}
            <div aria-hidden className="absolute -bottom-4 -right-4 left-6 top-6 bg-raised sm:-bottom-5 sm:-right-5" />
            <div className="relative overflow-hidden bg-brand-ink">
              <Image
                src={personalInfo.profileImage ?? '/portrait.jpg'}
                alt={`Portrait of ${personalInfo.fullName}, smiling, in a green blazer`}
                width={720}
                height={900}
                priority
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 420px, 90vw"
                className="h-auto w-full"
              />
              {/* fine bronze inset rule */}
              <div aria-hidden className="pointer-events-none absolute inset-3 border border-brand-bronze/45" />
            </div>
          </div>
          <figcaption className="mt-8 flex items-start justify-between gap-4 border-t border-line pt-4 text-sm">
            <span>
              <span className="block font-medium text-ink">{personalInfo.fullName}</span>
              <span className="text-dim">
                {personalInfo.currentRole}, {company}
              </span>
            </span>
            <span className="text-right text-faint">
              {personalInfo.contact.location}
              {time && <span className="block">{time} IST</span>}
            </span>
          </figcaption>
        </motion.figure>
      </div>

      {/* Key figures */}
      <div className="border-y border-line bg-surface">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={cn(
                'flex flex-col-reverse gap-2 py-8 lg:py-10',
                i % 2 === 1 && 'pl-6 sm:pl-10',
                i % 2 === 0 && 'border-r border-line pr-6',
                i < 2 && 'border-b border-line lg:border-b-0',
                i === 1 && 'lg:border-r lg:pr-6',
                i === 2 && 'lg:pl-10',
              )}
            >
              <dt className="max-w-[12rem] text-sm leading-snug text-dim">{f.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
