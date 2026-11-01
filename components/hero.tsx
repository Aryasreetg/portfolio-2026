'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Coffee,
  Database,
  Leaf,
  MapPin,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { skillsData } from '@/data/skills';
import { useTenure } from '@/lib/tenure';

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
});

// Floating badges around the profile photo (positions relative to the photo frame)
const badges: { icon: LucideIcon; label: string; pos: string; delay: number; hideOnMobile?: boolean }[] = [
  { icon: Coffee, label: 'Java', pos: '-left-16 top-6', delay: 0.6 },
  { icon: Leaf, label: 'Spring Boot', pos: '-right-14 top-16', delay: 0.75 },
  { icon: Workflow, label: 'Kafka', pos: '-left-24 top-1/2', delay: 0.9, hideOnMobile: true },
  { icon: Database, label: 'PostgreSQL', pos: '-right-20 top-[58%]', delay: 1.05, hideOnMobile: true },
  { icon: Boxes, label: 'Docker', pos: '-right-6 -bottom-6', delay: 1.2 },
  { icon: Users, label: '25+ team', pos: 'left-1/3 -top-6', delay: 1.35, hideOnMobile: true },
];

const marqueeItems = skillsData.flatMap((c) => c.skills.map((s) => s.name));

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const { years } = useTenure(personalInfo.careerStart);
  const [first, ...rest] = personalInfo.fullName.split(' ');

  const stats = [
    { value: `${years}+`, label: 'Years building\nproduction systems' },
    { value: personalInfo.teamSize, label: 'Engineers\nled today' },
    { value: '7', label: 'Spring Boot\nmicroservices' },
    { value: '3', label: 'Concurrent\nprojects owned' },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">

      <div className="container-x relative">
        <motion.div {...rise(0)} className="mb-10 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-dim backdrop-blur">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-fill" />
            Currently leading a team of {personalInfo.teamSize} engineers
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-faint">
            <MapPin size={12} /> {personalInfo.contact.location}
          </span>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="text-[clamp(3.5rem,11vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.045em]">
              <span className="block overflow-hidden">
                <motion.span {...rise(0.1)} className="block">
                  {first}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span {...rise(0.2)} className="block font-serif font-normal italic tracking-[-0.02em] text-accent">
                  {rest.join(' ')}.
                </motion.span>
              </span>
            </h1>

            <motion.p
              {...rise(0.35)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-dim md:text-xl"
            >
              <span className="text-ink">{personalInfo.title}</span> —{' '}
              {personalInfo.subtitle}. {personalInfo.bio}
            </motion.p>

            <motion.div {...rise(0.45)} className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="btn-solid">
                Let&apos;s talk <ArrowUpRight size={16} />
              </a>
              <a href="#experience" className="btn-ghost">
                See my work <ArrowDownRight size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            whileHover={{ rotate: 0 }}
            className="relative mx-auto w-56 sm:w-64 lg:mx-0 lg:mb-4 lg:w-72"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-raised">
              {!imgError && personalInfo.profileImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover grayscale-[20%] transition duration-700 hover:grayscale-0"
                />
              ) : (
                <div className="grid h-full place-items-center font-serif text-7xl italic text-dim">
                  {first[0]}
                </div>
              )}
            </div>
            {badges.map(({ icon: Icon, label, pos, delay, hideOnMobile }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay, ease }}
                className={`absolute z-10 ${pos} ${hideOnMobile ? 'hidden sm:block' : ''}`}
              >
                <div
                  style={{ animation: `float-y ${5 + (i % 3)}s ease-in-out ${i * 0.4}s infinite` }}
                  className="flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1.5 pl-1.5 pr-3.5 text-xs font-medium shadow-lg backdrop-blur-md"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-accent-fill text-accent-ink">
                    <Icon size={13} />
                  </span>
                  {label}
                </div>
              </motion.div>
            ))}
            {/* rotating dashed ring behind the photo */}
            <div className="absolute -inset-8 -z-10 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-line" />
            <div className="absolute -bottom-4 -left-6 rotate-[-6deg] rounded-full bg-accent-fill px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-accent-ink shadow-xl">
              Since 2023
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          {...rise(0.55)}
          className="mt-16 grid grid-cols-2 border-t border-line md:mt-20 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-line py-8 ${i % 2 === 0 ? 'border-r' : ''} md:border-r md:last:border-r-0 ${i > 0 ? 'md:pl-8' : ''} ${i % 2 === 1 ? 'pl-6' : ''}`}
            >
              <dd className="text-5xl font-medium tracking-tight md:text-6xl">{s.value}</dd>
              <dt className="mt-3 whitespace-pre-line text-sm leading-snug text-dim">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-10">
          {[...marqueeItems, ...marqueeItems].map((name, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-serif text-2xl italic text-dim">
              {name}
              <span className="text-accent not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
