'use client';

import { certificationsData } from '@/data/certifications';
import { educationData } from '@/data/education';
import { Reveal, Section } from './ui';

const typeLabel = { certification: 'Certification', award: 'Award', achievement: 'Achievement' } as const;

export default function Education() {
  const certs = [...certificationsData].sort((a, b) => b.issueDate.localeCompare(a.issueDate));

  return (
    <Section
      id="education"
      index="05"
      label="Education"
      tone="stone"
      title="Foundations in computer science, and the habit of learning."
      intro="An MCA from Pondicherry University with an 8.8 CGPA, and certifications picked up along the way."
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <h3 className="kicker mb-5">Degrees &amp; schooling</h3>
          <ol className="border-t border-line-strong">
            {educationData.map((e) => (
              <li key={e.degree} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-6 sm:grid-cols-[6.5rem_1fr_auto]">
                <span className="text-sm tabular-nums text-faint sm:pt-1">
                  {e.startDate} – {e.endDate}
                </span>
                <span className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto">
                  <span className="block font-display text-lg font-semibold tracking-tight">{e.degree}</span>
                  <span className="mt-1 block text-[15px] text-dim">{e.institution}</span>
                </span>
                <span className="col-start-2 row-start-1 text-right sm:col-start-auto sm:row-start-auto">
                  <span className="block font-display text-2xl font-semibold tabular-nums tracking-tight">
                    {e.score}
                    {e.scoreLabel === 'Percentage' && '%'}
                  </span>
                  <span className="text-xs text-faint">{e.scoreLabel}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
          <h3 className="kicker mb-5">Certifications &amp; awards</h3>
          <ul className="border-t border-line-strong">
            {certs.map((c) => (
              <li key={c.title} className="border-b border-line py-4">
                <p className="flex items-baseline justify-between gap-4 text-xs text-faint">
                  <span>{typeLabel[c.type]}</span>
                  <span className="tabular-nums">{c.issueDate}</span>
                </p>
                <p className="mt-1.5 text-[15px] font-medium leading-snug text-ink">{c.title}</p>
                <p className="mt-0.5 text-sm text-dim">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
