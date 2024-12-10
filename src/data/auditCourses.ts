import { Course } from '../types/course';

export const auditCourses: Course[] = [
  {
    id: 'audit-1',
    title: 'ISO 27001 Lead Auditor',
    description: 'Comprehensive training for planning and conducting ISO 27001 audits with international recognition.',
    level: 'Advanced',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    modules: 12,
    frameworks: ['ISO 27001', 'ISO 19011'],
    certification: true
  },
  {
    id: 'audit-2',
    title: 'Advanced Security Assessment Techniques',
    description: 'Master modern security assessment methodologies and tools for comprehensive audits.',
    level: 'Advanced',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f',
    modules: 8,
    frameworks: ['OSSTMM', 'NIST SP 800-115'],
    certification: true
  },
  {
    id: 'audit-3',
    title: 'Compliance Audit Professional',
    description: 'Learn to conduct compliance audits across multiple frameworks including SOC 2, PCI DSS, and HIPAA.',
    level: 'Advanced',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0',
    modules: 10,
    frameworks: ['SOC 2', 'PCI DSS', 'HIPAA'],
    certification: true
  },
  {
    id: 'audit-4',
    title: 'Cloud Security Auditor',
    description: 'Specialized training for auditing cloud environments and cloud service providers.',
    level: 'Advanced',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    modules: 8,
    frameworks: ['CSA STAR', 'ISO 27017'],
    certification: true
  }
];