'use client';

import { Compass, MessagesSquare, ShieldCheck, Sprout } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { useTenure } from '@/lib/tenure';
import { Em, Reveal, SectionHeading } from './ui';

const principles = [
  { icon: Compass, title: 'Clear direction', text: 'Everyone knows what we are building, why, and what "done" looks like.' },
  { icon: ShieldCheck, title: 'Quality by default', text: 'Thoughtful reviews, tests and observability baked in, not bolted on.' },
  { icon: MessagesSquare, title: 'Open communication', text: 'Problems surface early. Decisions are written down and shared.' },
  { icon: Sprout, title: 'Grow the team', text: 'Mentoring and ownership so every engineer levels up over time.' },
];

export default function About() {
  const { label } = useTenure(personalInfo.careerStart);

  const facts = [
    ['Role', personalInfo.currentRole],
    ['Team', `${personalInfo.teamSize} engineers`],
    ['Experience', label],
    ['Education', personalInfo.educationBackground],
    ['Based in', personalInfo.contact.location],
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          aside="A quick snapshot of who I am, how I work, and what I'm focused on right now."
          title={
            <>
              Engineer by craft, <Em>leader</Em> by choice.
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-dim md:text-xl">
            <p>
              I started my career on <span className="text-ink">June 19, 2023</span> as a Java
              developer, and quickly grew into owning projects end-to-end — from the first
              architecture sketch to production deploys.
            </p>
            <p>
              Today I lead a team of <span className="text-ink">{personalInfo.teamSize} engineers</span>,
              shaping the technical direction of microservice platforms built on Spring Boot, Kafka
              and PostgreSQL, with Angular and Next.js on the front.
            </p>
            <p>
              I believe great software comes from great teams: clear ownership, honest code reviews,
              and room for every engineer to grow.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="divide-y divide-line border-y border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="text-right text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="group rounded-3xl border border-line bg-surface/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-raised text-accent transition-colors duration-300 group-hover:bg-accent-fill group-hover:text-accent-ink">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
