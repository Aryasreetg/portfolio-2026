'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { containerVariants, itemVariants, buttonHoverVariants } from '@/lib/animations';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const initials = personalInfo.fullName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-[var(--background)] relative overflow-hidden pt-36 md:pt-32 pb-20">
      {/* decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[rgba(99,102,241,0.06)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[rgba(124,58,237,0.05)] rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          <motion.div variants={itemVariants} className="flex-1 text-center md:text-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)] border border-[var(--sidebar-border)] text-[var(--sidebar-primary-foreground)] text-xs font-semibold uppercase letter-tracking-0.05em">
                Welcome
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--foreground)] leading-tight">
              {personalInfo.fullName}
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                {personalInfo.title}
              </h2>
              <p className="text-[var(--muted-foreground)] text-base md:text-lg font-medium">{personalInfo.subtitle}</p>
            </div>

            <p className="text-[var(--muted-foreground)] text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <motion.a
                href="/resume.pdf"
                download
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="btn btn-primary"
              >
                <Download size={18} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('contact')}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="btn btn-secondary"
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {personalInfo.contact.socialLinks.map((link) => {
                const Icon = link.icon === 'Github' ? Github : link.icon === 'Linkedin' ? Linkedin : link.icon === 'Mail' ? Mail : null;
                if (!Icon) return null;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-all"
                    style={{ background: 'var(--card)', border: '1.5px solid var(--border)', color: 'var(--card-foreground)' }}
                    title={link.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
            {!imgError && personalInfo.profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.fullName} profile`}
                onError={() => setImgError(true)}
                className="w-full h-full rounded-2xl object-cover border-2" 
                style={{ borderColor: 'var(--border)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
              />
            ) : (
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex items-center justify-center text-[var(--foreground)] text-4xl font-bold border-2" style={{ borderColor: 'var(--border)' }}>
                {initials}
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="mt-16 flex justify-center">
          <div className="text-[var(--muted-foreground)] text-sm font-medium flex items-center gap-2">
            <span>Scroll to explore</span>
            <ChevronDown size={18} className="animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
