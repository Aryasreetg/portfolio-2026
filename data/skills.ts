import type { SkillCategory } from '@/lib/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: [
      {
        name: 'Spring Boot',
        icon: 'Server',
        level: 'expert',
        description: 'Expert in building scalable microservices with Spring Boot framework',
      },
      {
        name: 'Java',
        icon: 'Code',
        level: 'expert',
        description: 'Deep expertise in core Java, concurrent programming, and design patterns',
      },
      {
        name: 'PostgreSQL',
        icon: 'Database',
        level: 'advanced',
        description: 'Database design, optimization, indexing, and query tuning',
      },
      {
        name: 'REST APIs',
        icon: 'Share2',
        level: 'expert',
        description: 'RESTful API design, implementation, and documentation',
      },
      {
        name: 'gRPC',
        icon: 'Zap',
        level: 'advanced',
        description: 'High-performance service-to-service communication with gRPC',
      },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      {
        name: 'Next.js',
        icon: 'Layout',
        level: 'advanced',
        description: 'Modern React framework with server-side rendering and optimization',
      },
      {
        name: 'Angular',
        icon: 'Layers',
        level: 'advanced',
        description: 'Component-based architecture, RxJS, and state management',
      },
      {
        name: 'TypeScript',
        icon: 'FileCode',
        level: 'expert',
        description: 'Strong typing for scalable and maintainable frontend applications',
      },
      {
        name: 'Tailwind CSS',
        icon: 'Palette',
        level: 'advanced',
        description: 'Utility-first CSS framework for rapid and responsive design',
      },
      {
        name: 'React',
        icon: 'Lightbulb',
        level: 'advanced',
        description: 'Component design, hooks, and performance optimization',
      },
    ],
  },
  {
    category: 'DevOps & Deployment',
    skills: [
      {
        name: 'Docker',
        icon: 'BoxSelect',
        level: 'advanced',
        description: 'Containerization of applications for consistent deployments',
      },
      {
        name: 'Kubernetes',
        icon: 'Layers',
        level: 'intermediate',
        description: 'Container orchestration and deployment management',
      },
      {
        name: 'GitLab CI/CD',
        icon: 'GitBranch',
        level: 'advanced',
        description: 'Automated build pipelines and deployment workflows',
      },
      {
        name: 'Jenkins',
        icon: 'Zap',
        level: 'advanced',
        description: 'CI/CD pipeline orchestration and automation',
      },
    ],
  },
  {
    category: 'Message Queues & Streaming',
    skills: [
      {
        name: 'Apache Kafka',
        icon: 'Radio',
        level: 'advanced',
        description: 'Real-time event streaming and asynchronous messaging',
      },
      {
        name: 'RabbitMQ',
        icon: 'Send',
        level: 'intermediate',
        description: 'Message broker for distributed systems',
      },
    ],
  },
  {
    category: 'Monitoring & Observability',
    skills: [
      {
        name: 'Zipkin',
        icon: 'Activity',
        level: 'advanced',
        description: 'Distributed tracing and performance monitoring',
      },
      {
        name: 'Prometheus',
        icon: 'LineChart',
        level: 'intermediate',
        description: 'Metrics collection and monitoring',
      },
      {
        name: 'Grafana',
        icon: 'BarChart3',
        level: 'intermediate',
        description: 'Data visualization and dashboards',
      },
    ],
  },
  {
    category: 'Architecture & Design',
    skills: [
      {
        name: 'Microservices',
        icon: 'Network',
        level: 'expert',
        description: 'Microservices architecture design and implementation',
      },
      {
        name: 'System Design',
        icon: 'GitNetwork',
        level: 'advanced',
        description: 'Large-scale distributed system design',
      },
      {
        name: 'Design Patterns',
        icon: 'Layers',
        level: 'expert',
        description: 'Gang of Four patterns and architectural patterns',
      },
    ],
  },
];
