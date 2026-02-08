'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Zap,
  Code2,
  Database,
  Cloud,
  Award,
} from 'lucide-react';
import { experienceData } from '@/data/experience';
import {
  timelineContainerVariants,
  timelineItemVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

// Technology categories with icons
const techCategories = {
  'Backend Development': { icon: Code2, color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30' },
  'Frontend Development': { icon: Code2, color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30' },
  'Database & Storage': { icon: Database, color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30' },
  'DevOps & Deployment': { icon: Cloud, color: 'from-orange-500/20 to-orange-600/10 border-orange-500/30' },
  'Event Streaming': { icon: Zap, color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30' },
  'Tools & Utilities': { icon: Award, color: 'from-pink-500/20 to-pink-600/10 border-pink-500/30' },
};

const getTechCategory = (tech: string): keyof typeof techCategories => {
  const backendTechs = ['Java', 'Spring Boot', 'gRPC', 'REST APIs'];
  const frontendTechs = ['Angular', 'Next.js'];
  const dbTechs = ['PostgreSQL'];
  const devopsTechs = ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Jenkins'];
  const streamingTechs = ['Apache Kafka', 'Zipkin'];

  if (backendTechs.includes(tech)) return 'Backend Development';
  if (frontendTechs.includes(tech)) return 'Frontend Development';
  if (dbTechs.includes(tech)) return 'Database & Storage';
  if (devopsTechs.includes(tech)) return 'DevOps & Deployment';
  if (streamingTechs.includes(tech)) return 'Event Streaming';
  return 'Tools & Utilities';
};

const groupTechByCategory = (techs: string[]) => {
  const grouped = {} as Record<string, string[]>;
  techs.forEach((tech) => {
    const category = getTechCategory(tech);
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(tech);
  });
  return grouped;
};

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="Deep technical leadership and full-stack development expertise"
    >
      <motion.div
        variants={timelineContainerVariants}
        className="space-y-10"
      >
        {experienceData.map((experience, index) => {
          const groupedTechs = groupTechByCategory(experience.technologies);
          const monthsDuration = calculateMonths(experience.startDate, experience.endDate);

          return (
            <motion.div
              key={index}
              variants={timelineItemVariants}
              className="relative group"
            >
              {/* Timeline line */}
              <div className="absolute -left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] hidden md:block rounded-full" />

            
              {/* Card */}
              <div className="interactive-card bg-card text-card-foreground border border-border rounded-2xl overflow-hidden transition-all">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 px-10 py-8 border-b border-border">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-[var(--primary)] mb-4">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="bg-[var(--primary)]/20 text-[var(--primary)] px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap">
                      {monthsDuration} months
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 text-base text-[var(--muted-foreground)] font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-[var(--primary)]" />
                      <span>
                        {experience.startDate} – {experience.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-[var(--primary)]" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-10">
                  {/* Description */}
                  <div>
                    <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Responsibilities Grid */}
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] rounded-full" />
                      Key Responsibilities & Impact
                    </h4>
                    <motion.div
                      variants={containerVariants}
                      className="grid md:grid-cols-2 gap-5"
                    >
                      {experience.responsibilities.map((resp, respIndex) => (
                        <motion.div
                          key={respIndex}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="bg-[var(--muted)]/30 border border-[var(--border)] rounded-xl p-5 transition-all hover:border-[var(--primary)]/40 hover:shadow-md"
                        >
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                              <Zap size={20} className="text-[var(--primary)]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-base text-foreground mb-2">
                                {resp.title}
                              </p>
                              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                {resp.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Technologies by Category */}
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] rounded-full" />
                      Technical Stack
                    </h4>
                    <motion.div
                      variants={containerVariants}
                      className="space-y-6"
                    >
                      {Object.entries(groupedTechs).map(([category, techs]) => {
                        const config = techCategories[category as keyof typeof techCategories];
                        const Icon = config?.icon || Code2;
                        return (
                          <motion.div key={category} variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${config?.color || 'from-gray-500/20 to-gray-600/10'} border ${config?.color?.split('border-')[1] || 'border-gray-500/30'}`}>
                                <Icon size={18} />
                              </div>
                              <h5 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                                {category}
                              </h5>
                              <div className="flex-1 h-px bg-[var(--border)]" />
                            </div>
                            <div className="flex flex-wrap gap-2 ml-9">
                              {techs.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  whileHover={{ scale: 1.08, y: -2 }}
                                  className={`px-4 py-2 bg-gradient-to-br ${config?.color || 'from-gray-500/20 to-gray-600/10'} text-[var(--foreground)] rounded-lg text-xs font-semibold border ${config?.color?.split('border-')[1] || 'border-gray-500/30'} hover:shadow-md transition-all cursor-default`}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                        {experience.responsibilities.length}
                      </div>
                      <div className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide">
                        Key Duties
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--accent)] mb-1">
                        {Object.keys(groupedTechs).length}
                      </div>
                      <div className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide">
                        Tech Areas
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-500 mb-1">
                        {experience.technologies.length}
                      </div>
                      <div className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wide">
                        Technologies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

// Helper function to calculate months between dates
function calculateMonths(startDate: string, endDate: string): number {
  const monthMap: { [key: string]: number } = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11,
  };

  const [startMonth, startYear] = startDate.split(' ');
  const [endMonth, endYear] = endDate.split(' ');

  const start = new Date(parseInt(startYear), monthMap[startMonth], 1);
  const end = new Date(parseInt(endYear), monthMap[endMonth], 1);

  return Math.round((end.getTime() - start.getTime()) / (30 * 24 * 60 * 60 * 1000));
}
