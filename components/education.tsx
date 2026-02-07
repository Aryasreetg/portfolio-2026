'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { educationData } from '@/data/education';
import {
  timelineContainerVariants,
  timelineItemVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

export default function Education() {
  const getIcon = (degreeType: string) => {
    switch (degreeType) {
      case "Master's":
        return <GraduationCap className="w-6 h-6" />;
      case "Bachelor":
        return <GraduationCap className="w-6 h-6" />;
      case "Plus":
        return <BookOpen className="w-6 h-6" />;
      case "SSLC":
        return <Award className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  const getDegreeType = (degree: string) => {
    if (degree.includes("Master's")) return "Master's";
    if (degree.includes("Bachelor")) return "Bachelor";
    if (degree.includes("Plus")) return "Plus";
    return "SSLC";
  };

  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic background and qualifications"
    >
      <motion.div variants={timelineContainerVariants} className="space-y-6">
        {educationData.map((edu, index) => {
          const degreeType = getDegreeType(edu.degree);
          const icon = getIcon(degreeType);

          return (
            <motion.div
              key={index}
              variants={timelineItemVariants}
              className="group"
            >
              <div className="interactive-card bg-card text-card-foreground border border-border rounded-lg p-6 transition-all">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[var(--primary)]/20 text-[var(--primary)] group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-[var(--primary)] mb-1">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {edu.startDate} – {edu.endDate}
                        </span>
                      </div>
                      <div className="text-emerald-400 font-semibold">
                        {edu.scoreLabel}: {edu.score}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <p className="text-xs font-semibold text-[var(--muted-foreground)] mb-3">
                    Relevant Coursework:
                  </p>
                  <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-2"
                  >
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.div
                        key={courseIndex}
                        variants={itemVariants}
                        className="flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-1">•</span>
                        <span className="text-sm text-[var(--muted-foreground)]">{course}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
