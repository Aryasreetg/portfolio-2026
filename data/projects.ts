import type { Project } from '@/lib/types';

// Note: the previous GitHub links (github.com/aryasree/...) returned 404, so they were removed.
// Add `github` or `link` back to any project once the repository or demo is public.
export const projectsData: Project[] = [
  {
    title: 'Code-Based Zero Knowledge Proof Authentication in Banking System',
    shortDescription: 'Cryptographically secure authentication using zero-knowledge proofs',
    description:
      'Developed a cryptographically secure authentication system using code-based zero-knowledge proof protocols. This academic project explores advanced cryptographic concepts and demonstrates passwordless authentication without transmitting sensitive credentials—a critical innovation for secure financial systems.',
    domain: 'Security',
    problem:
      'Banking logins still send secrets over the wire, so a single intercepted credential can compromise an account.',
    approach:
      'A code-based zero-knowledge proof protocol lets the user prove they hold a secret without ever transmitting it, backed by Spring Security, PostgreSQL and full audit logging.',
    contribution: 'Researched the protocol and designed and built the authentication flow end to end.',
    featured: true,
    technologies: [
      'Java',
      'Zero-Knowledge Proofs',
      'Cryptography',
      'Spring Security',
      'PostgreSQL',
      'REST APIs',
    ],
    keyFeatures: [
      'Zero-knowledge proof protocol implementation for passwordless authentication',
      'Code-based cryptographic authentication eliminating credential transmission',
      'Multi-factor authentication with cryptographic verification',
      'Audit logging for all authentication events',
      'Compliance with financial security standards',
    ],
    status: 'completed',
    impact:
      'Demonstrates advanced cryptographic security principles; eliminates credential-based vulnerabilities',
  },
  {
    title: 'Hospital Management System',
    shortDescription: 'Full-stack healthcare system for hospital operations',
    description:
      'Designed and implemented a comprehensive hospital management system demonstrating full-stack development skills. The system integrates patient records, doctor scheduling, appointment management, and billing—showcasing expertise in system design, database optimization, and building scalable applications.',
    domain: 'Healthcare',
    problem:
      'Patient records, schedules, prescriptions and billing often live in separate tools, which slows staff down and causes errors.',
    approach:
      'One Spring Boot application with a MySQL schema covering patients, staff, appointments and billing, secured with JWT and role-based access for admins, doctors, staff and patients.',
    contribution: 'Designed the data model and implemented the system across backend and user interface.',
    featured: true,
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Swing/JavaFX', 'REST APIs', 'JWT Authentication'],
    keyFeatures: [
      'Patient record management with complete medical history',
      'Doctor and staff scheduling system with conflict resolution',
      'Appointment booking and real-time tracking',
      'Prescription and medication management workflow',
      'Financial tracking and billing automation',
      'Role-based access control (Admin, Doctor, Staff, Patient)',
    ],
    status: 'completed',
    impact:
      'Demonstrates full-stack development, system architecture, and database design for enterprise applications',
  },
  {
    title: 'Attribute-Based Encryption App on Code-Based PQC',
    shortDescription: 'Post-quantum cryptography for secure messaging',
    description:
      'Created a secure messaging application leveraging attribute-based encryption and code-based post-quantum cryptography. This research-oriented project explores quantum-resistant security protocols and advanced access control mechanisms—preparing for the quantum computing era.',
    domain: 'Post-quantum',
    problem:
      'Today’s encrypted messages could be decrypted by future quantum computers, and most messaging tools offer only all-or-nothing access.',
    approach:
      'Attribute-based encryption on top of code-based post-quantum cryptography, so only users with the right attributes can read a message — delivered over WebSockets with a Flask backend.',
    contribution: 'Researched the cryptographic schemes and built the messaging application and key management.',
    featured: true,
    technologies: [
      'Python',
      'Post-Quantum Cryptography',
      'Attribute-Based Encryption',
      'Flask',
      'PostgreSQL',
      'WebSockets',
    ],
    keyFeatures: [
      'Attribute-based encryption for fine-grained access control',
      'Post-quantum cryptography (code-based) resistant to quantum attacks',
      'End-to-end encrypted messaging infrastructure',
      'Key management and cryptographic policy enforcement',
      'Secure key exchange protocols',
    ],
    status: 'completed',
    impact:
      'Demonstrates advanced cryptographic research; provides quantum-resistant security for sensitive communications',
  },
  {
    title: 'Console-Based Student & Library Management System',
    shortDescription: 'Core OOP and data structures for institutional management',
    description:
      'Developed dual console-based applications demonstrating object-oriented programming principles and data structure implementation. This project focuses on CRUD operations, file I/O, and comprehensive data management for student enrollment and library cataloging.',
    domain: 'Education',
    problem: 'Small institutions need a simple way to track students, books, loans and fines.',
    approach: 'Two Java console applications built on clean OOP design, custom data structures and file-based persistence.',
    contribution: 'Designed and built both applications.',
    technologies: ['Java', 'Object-Oriented Programming', 'Data Structures', 'File I/O'],
    keyFeatures: [
      'Student registration and course management with OOP principles',
      'Library cataloging and classification system',
      'Book issuance and return tracking',
      'Automated fine calculation and collection',
      'Search and advanced filtering functionality',
      'Data persistence with file-based storage',
    ],
    status: 'completed',
    impact:
      'Demonstrates core programming concepts and data structure design for practical business applications',
  },
  {
    title: 'Attendance Management System',
    shortDescription: 'Web application for institutional attendance tracking',
    description:
      'Built a web-based attendance management system demonstrating full-stack web development skills. The system enables real-time attendance tracking, automated reporting, and parent notifications—illustrating practical web application architecture for educational institutions.',
    domain: 'Education',
    problem: 'Paper attendance makes reporting slow and leaves parents uninformed about absences.',
    approach: 'A PHP and MySQL web app with dashboards for teachers and parents, automated reports and absence notifications.',
    contribution: 'Built the web application, database and reporting.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    keyFeatures: [
      'Real-time attendance marking and tracking interface',
      'Student and class-wise attendance reporting',
      'Automated notification system for absentees',
      'Parent and teacher dashboard access',
      'Attendance statistics and analytics',
      'Multi-class and batch management',
    ],
    status: 'completed',
    impact:
      'Demonstrates web application fundamentals and user experience design for institutional workflows',
  },
  {
    title: 'Student Management System using Node.js and Cassandra',
    shortDescription: 'Scalable NoSQL architecture for distributed systems',
    description:
      'Developed a modern student management system utilizing Node.js and Cassandra to demonstrate proficiency in distributed database design and scalability. This project showcases understanding of NoSQL architecture, high-availability systems, and building applications for enterprise-scale data.',
    domain: 'Data',
    problem: 'Student data at scale needs to stay available even when individual database nodes fail.',
    approach: 'A Node.js and Express REST API on Apache Cassandra, with replication for fault tolerance and JWT-based auth.',
    contribution: 'Designed the Cassandra data model and built the API.',
    technologies: ['Node.js', 'Express.js', 'Cassandra', 'CQL', 'REST APIs', 'JWT'],
    keyFeatures: [
      'Scalable NoSQL database architecture with Cassandra',
      'Distributed data replication and fault tolerance',
      'RESTful API design for student operations',
      'Authentication and authorization with JWT',
      'High-performance query execution with CQL',
      'Transcript and grades tracking system',
    ],
    status: 'completed',
    impact:
      'Demonstrates distributed systems design and NoSQL database optimization for enterprise scalability',
  },
  {
    title: 'Anti-Phishing Website Detection System',
    shortDescription: 'Machine learning-based cybersecurity threat detection',
    description:
      'Implemented a sophisticated website detection system using Python and machine learning to identify phishing attacks. This project demonstrates expertise in feature engineering, model training, and building practical security solutions using ML algorithms.',
    domain: 'Machine learning',
    problem: 'Phishing sites imitate real ones closely enough that users can’t reliably tell them apart.',
    approach:
      'URL and page-content features feed a scikit-learn classifier, served through a Flask API for real-time checks.',
    contribution: 'Engineered the features, trained the model and built the classification API.',
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Web Scraping', 'Feature Engineering', 'Flask'],
    keyFeatures: [
      'Phishing website detection using ML classification algorithms',
      'URL pattern analysis and anomaly detection',
      'Content-based feature extraction and engineering',
      'Real-time website classification API',
      'Model performance metrics and accuracy tracking',
      'Continuous model improvement pipeline',
    ],
    status: 'completed',
    impact:
      'Demonstrates machine learning application in cybersecurity; detects phishing with 95%+ accuracy',
  },
];
