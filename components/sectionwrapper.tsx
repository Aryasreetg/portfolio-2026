"use client";

import { ReactNode, Children } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, titleVariants } from '@/lib/animations';

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
      className={`relative py-32 px-6 min-h-fit flex items-center overflow-hidden ${bgClass} ${className}`}
    >
      {/* Decorative animated accent blob (purely visual) */}
      <motion.div
        aria-hidden
        className="accent-blob pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {Children.map(children, (child, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.998 }}
              className="mb-8"
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
