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
      <motion.div variants={containerVariants} className="space-y-12">
        {skillsData.map((skillCategory, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={itemVariants}
            className="group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full" />
              <h3 className="text-2xl font-bold text-foreground">
                {skillCategory.category}
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-4"
            >
              {skillCategory.skills.map((skill, skillIndex) => {
                const icon = getIcon(skill.icon);
                const levelColors = {
                  expert:
                    'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:border-emerald-500/50',
                  advanced:
                    'from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-500/50',
                  intermediate:
                    'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-500/50',
                };

                const levelBadgeColors = {
                  expert: 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50',
                  advanced:
                    'bg-blue-500/30 text-blue-300 border border-blue-500/50',
                  intermediate:
                    'bg-purple-500/30 text-purple-300 border border-purple-500/50',
                };

                return (
                  <motion.div
                    key={skillIndex}
                    variants={badgeVariants}
                    className={`interactive-card bg-card text-card-foreground border border-border rounded-lg p-4 transition-all`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded bg-[var(--primary)]/10 text-[var(--primary)]">
                            {icon}
                          </div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {skill.name}
                          </h4>
                        </div>
                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase whitespace-nowrap ${levelBadgeColors[skill.level]}`}
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
