'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '@/lib/animations';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable section wrapper component with scroll-triggered animations
 * Alternates background for visual rhythm based on section id
 */
export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionWrapperProps) {
  // Sections with alternating backgrounds for visual rhythm
  const alternateIds = ['skills', 'education', 'certifications'];
  const useMutedBg = alternateIds.includes(id);
  const bgClass = useMutedBg ? 'bg-muted/40' : 'bg-background';

  return (
    <section
      id={id}
      className={`py-20 px-6 min-h-screen flex items-center ${bgClass} ${className}`}
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
