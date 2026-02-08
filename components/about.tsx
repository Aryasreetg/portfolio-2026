'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Users,
  Zap,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { containerVariants, itemVariants } from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Expertise in both backend (Spring Boot, Java) and frontend (Angular, Next.js) technologies',
  },
  {
    icon: Brain,
    title: 'System Architecture',
    description: 'Specialized in designing scalable microservices architectures and distributed systems',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Managing and leading cross-functional teams to deliver high-quality software solutions',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Focused on optimizing applications for speed, scalability, and reliability',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <motion.div
        variants={containerVariants}
        className="space-y-12"
      >
        {/* Main Bio */}
        <motion.div
          variants={itemVariants}
          className="interactive-card bg-card text-card-foreground border border-border rounded-2xl p-10 md:p-14"
        >
          <p className="text-[var(--muted-foreground)] text-xl leading-relaxed mb-7">
            {personalInfo.bio}
          </p>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            I bring {personalInfo.yearsOfExperience}+ years of professional experience to the table,
            with a proven track record of delivering production-grade applications, managing
            complex projects, and fostering collaborative team environments. My journey has been
            defined by a commitment to continuous learning, technical excellence, and solving
            real-world problems through elegant, scalable solutions.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-7 lg:gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group interactive-card bg-card text-card-foreground border border-border rounded-2xl p-8 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] group-hover:scale-125 transition-transform flex-shrink-0">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-base leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-7"
        >
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Managed', value: '10+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Team Members Led', value: 'Multiple' },
          ].map((stat, index) => (
            <div
              key={index}
              className="interactive-card bg-card text-card-foreground border border-border rounded-2xl p-7 text-center transition-colors"
            >
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
