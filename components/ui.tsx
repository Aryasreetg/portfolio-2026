'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades + lifts its children in when scrolled into view. */
export function Reveal({
  delay = 0,
  className,
  ...props
}: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
      {...props}
    />
  );
}

export function SectionHeading({
  index,
  label,
  title,
  aside,
  className,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  /** Short supporting text shown to the right of the title on wide screens. */
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn('relative mb-12 md:mb-16', className)}>
      <span
        aria-hidden
        className="outline-num pointer-events-none absolute -top-16 right-0 select-none text-[9rem] font-medium leading-none tracking-tighter md:-top-24 md:text-[16rem]"
      >
        {index}
      </span>
      <div className="relative mb-6 flex items-center gap-4">
        <span className="eyebrow text-accent">{index}</span>
        <span className="h-px w-10 bg-line" />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="relative grid gap-6 lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-end lg:gap-16">
        <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h2>
        {aside && (
          <p className="border-l border-accent/50 pl-5 text-base leading-relaxed text-dim">{aside}</p>
        )}
      </div>
    </Reveal>
  );
}

/** Serif italic accent used inside headings. */
export function Em({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic text-accent">{children}</span>;
}
