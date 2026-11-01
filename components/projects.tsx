'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github, Plus } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Em, Reveal, SectionHeading } from './ui';

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Selected work"
          aside="Academic and personal builds — from post-quantum cryptography to ML-based phishing detection. Tap a row to open it."
          title={
            <>
              Projects that taught me to <Em>think in systems.</Em>
            </>
          }
        />

        <div className="border-b border-line">
          {projectsData.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={p.title} delay={0.04 * i}>
                <div className="border-t border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-7 text-left md:gap-10 md:py-9"
                  >
                    <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                        {p.title}
                      </span>
                      <span className="mt-1.5 block text-sm text-dim">{p.shortDescription}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className={`grid h-10 w-10 place-items-center rounded-full border transition-colors ${
                        isOpen ? 'border-accent-fill bg-accent-fill text-accent-ink' : 'border-line'
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-10 pb-10 md:grid-cols-[1fr_1fr] md:pl-[calc(2.5rem+1.25rem)]">
                          <div>
                            <p className="leading-relaxed text-dim">{p.description}</p>
                            <p className="mt-6 border-l-2 border-accent pl-4 text-sm text-ink">
                              {p.impact}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                              {p.technologies.map((t) => (
                                <span key={t} className="chip">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="eyebrow mb-4">Key features</p>
                            <ul className="space-y-2.5">
                              {p.keyFeatures.map((f) => (
                                <li key={f} className="flex gap-3 text-sm text-dim">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                              {p.github && (
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
                                  <Github size={14} /> Source
                                </a>
                              )}
                              {p.link && (
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-solid !py-2">
                                  Live <ArrowUpRight size={14} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
