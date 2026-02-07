'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
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
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-[var(--background)] relative overflow-hidden">
      {/* decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgba(99,102,241,0.08)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgba(124,58,237,0.06)] rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <motion.div variants={itemVariants} className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--secondary)] border border-[var(--sidebar-border)] text-[var(--sidebar-primary-foreground)] text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--foreground)]">
              {personalInfo.fullName}
            </h1>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                {personalInfo.title}
              </h2>
              <p className="text-[var(--muted-foreground)] text-sm md:text-base">{personalInfo.subtitle}</p>
            </div>

            <p className="text-[var(--muted-foreground)] text-base md:text-lg leading-relaxed max-w-2xl mb-6">
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <motion.a
                href="/resume.pdf"
                download
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: 'var(--primary-foreground)' }}
                className="px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
              >
                <Download size={18} />
                Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('contact')}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
                className="px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[var(--muted)] transition-colors border"
              >
                Get in Touch
                <ArrowRight size={16} />
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-3">
              {personalInfo.contact.socialLinks.map((link) => {
                const Icon = link.icon === 'Github' ? Github : link.icon === 'Linkedin' ? Linkedin : link.icon === 'Mail' ? Mail : null;
                if (!Icon) return null;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                    style={{ background: 'var(--card)', border: '1px solid var(--sidebar-border)', color: 'var(--card-foreground)' }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0">
            {!imgError && personalInfo.profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.fullName} profile`}
                onError={() => setImgError(true)}
                className="w-full h-full rounded-full object-cover border-2" 
                style={{ borderColor: 'var(--sidebar-border)', boxShadow: '0 15px 30px rgba(2,6,23,0.12)' }}
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex items-center justify-center text-[var(--foreground)] text-3xl font-semibold border-2" style={{ borderColor: 'var(--sidebar-border)' }}>
                {initials}
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-10 flex justify-center">
          <div className="text-[var(--muted-foreground)] text-sm">Scroll to explore</div>
        </motion.div>
      </div>
    </section>
  );
}
