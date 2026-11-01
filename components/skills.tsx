'use client';

import { skillsData } from '@/data/skills';
import type { Skill } from '@/lib/types';
import { Em, Reveal, SectionHeading } from './ui';

const levelDots: Record<Skill['level'], number> = { intermediate: 1, advanced: 2, expert: 3 };

function Level({ level }: { level: Skill['level'] }) {
  return (
    <span className="flex gap-1" aria-label={level} title={level}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-1.5 rounded-full ${n <= levelDots[level] ? 'bg-accent' : 'bg-line'}`}
        />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface/40 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Toolkit"
          aside="Backend-first, full-stack capable. Three dots means expert, one means solid working knowledge."
          title={
            <>
              The stack I use to <Em>ship</Em> reliably.
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((cat, i) => (
            <Reveal
              key={cat.category}
              delay={(i % 3) * 0.08}
              className={`group rounded-3xl border border-line bg-canvas p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 ${
                i === 0 ? 'lg:row-span-3' : ''
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-lg font-medium tracking-tight">{cat.category}</h3>
                <span className="font-mono text-xs text-faint">
                  {String(cat.skills.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="space-y-1">
                {cat.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0"
                  >
                    <div>
                      <p className="text-ink">{s.name}</p>
                      {i === 0 && <p className="mt-1 text-sm text-dim">{s.description}</p>}
                    </div>
                    <Level level={s.level} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="flex flex-col justify-between rounded-3xl border border-dashed border-line p-7">
            <div>
              <p className="eyebrow mb-5">How to read this</p>
              <ul className="space-y-3 text-sm text-dim">
                {(['expert', 'advanced', 'intermediate'] as const).map((l) => (
                  <li key={l} className="flex items-center gap-3 capitalize">
                    <Level level={l} /> {l}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 font-serif text-2xl italic leading-snug text-ink">
              Always picking up <span className="text-accent">something new.</span>
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
