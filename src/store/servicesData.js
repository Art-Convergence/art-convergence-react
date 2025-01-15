export const services = [
  {
    id: 1,
    title: 'Graphics Designing',
    description: 'Creative visual solutions for your brand identity, marketing materials, and digital assets.',
    icon: '🎨',
    features: [
      'Brand Identity Design',
      'UI/UX Design',
      'Social Media Graphics',
      'Print Materials',
      'Motion Graphics'
    ]
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications built with modern technologies.',
    icon: '💻',
    features: [
      'Frontend Development',
      'Backend Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Integration'
    ]
  },
  {
    id: 3,
    title: 'Web Maintenance',
    description: 'Regular updates, security monitoring, and performance optimization for your website.',
    icon: '🔧',
    features: [
      'Security Updates',
      'Performance Optimization',
      'Content Updates',
      'Backup Management',
      'Technical Support'
    ]
  },
  {
    id: 4,
    title: 'System Administration',
    description: 'Professional management and maintenance of your IT infrastructure.',
    icon: '🖥️',
    features: [
      'Server Management',
      'Network Configuration',
      'Security Implementation',
      'System Monitoring',
      'Disaster Recovery'
    ]
  },
  {
    id: 5,
    title: 'DevOps Services',
    description: 'Streamline your development and operations with modern DevOps practices.',
    icon: '⚙️',
    features: [
      'CI/CD Pipeline Setup',
      'Container Orchestration',
      'Infrastructure as Code',
      'Cloud Migration',
      'Automated Testing'
    ]
  },
  {
    id: 6,
    title: 'Database Management',
    description: 'Comprehensive database solutions for optimal data handling and security.',
    icon: '🗄️',
    features: [
      'Database Design',
      'Performance Tuning',
      'Data Migration',
      'Backup & Recovery',
      'Security Implementation'
    ]
  },
  {
    id: 7,
    title: 'Cloud Solutions',
    description: 'Expert cloud services for scalable and reliable infrastructure.',
    icon: '☁️',
    features: [
      'AWS/Azure/GCP Setup',
      'Cloud Architecture',
      'Cost Optimization',
      'Serverless Solutions',
      'Cloud Security'
    ]
  },
  {
    id: 8,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive your business forward.',
    icon: '💡',
    features: [
      'Technology Assessment',
      'Digital Transformation',
      'IT Strategy Planning',
      'Security Auditing',
      'Process Optimization'
    ]
  },
  {
    id: 9,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒',
    features: [
      'Security Assessments',
      'Penetration Testing',
      'Security Training',
      'Incident Response',
      'Compliance Management'
    ]
  }
];

export const getFeaturedServices = () => {
  return services.filter(service => service.featured);
};

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
}; 