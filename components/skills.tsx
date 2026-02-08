'use client';

import { motion } from 'framer-motion';
import {
  Server,
  Code,
  Database,
  Share2,
  Zap,
  Layout,
  Layers,
  FileCode,
  Palette,
  Lightbulb,
  BoxSelect,
  GitBranch,
  Radio,
  Send,
  Activity,
  LineChart,
  BarChart3,
  Network,
} from 'lucide-react';
import { skillsData } from '@/data/skills';
import { containerVariants, itemVariants, badgeVariants } from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

const iconMap: { [key: string]: React.ReactNode } = {
  Server: <Server size={20} />,
  Code: <Code size={20} />,
  Database: <Database size={20} />,
  Share2: <Share2 size={20} />,
  Zap: <Zap size={20} />,
  Layout: <Layout size={20} />,
  Layers: <Layers size={20} />,
  FileCode: <FileCode size={20} />,
  Palette: <Palette size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  BoxSelect: <BoxSelect size={20} />,
  GitBranch: <GitBranch size={20} />,
  Radio: <Radio size={20} />,
  Send: <Send size={20} />,
  Activity: <Activity size={20} />,
  LineChart: <LineChart size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Network: <Network size={20} />,
};

export default function Skills() {
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || <Code size={20} />;
  };

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Comprehensive expertise across modern technologies and architectures"
    >
      <motion.div variants={containerVariants} className="space-y-16">
        {skillsData.map((skillCategory, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="group"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-2 w-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full" />
              <h3 className="text-3xl font-bold text-foreground">
                {skillCategory.category}
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {skillCategory.skills.map((skill, skillIndex) => {
                const icon = getIcon(skill.icon);

                const levelBadgeColors = {
                  expert: 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/40',
                  advanced:
                    'bg-blue-500/20 text-blue-600 border border-blue-500/40',
                  intermediate:
                    'bg-purple-500/20 text-purple-600 border border-purple-500/40',
                };

                return (
                  <motion.div
                    key={skillIndex}
                    variants={badgeVariants}
                    className={`interactive-card bg-card text-card-foreground border border-border rounded-2xl p-7 transition-all`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="p-3 rounded-lg bg-[var(--primary)]/15 text-[var(--primary)] flex-shrink-0 group-hover:scale-110 transition-transform">
                            {icon}
                          </div>
                          <h4 className="text-xl font-bold text-foreground">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-[var(--muted-foreground)] text-base leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase whitespace-nowrap flex-shrink-0 tracking-wide ${levelBadgeColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
