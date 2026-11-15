'use client';

import { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { projectsData } from '@/data/projects';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Accent, ease, Reveal, Section } from './ui';

/** Three plate treatments so featured projects don't repeat the same look. */
const plates = [
  'tone-ink bg-canvas text-ink',
  'bg-brand-stone text-brand-ink',
  'bg-accent-text text-brand-ivory', // deeper teal keeps small text above 4.5:1
];

function TechLine({ items }: { items: string[] }) {
  return (
    <p className="text-[14px] leading-loose text-dim">
      {items.map((t, i) => (
        <Fragment key={t}>
          <span className="whitespace-nowrap">
            <span className="text-ink">{t}</span>
            {i < items.length - 1 && <span className="pl-2 text-faint">/</span>}
          </span>{' '}
        </Fragment>
      ))}
    </p>
  );
}

function Links({ p }: { p: Project }) {
  if (!p.github && !p.link) return null;
  return (
    <p className="mt-6 flex gap-6 text-[15px]">
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-accent-text">
          Source code <ArrowUpRight size={15} aria-hidden />
        </a>
      )}
      {p.link && (
        <a href={p.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-accent-text">
          Live project <ArrowUpRight size={15} aria-hidden />
        </a>
      )}
    </p>
  );
}

/** Problem / approach / contribution as a compact definition list. */
function CaseNotes({ p }: { p: Project }) {
  const rows = [
    ['The problem', p.problem],
    ['Approach', p.approach],
    ['My contribution', p.contribution],
  ];
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows.map(([k, v]) => (
        <div key={k} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
          <dt className="text-sm font-medium text-faint">{k}</dt>
          <dd className="text-[15px] leading-relaxed text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Featured({ p, i }: { p: Project; i: number }) {
  const flip = i % 2 === 1;
  return (
    <Reveal>
      <article className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Plate */}
        <div
          className={cn(
            'relative flex min-h-[300px] flex-col justify-between p-8 md:min-h-[380px] md:p-10 lg:col-span-5',
            plates[i % plates.length],
            flip && 'lg:order-2 lg:col-start-8',
          )}
        >
          <div className="flex items-start justify-between gap-4 text-sm">
            <span>Project {String(i + 1).padStart(2, '0')}</span>
            <span className="capitalize">{p.status.replace('-', ' ')}</span>
          </div>
          <p className="font-serif text-[clamp(2.75rem,5vw,4rem)] leading-none">{p.domain}</p>
          <p className="text-sm">{p.technologies.slice(0, 3).join(' · ')}</p>
        </div>

        {/* Story */}
        <div className={cn('lg:col-span-7', flip && 'lg:order-1 lg:col-span-6 lg:col-start-1')}>
          <h3 className="text-[clamp(1.5rem,2.3vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em]">
            {p.title}
          </h3>
          <p className="mt-4 text-[17px] leading-relaxed text-dim">{p.shortDescription}.</p>
          <div className="mt-8">
            <CaseNotes p={p} />
          </div>
          <div className="mt-6">
            <TechLine items={p.technologies} />
          </div>
          <details className="group mt-4">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-[15px] text-accent-text [&::-webkit-details-marker]:hidden">
              <Plus size={15} aria-hidden className="transition-transform duration-300 group-open:rotate-45" />
              Key features
            </summary>
            <ul className="mt-4 space-y-2 pl-6">
              {p.keyFeatures.map((f) => (
                <li key={f} className="list-disc text-[15px] leading-relaxed text-dim marker:text-bronze">
                  {f}
                </li>
              ))}
            </ul>
          </details>
          <Links p={p} />
        </div>
      </article>
    </Reveal>
  );
}

function MoreProjects({ items, offset }: { items: Project[]; offset: number }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul className="border-t border-line-strong">
      {items.map((p, i) => {
        const isOpen = open === i;
        const panel = `more-project-${i}`;
        return (
          <li key={p.title} className="border-b border-line">
            <h4>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panel}
                className="group grid w-full grid-cols-[1fr_auto] items-center gap-6 py-6 text-left md:grid-cols-[3rem_1fr_12rem_auto]"
              >
                <span aria-hidden className="hidden text-sm text-faint md:block">
                  {String(offset + i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent-text md:text-xl">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-[15px] text-dim">{p.shortDescription}</span>
                </span>
                <span className="hidden text-sm text-faint md:block">{p.domain}</span>
                <span
                  aria-hidden
                  className={cn(
                    'grid h-9 w-9 place-items-center border border-line-strong transition-[transform,background-color,color] duration-300',
                    isOpen ? 'rotate-45 bg-btn text-btn-ink' : 'group-hover:border-ink',
                  )}
                >
                  <Plus size={16} />
                </span>
              </button>
            </h4>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-10 md:grid-cols-12 md:pl-12">
                    <div className="md:col-span-7">
                      <CaseNotes p={p} />
                    </div>
                    <div className="md:col-span-4 md:col-start-9">
                      <p className="text-sm font-medium text-faint">Technologies</p>
                      <div className="mt-2">
                        <TechLine items={p.technologies} />
                      </div>
                      <Links p={p} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      index="04"
      label="Selected work"
      title={
        <>
          Projects where I learned to <Accent>think in systems.</Accent>
        </>
      }
      intro="Academic and personal builds — from cryptography to healthcare to machine learning. Each one taught me something I still use at work."
    >
      <div className="space-y-24 md:space-y-32">
        {featured.map((p, i) => (
          <Featured key={p.title} p={p} i={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <Reveal className="mt-28">
          <h3 className="kicker mb-6">More projects</h3>
          <MoreProjects items={rest} offset={featured.length} />
        </Reveal>
      )}
    </Section>
  );
}
