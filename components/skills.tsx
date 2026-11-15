'use client';

import { skillsData } from '@/data/skills';
import type { Skill, SkillCategory } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Reveal, Section } from './ui';

const LEADERSHIP = 'Engineering Leadership';

const levelText: Record<Skill['level'], string> = {
  expert: 'Daily use',
  advanced: 'Regular use',
  intermediate: 'Working knowledge',
};

/** A quiet marker: filled = daily use, outlined = regular use, none = working knowledge. */
function Marker({ level }: { level: Skill['level'] }) {
  return (
    <span
      aria-hidden
      className={cn(
        'mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full',
        level === 'expert' && 'bg-accent-text',
        level === 'advanced' && 'border border-accent-text',
        level === 'intermediate' && 'border border-dashed border-faint',
      )}
    />
  );
}

function SkillList({ skills, columns }: { skills: Skill[]; columns?: boolean }) {
  return (
    <ul className={cn('space-y-2', columns && 'sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-2 lg:grid-cols-5')}>
      {skills.map((s) => (
        <li key={s.name} className="flex gap-3 text-[15px]" title={s.description}>
          <Marker level={s.level} />
          <span>
            <span className="text-ink">{s.name}</span>
            <span className="sr-only"> — {levelText[s.level]}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function Category({ cat, index }: { cat: SkillCategory; index: number }) {
  return (
    <div className="h-full bg-surface p-7 md:p-8">
      <p aria-hidden className="text-sm font-medium text-bronze">{String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight">{cat.category}</h3>
      {cat.summary && <p className="mt-2 text-[15px] leading-relaxed text-dim">{cat.summary}</p>}
      <div className="mt-6 border-t border-line pt-5">
        <SkillList skills={cat.skills} />
      </div>
    </div>
  );
}

export default function Skills() {
  const technical = skillsData.filter((c) => c.category !== LEADERSHIP);
  const leadership = skillsData.find((c) => c.category === LEADERSHIP);

  return (
    <Section
      id="toolkit"
      index="03"
      label="Toolkit"
      tone="stone"
      title="A backend-first toolkit, with the range to lead a full-stack team."
      intro={
        <>
          Grouped by how I use them, not by buzzword.
          <span className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {(['expert', 'advanced', 'intermediate'] as const).map((l) => (
              <span key={l} className="flex items-center gap-2">
                <Marker level={l} />
                <span className="pt-[3px]">{levelText[l]}</span>
              </span>
            ))}
          </span>
        </>
      }
    >
      <Reveal>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {technical.map((cat, i) => (
            <Category key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </Reveal>

      {leadership && (
        <Reveal className="mt-px">
          <div className="grid gap-8 border border-t-0 border-line bg-canvas p-7 md:p-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p aria-hidden className="text-sm font-medium text-bronze">{String(technical.length + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{leadership.category}</h3>
              {leadership.summary && (
                <p className="mt-2 text-[15px] leading-relaxed text-dim">{leadership.summary}</p>
              )}
            </div>
            <div className="lg:col-span-8 lg:border-l lg:border-line lg:pl-8 lg:pt-1">
              <SkillList skills={leadership.skills} columns />
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
