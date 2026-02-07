'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Users,
  Zap,
  CheckCircle,
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
          className="interactive-card bg-card text-card-foreground border border-border rounded-xl p-8 md:p-12"
        >
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
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
          className="grid md:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group interactive-card bg-card text-card-foreground border border-border rounded-lg p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[var(--primary)]/20 text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Managed', value: '3' },
            { label: 'Technologies', value: '15+' },
            { label: 'Team Members Led', value: 'Multiple' },
          ].map((stat, index) => (
            <div
              key={index}
              className="interactive-card bg-card text-card-foreground border border-border rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--muted-foreground)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
