import { Course } from '../types/course';

export const implementationCourses: Course[] = [
  {
    id: 'impl-1',
    title: 'ISO 27001 Lead Implementer',
    description: 'Master the implementation of ISO 27001 ISMS, including risk assessment, documentation, and continuous improvement.',
    level: 'Advanced',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    modules: 12,
    frameworks: ['ISO 27001', 'PDCA'],
    certification: true
  },
  {
    id: 'impl-2',
    title: 'NIST Cybersecurity Framework Implementation',
    description: 'Comprehensive guide to implementing the NIST CSF across organizations of all sizes.',
    level: 'Advanced',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce',
    modules: 10,
    frameworks: ['NIST CSF', 'Risk Management'],
    certification: true
  },
  {
    id: 'impl-3',
    title: 'SOC 2 Implementation Specialist',
    description: 'Learn to implement SOC 2 controls and prepare organizations for successful audits.',
    level: 'Advanced',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    modules: 8,
    frameworks: ['SOC 2', 'COSO'],
    certification: true
  },
  {
    id: 'impl-4',
    title: 'Zero Trust Architecture Implementation',
    description: 'Design and implement Zero Trust security models in modern organizations.',
    level: 'Advanced',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    modules: 6,
    frameworks: ['Zero Trust', 'NIST SP 800-207'],
    certification: true
  }
];