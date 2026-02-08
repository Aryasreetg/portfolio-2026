'use client';

import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';
import { certificationsData } from '@/data/certifications';
import { containerVariants, badgeVariants } from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

const iconMap: { [key: string]: React.ReactNode } = {
  Award: <Award size={20} />,
  Star: <Star size={20} />,
  Trophy: <Trophy size={20} />,
};

const typeConfig = {
  certification: {
    color: 'from-[var(--primary)]/20 to-[var(--primary)]/10 border-[var(--primary)]/30 hover:border-[var(--primary)]/50',
    badge: 'bg-[var(--primary)]/30 text-[var(--primary)] border border-[var(--primary)]/50',
    label: 'Certification',
  },
  award: {
    color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/50',
    badge: 'bg-yellow-500/30 text-yellow-300 border border-yellow-500/50',
    label: 'Award',
  },
  achievement: {
    color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50',
    label: 'Achievement',
  },
};

export default function Certifications() {
  const getIcon = (iconName?: string) => {
    return iconName && iconMap[iconName] ? iconMap[iconName] : iconMap.Award;
  };

  const groupedCerts = certificationsData.reduce(
    (acc, cert) => {
      if (!acc[cert.type]) acc[cert.type] = [];
      acc[cert.type].push(cert);
      return acc;
    },
    {} as Record<string, typeof certificationsData>
  );

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications & Achievements"
      subtitle="Professional credentials and recognitions"
    >
      <motion.div variants={containerVariants} className="space-y-8">
        {Object.entries(groupedCerts).map(([type, certs]) => (
          <div key={type}>
            <h3 className="text-xl font-bold text-foreground mb-4 capitalize">
              {type === 'certification'
                ? 'Professional Certifications'
                : type === 'award'
                  ? 'Awards'
                  : 'Achievements'}
            </h3>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-7"
            >
              {certs.map((cert, index) => {
                const icon = getIcon(cert.icon);
                const config = typeConfig[cert.type];

                return (
                  <motion.div
                    key={index}
                    variants={badgeVariants}
                    className={`interactive-card bg-card text-card-foreground border border-border rounded-2xl p-7 transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[var(--primary)]/15 text-[var(--primary)] flex-shrink-0 group-hover:scale-110 transition-transform">
                        {icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-base text-[var(--muted-foreground)] mb-3 font-medium">{cert.issuer}</p>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-[var(--muted-foreground)]">
                            {cert.issueDate}
                            {cert.expiryDate && ` - ${cert.expiryDate}`}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-lg text-xs font-bold ${config.badge}`}
                          >
                            {config.label}
                          </span>
                        </div>
                        {cert.credentialURL && (
                          <a
                            href={cert.credentialURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--primary)] hover:text-[var(--accent)] mt-2 inline-block underline"
                          >
                            View Credential
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
