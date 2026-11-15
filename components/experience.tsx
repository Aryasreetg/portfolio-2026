'use client';

import { Fragment, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { personalInfo } from '@/data/personal';
import type { ExperienceEntry, FocusArea } from '@/lib/types';
import { useTenure } from '@/lib/tenure';
import { cn } from '@/lib/utils';
import { Accent, ease, Reveal, Section } from './ui';

const AREA_ORDER: FocusArea[] = ['Leadership', 'Backend', 'Architecture', 'Distributed systems', 'Frontend', 'Delivery'];

/** Responsibilities grouped by focus area, shown as accessible tabs. */
function FocusAreas({ job }: { job: ExperienceEntry }) {
  const areas = AREA_ORDER.filter((a) => job.responsibilities.some((r) => r.area === a));
  const [active, setActive] = useState<FocusArea>(areas[0]);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const items = job.responsibilities.filter((r) => r.area === active);

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const keys: Record<string, number> = {
      ArrowDown: (i + 1) % areas.length,
      ArrowRight: (i + 1) % areas.length,
      ArrowUp: (i - 1 + areas.length) % areas.length,
      ArrowLeft: (i - 1 + areas.length) % areas.length,
      Home: 0,
      End: areas.length - 1,
    };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(areas[next]);
    tabs.current[next]?.focus();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div
        role="tablist"
        aria-label="Focus areas"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 lg:col-span-4 lg:flex-col lg:flex-nowrap lg:gap-0 lg:border-t lg:border-line lg:pb-0"
      >
        {areas.map((a, i) => {
          const selected = a === active;
          const count = job.responsibilities.filter((r) => r.area === a).length;
          return (
            <button
              key={a}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(a)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                'flex shrink-0 items-center justify-between gap-6 whitespace-nowrap border px-4 py-2.5 text-left text-[15px] transition-colors duration-300',
                'lg:border-0 lg:border-b lg:border-line lg:px-0 lg:py-4',
                selected ? 'border-line-strong text-ink' : 'border-line text-dim hover:text-ink',
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={cn(
                    'hidden h-px transition-all duration-500 lg:block',
                    selected ? 'w-6 bg-bronze' : 'w-0',
                  )}
                />
                {a}
              </span>
              <span className="text-xs tabular-nums text-faint">{count}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${areas.indexOf(active)}`}
        className="lg:col-span-7 lg:col-start-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease }}
            className="space-y-10"
          >
            {items.map((r) => (
              <li key={r.title} className="border-l border-line-strong pl-6">
                <h5 className="font-display text-lg font-semibold tracking-tight">{r.title}</h5>
                <p className="mt-2 text-[16px] leading-[1.7] text-dim">{r.description}</p>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Role({ job }: { job: ExperienceEntry }) {
  const { label } = useTenure(job.startISO);
  const current = job.endDate === 'Present';
  const milestones = job.milestones ?? [];

  return (
    <article>
      {/* Role header */}
      <Reveal className="grid gap-10 border-t border-line-strong pt-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="flex items-center gap-2 text-sm text-accent-text">
            {current && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-text" />}
            {current ? 'Current role' : 'Previous role'}
          </p>
          <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.02em]">
            {job.title}
          </h3>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-[15px]">
            <div className="col-span-2">
              <dt className="sr-only">Company</dt>
              <dd className="text-ink">{job.company}</dd>
            </div>
            <div>
              <dt className="text-faint">Period</dt>
              <dd className="mt-1 text-ink">
                {job.startDate} — {job.endDate}
              </dd>
            </div>
            <div>
              <dt className="text-faint">Tenure</dt>
              <dd className="mt-1 text-ink">{label}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-faint">Location</dt>
              <dd className="mt-1 text-ink">{job.location}</dd>
            </div>
          </dl>
        </div>
        <p className="text-lg leading-[1.75] text-dim lg:col-span-6 lg:col-start-7">{job.description}</p>
      </Reveal>

      {/* Growth timeline */}
      {milestones.length > 0 && (
        <Reveal className="mt-20">
          <h4 className="kicker">How the role grew</h4>
          <ol className="relative mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            <span
              aria-hidden
              className="absolute bottom-2 left-[5px] top-2 w-px bg-line-strong md:bottom-auto md:left-0 md:right-0 md:top-[5px] md:h-px md:w-auto"
            />
            {milestones.map((m, i) => {
              const last = i === milestones.length - 1;
              return (
                <li key={m.title} className="relative pl-8 md:pl-0 md:pt-10">
                  <span
                    aria-hidden
                    className={cn(
                      'absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border md:top-0',
                      last ? 'border-accent-text bg-accent-text' : 'border-bronze bg-canvas',
                    )}
                  />
                  <p className={cn('text-sm font-medium', last ? 'text-accent-text' : 'text-bronze')}>{m.when}</p>
                  <p className="mt-2 font-display text-lg font-semibold tracking-tight">{m.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-dim">{m.description}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      )}

      <Reveal className="mt-24">
        <h4 className="kicker mb-8">What the work involves</h4>
        <FocusAreas job={job} />
      </Reveal>

      <Reveal className="mt-16 grid gap-3 border-t border-line pt-6 md:grid-cols-12">
        <h4 className="kicker pt-1 md:col-span-3">Stack</h4>
        <p className="text-[15px] leading-loose text-dim md:col-span-9">
          {job.technologies.map((t, i) => (
            <Fragment key={t}>
              <span className="whitespace-nowrap">
                <span className="text-ink">{t}</span>
                {i < job.technologies.length - 1 && <span className="pl-2 text-bronze">·</span>}
              </span>{' '}
            </Fragment>
          ))}
        </p>
      </Reveal>
    </article>
  );
}

export default function Experience() {
  const { years } = useTenure(personalInfo.careerStart);

  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      tone="ink"
      title={
        <>
          Leading engineers, <Accent>still close to the code.</Accent>
        </>
      }
      intro={`${years}+ years at one company — from my first Spring Boot service to leading a team of ${personalInfo.teamSize} engineers.`}
    >
      <div className="space-y-28">
        {experienceData.map((job) => (
          <Role key={job.company + job.title} job={job} />
        ))}
      </div>
    </Section>
  );
}
