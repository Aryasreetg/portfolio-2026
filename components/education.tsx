'use client';

import { Award, BarChart3, MapPin, Server, Star, Trophy, type LucideIcon } from 'lucide-react';
import { certificationsData } from '@/data/certifications';
import { educationData } from '@/data/education';
import { Em, Reveal, SectionHeading } from './ui';

const icons: Record<string, LucideIcon> = { Award, BarChart3, MapPin, Server, Star, Trophy };

export default function Education() {
  const certs = [...certificationsData].sort((a, b) => b.issueDate.localeCompare(a.issueDate));

  return (
    <section id="education" className="border-y border-line bg-surface/40 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Education & credentials"
          aside="MCA from Pondicherry University with an 8.8 CGPA, plus certifications picked up along the way."
          title={
            <>
              Always <Em>learning.</Em>
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow mb-6">Education</p>
            <div className="border-b border-line">
              {educationData.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.06}>
                  <div className="grid grid-cols-[1fr_auto] gap-6 border-t border-line py-7">
                    <div>
                      <p className="font-mono text-xs text-faint">
                        {e.startDate} — {e.endDate}
                      </p>
                      <h3 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">{e.degree}</h3>
                      <p className="mt-1 text-dim">{e.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-4xl italic text-accent md:text-5xl">
                        {e.score}
                        {e.scoreLabel === 'Percentage' && <span className="text-2xl">%</span>}
                      </p>
                      <p className="eyebrow mt-1">{e.scoreLabel}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-6">Certifications & awards</p>
            <div className="space-y-3">
              {certs.map((c, i) => {
                const Icon = (c.icon && icons[c.icon]) || Award;
                return (
                  <Reveal key={c.title} delay={i * 0.05}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-line bg-canvas p-5 transition-colors hover:border-accent/40">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-raised text-dim transition-colors group-hover:bg-accent-fill group-hover:text-accent-ink">
                        <Icon size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium leading-snug text-ink">{c.title}</p>
                        <p className="mt-1 text-sm text-dim">{c.issuer}</p>
                      </div>
                      <span className="font-mono text-xs text-faint">{c.issueDate}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
