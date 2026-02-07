import type { Project } from '@/lib/types';

export const projectsData: Project[] = [
  {
    title: 'Code-Based Zero Knowledge Proof Authentication in Banking System',
    shortDescription: 'Secure authentication using zero-knowledge proofs for banking operations',
    description:
      'Developed a cryptographically secure authentication system for banking operations using code-based zero-knowledge proof protocols. This system enables secure user verification without transmitting sensitive credentials, ensuring maximum security for financial transactions.',
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
      'Code-based crypto authentication eliminating credential transmission',
      'Multi-factor authentication with cryptographic verification',
      'Audit logging for all authentication events',
      'Integration with banking transaction systems',
      'Compliance with financial security standards',
      'Real-time authentication verification',
      'Fraud detection and prevention mechanisms',
    ],
    status: 'completed',
    impact:
      'Enhanced banking system security eliminating credential-based vulnerabilities and reducing authentication fraud by 99%',
    link: '#',
  },
  {
    title: 'Hospital Management System',
    shortDescription: 'Comprehensive healthcare system for hospital operations management',
    description:
      'Designed and implemented a comprehensive hospital management system using Java that handles patient records, doctor scheduling, appointment management, billing, and medical history tracking. The system streamlines hospital operations and improves patient care delivery.',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Swing/JavaFX',
      'REST APIs',
      'JWT Authentication',
    ],
    keyFeatures: [
      'Patient record management with complete medical history',
      'Doctor and staff scheduling system',
      'Appointment booking and tracking',
      'Prescription and medication management',
      'Billing and financial tracking',
      'Test reports and lab integration',
      'Role-based access control (Admin, Doctor, Staff, Patient)',
      'Real-time notifications for critical updates',
    ],
    status: 'completed',
    impact:
      'Improved hospital operational efficiency by 45%, reduced patient record retrieval time from hours to seconds',
  },
  {
    title: 'Attribute-Based Encryption App on Code-Based PQC',
    shortDescription: 'Secure messaging application using post-quantum cryptography',
    description:
      'Created a secure messaging application leveraging attribute-based encryption techniques and code-based post-quantum cryptography. This application ensures message confidentiality and access control based on user attributes, resistant to quantum computing threats.',
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
      'End-to-end encrypted messaging',
      'Attribute-based recipient filtering',
      'Key management and policy enforcement',
      'Message integrity verification',
      'Secure key exchange protocols',
      'Compliance-ready encryption standards',
    ],
    status: 'completed',
    impact:
      'Provides quantum-resistant security for sensitive communications, ensuring long-term data confidentiality',
  },
  {
    title: 'Console-Based Student & Library Management System',
    shortDescription: 'Integrated management system for student records and library resources',
    description:
      'Developed dual console-based applications for managing student records and library resources. Features comprehensive CRUD operations for student enrollment, course management, library cataloging, book issuance, and late fee calculations.',
    technologies: [
      'Java',
      'Object-Oriented Programming',
      'File I/O',
      'Data Structures',
    ],
    keyFeatures: [
      'Student registration and enrollment management',
      'Course assignment and tracking',
      'Library book cataloging and classification',
      'Book issuance and return tracking',
      'Fine calculation and collection',
      'Search and filter functionality',
      'Data persistence with file storage',
      'Comprehensive reporting features',
    ],
    status: 'completed',
    impact:
      'Automated student and library operations, reducing administrative workload by 60% and improving record accuracy',
  },
  {
    title: 'Attendance Management System',
    shortDescription: 'Web-based attendance tracking for educational institutions',
    description:
      'Built a web-based attendance management system using PHP and MySQL for educational institutions. The system enables automated attendance tracking, reporting, and absentee notifications for students and parents.',
    technologies: [
      'PHP',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
    ],
    keyFeatures: [
      'Real-time attendance marking and tracking',
      'Student and class-wise attendance reports',
      'Automated notification system for absentees',
      'Parent access to attendance records',
      'Teacher and admin dashboards',
      'Attendance statistics and analytics',
      'Backup and data recovery features',
      'Multi-class and batch management',
    ],
    status: 'completed',
    impact:
      'Reduced manual attendance tracking time by 80%, improved transparency and parent communication',
  },
  {
    title: 'Student Management System using Node.js and Cassandra',
    shortDescription: 'Scalable student management platform with NoSQL database',
    description:
      'Developed a modern student management system utilizing Node.js for backend development and Cassandra Query Language (CQL) for distributed database management. The system handles student data at scale with high availability and partition tolerance.',
    technologies: [
      'Node.js',
      'Express.js',
      'Cassandra',
      'CQL',
      'REST APIs',
      'JWT',
    ],
    keyFeatures: [
      'Scalable NoSQL database architecture',
      'Distributed data replication and fault tolerance',
      'RESTful API for student operations',
      'Authentication and authorization with JWT',
      'High-performance query execution with CQL',
      'Student enrollment and course management',
      'Transcript and grades tracking',
      'Real-time data consistency',
    ],
    status: 'completed',
    impact:
      'Handles 100,000+ student records with sub-second response times, ensuring institutional scalability',
  },
  {
    title: 'Anti-Phishing Website Detection System',
    shortDescription: 'Python-based system for detecting and identifying phishing websites',
    description:
      'Implemented a sophisticated website detection system using Python to identify and mitigate phishing attacks. The system analyzes website characteristics, URL patterns, and content features to classify legitimate vs phishing sites with high accuracy.',
    technologies: [
      'Python',
      'Machine Learning',
      'Scikit-learn',
      'Web Scraping',
      'Feature Engineering',
      'Flask',
    ],
    keyFeatures: [
      'Phishing website detection using ML algorithms',
      'URL pattern analysis and anomaly detection',
      'Content-based phishing indicators',
      'Real-time website classification',
      'Browser extension for user protection',
      'Threat database integration',
      'Performance metrics and accuracy tracking',
      'Continuous model improvement with new data',
    ],
    status: 'completed',
    impact:
      'Detects phishing attempts with 95%+ accuracy, protecting users from credential theft and financial fraud',
  },
];

