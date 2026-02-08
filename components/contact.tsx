'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  type LucideIcon,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';
import {
  containerVariants,
  itemVariants,
  buttonHoverVariants,
} from '@/lib/animations';
import SectionWrapper from './sectionwrapper';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      link: `mailto:${personalInfo.contact.email}`,
      color: 'text-[var(--primary)] bg-[var(--primary)]/10',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.contact.phone || 'Available upon request',
      link: personalInfo.contact.phone
        ? `tel:${personalInfo.contact.phone}`
        : '#',
      color: 'text-emerald-500 bg-emerald-500/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.contact.location,
      link: '#',
      color: 'text-blue-500 bg-blue-500/10',
    },
  ];

  const socialIcons: { [key: string]: LucideIcon } = {
    Github,
    Linkedin,
    Mail,
    Twitter,
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's connect and explore opportunities to collaborate"
    >
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-4xl mx-auto mb-16"
      >
        {/* Contact Methods */}
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={index}
              href={method.link}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="interactive-card bg-card text-card-foreground border border-border rounded-2xl p-8 transition-all h-full flex flex-col items-center text-center">
                <div className={`inline-block p-4 rounded-xl ${method.color} mb-6 group-hover:scale-125 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {method.label}
                </h3>
                <p className="text-[var(--muted-foreground)] text-base break-all font-medium">
                  {method.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Social Links & CTA */}
      <motion.div
        variants={itemVariants}
        className="interactive-card bg-gradient-to-br from-[var(--card)] to-[var(--card)] text-card-foreground border border-border rounded-2xl p-12 text-center max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-foreground mb-3">
          Let&apos;s connect
        </h3>
        <p className="text-[var(--muted-foreground)] text-lg mb-10">
          I&apos;m always happy to discuss new opportunities, ideas, or collaborations.
        </p>

        <motion.div
          variants={containerVariants}
          className="flex justify-center gap-6 flex-wrap mb-10"
        >
          {personalInfo.contact.socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return Icon ? (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-[var(--muted)]/50 border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--primary)]/20 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                title={link.name}
              >
                <Icon size={22} />
              </motion.a>
            ) : null;
          })}
        </motion.div>

        <motion.a
          href={`mailto:${personalInfo.contact.email}`}
          variants={buttonHoverVariants}
          whileHover="hover"
          whileTap="tap"
          className="btn btn-primary"
        >
          <Mail size={20} />
          Send me an Email
        </motion.a>
      </motion.div>
    </SectionWrapper>
    );
}
