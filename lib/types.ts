// ============================================================================
// Type Definitions for Portfolio
// ============================================================================

/**
 * Skill category with associated skills
 */
export interface Skill {
  name: string;
  icon: string; // lucide-react icon name
  level: 'expert' | 'advanced' | 'intermediate';
  description: string;
}

export interface SkillCategory {
  category: string;
  /** One line on how this area fits into my work. */
  summary?: string;
  skills: Skill[];
}

/**
 * Responsibility or achievement in a role
 */
export type FocusArea =
  | 'Leadership'
  | 'Backend'
  | 'Architecture'
  | 'Distributed systems'
  | 'Frontend'
  | 'Delivery';

export interface Responsibility {
  title: string;
  description: string;
  area: FocusArea;
}

/** A step in how a role grew over time. */
export interface Milestone {
  when: string;
  title: string;
  description: string;
}

/**
 * Work experience entry
 */
export interface ExperienceEntry {
  title: string;
  company: string;
  companyLink?: string;
  location: string;
  startDate: string; // display label, e.g. "June 2023"
  startISO: string; // exact start date, used to compute duration
  endDate: string; // "Present" or date string
  description: string;
  milestones?: Milestone[];
  responsibilities: Responsibility[];
  technologies: string[];
}

/**
 * Project entry
 */
export interface Project {
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  keyFeatures: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'planning';
  impact: string;
  /** One or two words describing the problem space, e.g. "Security". */
  domain: string;
  /** The problem the project addresses. */
  problem: string;
  /** How it was built. */
  approach: string;
  /** What I personally did. */
  contribution: string;
  /** Featured projects get a larger showcase layout. */
  featured?: boolean;
}

/**
 * Education entry
 */
export interface EducationEntry {
  degree: string;
  institution: string;
  institutionLink?: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  score: string;
  scoreLabel: string; // "CGPA", "Percentage", "Score"
  coursework: string[];
}

/**
 * Certification entry
 */
export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialID?: string;
  credentialURL?: string;
  type: 'certification' | 'award' | 'achievement';
  icon?: string; // lucide-react icon name
}

/**
 * Social link
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

/**
 * Contact information
 */
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

/**
 * PersonalInfo
 */
export interface PersonalInfo {
  fullName: string;
  title: string;
  subtitle: string;
  bio: string;
  careerStart: string; // ISO date, used to compute years of experience
  teamSize: string;
  currentRole: string;
  educationBackground: string;
  contact: ContactInfo;
  // Optional path to profile image in the public folder (e.g. '/profile.jpg')
  profileImage?: string;
  /** Path to the résumé PDF in the public folder. */
  resume: string;
}
