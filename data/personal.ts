import type { PersonalInfo } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  fullName: 'Aryasree T G',
  title: 'Java Developer & Project Lead',
  subtitle: 'Senior Software Engineer | Microservices Architect',
  bio: 'Project Lead managing three projects with 2+ years of experience as a Java-Spring Boot Developer. MCA graduate from Pondicherry University, proficient in Spring Boot for backend development and Angular/Next.js for frontend development. Passionate about delivering high-quality software solutions, architecting scalable systems, and collaborating with cross-functional teams to achieve ambitious project goals.',
  yearsOfExperience: 2,
  currentRole: 'Java Developer & Project Lead',
  educationBackground: 'MCA from Pondicherry University',
  // Path to profile image placed in the public folder. Please add the image file at `public/profile.jpg`.
  profileImage: '/image.jpeg',
  contact: {
    email: 'aryasreetg26@gmail.com',
    location: 'Kerala, India',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/Aryasreetg',
        icon: 'Github',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aryasree-tg-027461201',

        icon: 'Linkedin',
      },
      {
        name: 'Email',
        url: 'mailto:aryasreetg26@gmail.com',
        icon: 'Mail',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/_aryasree____?igsh=N3I3eW40emV6bm03&utm_source=qr',
        icon: 'Instagram',
      },
    ],
  },
};
