'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ease = [0.22, 1, 0.36, 1] as const;

/** Gentle fade-and-lift when an element scrolls into view. */
export function Reveal({
  delay = 0,
  className,
  ...props
}: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
      {...props}
    />
  );
}

type Tone = 'ivory' | 'stone' | 'ink';

const toneClass: Record<Tone, string> = {
  ivory: 'bg-canvas',
  stone: 'bg-surface',
  ink: 'tone-ink bg-canvas',
};

/** Page section with a consistent header: kicker, title and an optional intro. */
export function Section({
  id,
  index,
  label,
  title,
  intro,
  tone = 'ivory',
  children,
  className,
}: {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn(toneClass[tone], 'text-ink', className)}>
      <div className="container-page py-24 md:py-32">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="kicker flex items-center gap-3">
              <span className="text-accent-text">{index}</span>
              <span aria-hidden className="h-px w-8 bg-bronze" />
              <span>{label}</span>
            </p>
            <h2
              id={`${id}-title`}
              className="mt-6 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
            >
              {title}
            </h2>
          </div>
          {intro && (
            <p className="max-w-md text-[17px] leading-relaxed text-dim lg:col-span-4 lg:col-start-9">{intro}</p>
          )}
        </Reveal>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}

/** Occasional editorial accent: Instrument Serif, upright, in teal. */
export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal tracking-normal text-accent-text">{children}</span>;
}
