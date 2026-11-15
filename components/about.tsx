'use client';

import { personalInfo } from '@/data/personal';
import { useTenure } from '@/lib/tenure';
import { Accent, Reveal, Section } from './ui';

const chapters = [
  {
    heading: 'The journey',
    body: (
      <>
        I joined Deeshaa Limited on <strong className="font-medium text-ink">June 19, 2023</strong> as a Java
        developer, fresh from an MCA at Pondicherry University. Before long I was owning projects end to end —
        three at once — from the first architecture sketch to production deploys.
      </>
    ),
  },
  {
    heading: 'How I engineer',
    body: (
      <>
        Most of my work lives in the backend: Spring Boot microservices, PostgreSQL schemas, REST and gRPC
        APIs, and Kafka wherever services shouldn’t have to wait on each other. When something breaks, I start
        with the evidence — a Zipkin trace across services, then the query plan — before reaching for a
        rewrite.
      </>
    ),
  },
  {
    heading: 'How I lead',
    body: (
      <>
        Today I lead a team of <strong className="font-medium text-ink">25+ engineers</strong> across backend
        and frontend. My job is to make the path clear: break work into pieces people can own, review code
        honestly, and give engineers room to grow into bigger problems.
      </>
    ),
  },
];

const principles = [
  { title: 'Clear direction', text: 'Everyone knows what we’re building, why it matters, and what “done” looks like.' },
  { title: 'Quality by default', text: 'Reviews, tests and observability are part of the work, not an afterthought.' },
  { title: 'Open communication', text: 'Problems surface early. Decisions are written down and shared.' },
  { title: 'Grow the team', text: 'Mentoring and real ownership, so every engineer leaves a project stronger.' },
];

export default function About() {
  const { label } = useTenure(personalInfo.careerStart);

  const facts = [
    ['Role', `${personalInfo.currentRole}, ${personalInfo.teamSize} engineers`],
    ['Experience', label],
    ['Education', personalInfo.educationBackground],
    ['Based in', personalInfo.contact.location],
  ];

  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          From writing services to shaping <Accent>how a team builds them.</Accent>
        </>
      }
      intro="A software engineer who grew into leadership without leaving the code behind."
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Pull quote + facts */}
        <Reveal className="lg:col-span-5">
          <blockquote className="border-l-2 border-bronze pl-6">
            <p className="font-serif text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.25] text-ink">
              Calm delivery comes from clear architecture and a team that trusts each other.
            </p>
          </blockquote>

          <dl className="mt-12 border-t border-line">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4 text-[15px]">
                <dt className="text-faint">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Narrative */}
        <div className="space-y-12 lg:col-span-6 lg:col-start-7">
          {chapters.map((c, i) => (
            <Reveal key={c.heading} delay={i * 0.05}>
              <h3 className="text-lg font-semibold tracking-tight">{c.heading}</h3>
              <p className="mt-3 text-[17px] leading-[1.75] text-dim">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Principles */}
      <Reveal className="mt-24">
        <h3 className="kicker">Principles I work by</h3>
        <ol className="mt-6 grid border-t border-line-strong sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="border-b border-line py-7 sm:pr-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-display text-sm font-semibold text-accent-text">0{i + 1}</span>
              <p className="mt-4 font-display text-[17px] font-semibold tracking-tight">{p.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-dim">{p.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
