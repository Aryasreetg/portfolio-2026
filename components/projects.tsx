'use client';

import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { containerVariants, itemVariants, cardHoverVariants } from '@/lib/animations';
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
      title="Featured Projects"
      subtitle="Showcase of impactful projects I've built and led"
    >
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-6"
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
              <div className="interactive-card bg-card text-card-foreground border border-border rounded-lg overflow-hidden transition-all h-full flex flex-col">
                {/* Header */}
                <div className="p-6 pb-4 border-b border-border">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground flex-1 group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full flex items-center gap-2 ${statusInfo.bg} border ${statusInfo.border}`}
                    >
                      <StatusIcon size={14} className={statusInfo.color} />
                      <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                        {statusInfo.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Content */}
                  <div className="p-6 space-y-4 flex-1">
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <p className="text-xs font-semibold text-[var(--muted-foreground)] mb-2 flex items-center gap-2">
                      <Zap size={14} />
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-[var(--muted-foreground)] flex items-start gap-2"
                        >
                          <span className="text-[var(--primary)] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.keyFeatures.length > 3 && (
                        <li className="text-xs text-[var(--muted-foreground)] italic">
                          +{project.keyFeatures.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-muted/50 rounded p-3 border border-border">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">Impact</p>
                    <p className="text-sm text-foreground">{project.impact}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="px-6 py-4 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[var(--primary)]/20 text-[var(--primary)] rounded text-xs border border-[var(--primary)]/30 hover:border-[var(--primary)]/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-[var(--card)]/30 text-[var(--muted-foreground)] rounded text-xs border border-[var(--border)]/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                {(project.github || project.link) && (
                  <div className="px-6 py-4 border-t border-border flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 rounded bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 hover:text-purple-200 transition-colors text-sm border border-purple-500/30 hover:border-purple-500/50"
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    )}
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
