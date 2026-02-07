'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { experienceData } from '@/data/experience';
import {
  timelineContainerVariants,
  timelineItemVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="Journey through my career in software development and leadership"
    >
      <motion.div
        variants={timelineContainerVariants}
        className="space-y-8"
      >
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            variants={timelineItemVariants}
            className="relative group"
          >
            {/* Timeline line */}
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

            {/* Timeline dot */}
            <div className="absolute -left-14 top-8 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 hidden md:block group-hover:scale-125 transition-transform" />

            {/* Card */}
            <div className="interactive-card bg-card text-card-foreground border border-border rounded-lg p-8 transition-all">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-[var(--primary)] mb-3">
                    {experience.company}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>
                        {experience.startDate} – {experience.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[var(--muted-foreground)] text-base leading-relaxed mb-6">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-400" />
                  Key Responsibilities
                </h4>
                <motion.div
                  variants={containerVariants}
                  className="space-y-3"
                >
                  {experience.responsibilities.map((resp, respIndex) => (
                    <motion.div
                      key={respIndex}
                      variants={itemVariants}
                      className="flex gap-3 text-[var(--muted-foreground)]"
                    >
                      <ChevronRight
                        size={20}
                        className="text-purple-400 flex-shrink-0 mt-1"
                      />
                      <div>
                        <p className="font-semibold text-[var(--card-foreground)]">
                          {resp.title}:
                        </p>
                        <p className="text-[var(--muted-foreground)] text-sm">
                          {resp.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-sm font-semibold text-[var(--muted-foreground)] mb-3">
                  Technologies Used:
                </p>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      variants={itemVariants}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
