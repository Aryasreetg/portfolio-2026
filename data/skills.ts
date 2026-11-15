import type { SkillCategory } from '@/lib/types';

// Levels: expert = daily driver, advanced = regular production use, intermediate = working knowledge.
export const skillsData: SkillCategory[] = [
  {
    category: 'Backend Engineering',
    summary: 'Where I spend most of my day.',
    skills: [
      { name: 'Java', icon: 'Code', level: 'expert', description: 'Core Java, concurrency and design patterns' },
      { name: 'Spring Boot', icon: 'Server', level: 'expert', description: 'Production microservices with Spring Boot' },
      { name: 'Spring Security', icon: 'Shield', level: 'advanced', description: 'Authentication, authorisation and hardening' },
      { name: 'REST APIs', icon: 'Share2', level: 'expert', description: 'API design, implementation and documentation' },
      { name: 'gRPC', icon: 'Zap', level: 'advanced', description: 'High-performance service-to-service calls' },
    ],
  },
  {
    category: 'Frontend Engineering',
    summary: 'Enough depth to lead frontend teams and review their work.',
    skills: [
      { name: 'Angular', icon: 'Layers', level: 'advanced', description: 'Components, RxJS and state management' },
      { name: 'Next.js', icon: 'Layout', level: 'advanced', description: 'Server rendering and performance' },
      { name: 'React', icon: 'Lightbulb', level: 'advanced', description: 'Components, hooks and performance' },
      { name: 'TypeScript', icon: 'FileCode', level: 'expert', description: 'Typed, maintainable front ends' },
      { name: 'Tailwind CSS', icon: 'Palette', level: 'advanced', description: 'Responsive, utility-first styling' },
    ],
  },
  {
    category: 'Databases',
    summary: 'Relational first, NoSQL when scale demands it.',
    skills: [
      { name: 'PostgreSQL', icon: 'Database', level: 'advanced', description: 'Schema design, indexing and query tuning' },
      { name: 'MySQL', icon: 'Database', level: 'advanced', description: 'Relational modelling for web applications' },
      { name: 'Apache Cassandra', icon: 'Database', level: 'intermediate', description: 'Distributed NoSQL data modelling' },
    ],
  },
  {
    category: 'Microservices & Architecture',
    summary: 'Service boundaries, events and the patterns between them.',
    skills: [
      { name: 'Microservices', icon: 'Network', level: 'expert', description: 'Service boundaries and independent deploys' },
      { name: 'System Design', icon: 'GitNetwork', level: 'advanced', description: 'Large-scale distributed system design' },
      { name: 'Design Patterns', icon: 'Layers', level: 'expert', description: 'GoF and architectural patterns' },
      { name: 'Apache Kafka', icon: 'Radio', level: 'advanced', description: 'Event streaming and async messaging' },
      { name: 'RabbitMQ', icon: 'Send', level: 'intermediate', description: 'Message brokering for distributed systems' },
    ],
  },
  {
    category: 'DevOps & Deployment',
    summary: 'From commit to container to production.',
    skills: [
      { name: 'Docker', icon: 'BoxSelect', level: 'advanced', description: 'Containerised, consistent deployments' },
      { name: 'Kubernetes', icon: 'Layers', level: 'intermediate', description: 'Container orchestration' },
      { name: 'GitLab CI/CD', icon: 'GitBranch', level: 'advanced', description: 'Automated build and deploy pipelines' },
      { name: 'Jenkins', icon: 'Zap', level: 'advanced', description: 'Pipeline orchestration and automation' },
    ],
  },
  {
    category: 'Testing & Quality',
    summary: 'Proving it works, then watching it in production.',
    skills: [
      { name: 'Postman', icon: 'Send', level: 'advanced', description: 'API test suites and integration testing' },
      { name: 'Zipkin', icon: 'Activity', level: 'advanced', description: 'Distributed tracing and bottleneck analysis' },
      { name: 'Prometheus', icon: 'LineChart', level: 'intermediate', description: 'Metrics collection and alerting' },
      { name: 'Grafana', icon: 'BarChart3', level: 'intermediate', description: 'Monitoring dashboards' },
      { name: 'Code review', icon: 'Check', level: 'expert', description: 'Reviewing for correctness, clarity and security' },
    ],
  },
  {
    category: 'Engineering Leadership',
    summary: 'The part of the job that multiplies everything else.',
    skills: [
      { name: 'Leading a 25+ team', icon: 'Users', level: 'expert', description: 'Direction, delivery and team health' },
      { name: 'Mentoring', icon: 'Sprout', level: 'expert', description: 'Growing engineers through ownership' },
      { name: 'Project delivery', icon: 'Target', level: 'expert', description: 'Three concurrent projects, conception to production' },
      { name: 'Technical documentation', icon: 'FileText', level: 'advanced', description: 'API docs and decision records' },
      { name: 'Cross-team collaboration', icon: 'MessagesSquare', level: 'advanced', description: 'Working across teams and stakeholders' },
    ],
  },
];
