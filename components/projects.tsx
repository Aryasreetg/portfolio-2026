'use client';

import { motion } from 'framer-motion';
import {
  Github,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { containerVariants, itemVariants } from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

export default function Projects() {
  const statusConfig = {
    completed: {
      icon: CheckCircle,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      label: 'Completed',
    },
    'in-progress': {
      icon: Clock,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      label: 'In Progress',
    },
    planning: {
      icon: AlertCircle,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      label: 'Planning',
    },
  };

  return (
    <SectionWrapper
      id="projects"
      title="Academic Projects"
      subtitle="Research and development projects showcasing technical depth and learning outcomes"
    >
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-8 lg:gap-10"
      >
        {projectsData.map((project, index) => {
          const statusInfo = statusConfig[project.status];
          const StatusIcon = statusInfo.icon;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <div className="interactive-card bg-card text-card-foreground border border-border rounded-2xl overflow-hidden transition-all h-full flex flex-col">
                {/* Header */}
                <div className="px-8 py-7 border-b border-border">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-foreground flex-1 group-hover:text-[var(--primary)] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 flex-shrink-0 ${statusInfo.bg} border ${statusInfo.border}`}
                    >
                      <StatusIcon size={16} className={statusInfo.color} />
                      <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-[var(--muted-foreground)] font-medium">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Content */}
                <div className="px-8 py-8 space-y-6 flex-1">
                  <p className="text-[var(--muted-foreground)] text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <p className="text-xs font-bold text-[var(--foreground)] mb-3 flex items-center gap-2 uppercase tracking-wide">
                      <Zap size={16} className="text-[var(--primary)]" />
                      Key Features
                    </p>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-[var(--muted-foreground)] flex items-start gap-3"
                        >
                          <span className="text-[var(--primary)] font-bold mt-0.5 flex-shrink-0">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.keyFeatures.length > 3 && (
                        <li className="text-sm text-[var(--muted-foreground)] italic pt-1">
                          +{project.keyFeatures.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-[var(--primary)]/8 rounded-xl p-4 border border-[var(--primary)]/20">
                    <p className="text-xs font-bold text-[var(--foreground)] mb-2 uppercase tracking-wide">Technical Impact</p>
                    <p className="text-base text-[var(--card-foreground)] font-medium">{project.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="px-8 py-6 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-2 bg-[var(--primary)]/15 text-[var(--primary)] rounded-lg text-xs font-semibold border border-[var(--primary)]/40 hover:border-[var(--primary)]/60 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-2 bg-[var(--muted)]/40 text-[var(--muted-foreground)] rounded-lg text-xs font-semibold border border-[var(--border)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                {project.github && (
                  <div className="px-8 py-6 border-t border-border flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary flex-1"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
