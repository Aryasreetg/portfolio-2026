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
  skills: Skill[];
}

/**
 * Responsibility or achievement in a role
 */
export interface Responsibility {
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
  startDate: string;
  endDate: string; // "Present" or date string
  description: string;
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
  yearsOfExperience: number;
  currentRole: string;
  educationBackground: string;
  contact: ContactInfo;
  // Optional path to profile image in the public folder (e.g. '/profile.jpg')
  profileImage?: string;
}
