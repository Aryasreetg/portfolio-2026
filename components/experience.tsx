'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { experienceData } from '@/data/experience';
import type { ExperienceEntry } from '@/lib/types';
import { useTenure } from '@/lib/tenure';
import { Em, Reveal, SectionHeading } from './ui';

const VISIBLE = 6;

function Role({ job }: { job: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);
  const { label } = useTenure(job.startISO);
  const current = job.endDate === 'Present';
  const shown = expanded ? job.responsibilities : job.responsibilities.slice(0, VISIBLE);
  const hidden = job.responsibilities.length - VISIBLE;

  return (
    <article className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[280px_1fr] lg:gap-16">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow mb-3 flex items-center gap-2">
          {current && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent-fill" />}
          {job.startDate} — {job.endDate}
        </p>
        <p className="font-serif text-3xl italic text-accent">{label}</p>
        <p className="mt-6 text-ink">{job.company}</p>
        <p className="text-sm text-dim">{job.location}</p>

        {current && (
          <>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {[
                ['25+', 'Engineers'],
                ['3', 'Projects'],
                ['7', 'Services'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-line bg-surface/50 p-3 text-center">
                  <p className="text-2xl font-medium tracking-tight">{v}</p>
                  <p className="mt-0.5 text-[11px] text-dim">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#c8f03c', '#3dd6c6', '#8b7cf6', '#f59e7b', '#efeee8'].map((c) => (
                  <span
                    key={c}
                    className="h-8 w-8 rounded-full border-2 border-canvas"
                    style={{ background: `linear-gradient(135deg, ${c}, color-mix(in srgb, ${c} 40%, #000))` }}
                  />
                ))}
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-canvas bg-raised font-mono text-[10px] text-dim">
                  +20
                </span>
              </div>
              <p className="text-xs leading-snug text-dim">
                The team I lead,
                <br />
                across backend &amp; frontend
              </p>
            </div>
          </>
        )}
      </Reveal>

      <div>
        <Reveal>
          <h3 className="text-3xl font-medium tracking-tight md:text-4xl">{job.title}</h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">{job.description}</p>
        </Reveal>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          <AnimatePresence initial={false}>
            {shown.map((r, i) => (
              <motion.li
                key={r.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`group bg-canvas p-7 transition-colors duration-300 hover:bg-surface ${
                  i === shown.length - 1 && shown.length % 2 === 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="mt-3 text-lg font-medium tracking-tight">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-dim">{r.description}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>

        {hidden > 0 && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="btn-ghost mt-6"
            aria-expanded={expanded}
          >
            {expanded ? <Minus size={14} /> : <Plus size={14} />}
            {expanded ? 'Show less' : `${hidden} more highlights`}
          </button>
        )}

        <Reveal className="mt-12">
          <p className="eyebrow mb-4">Stack</p>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Experience"
          aside="From writing my first Spring Boot service to leading a team of 25+ engineers — all at Deeshaa."
          title={
            <>
              From first commit to <Em>leading the team.</Em>
            </>
          }
        />
        <div className="space-y-24">
          {experienceData.map((job) => (
            <Role key={job.company + job.title} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
