'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
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

  const socialIcons: { [key: string]: React.ComponentType<any> } = {
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
        className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12"
      >
        {/* Contact Methods */}
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={index}
              href={method.link}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="interactive-card bg-card text-card-foreground border border-border rounded-lg p-6 transition-all h-full">
                <div className={`inline-block p-3 rounded-lg ${method.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.label}
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm break-all">
                  {method.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
          className="interactive-card bg-card text-card-foreground border border-border rounded-lg p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            Connect with me on social media
          </h3>
          <motion.div
            variants={containerVariants}
            className="flex justify-center gap-4 flex-wrap"
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-[var(--card)]/50 border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--primary)]/20 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all group"
                >
                  <Icon size={20} className="group-hover:animate-pulse" />
                </motion.a>
              ) : null;
            })}
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-12"
      >
        <motion.a
          href={`mailto:${personalInfo.contact.email}`}
          variants={buttonHoverVariants}
          whileHover="hover"
          whileTap="tap"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-shadow"
        >
          <Send size={20} />
          Send me an Email
        </motion.a>
      </motion.div>
    </SectionWrapper>
    );
}
