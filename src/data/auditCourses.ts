import { Course } from '../types/course';
import cardImg1 from '../assets/img11.png' 
import cardImg2 from '../assets/img12.jpg' 
import cardImg3 from '../assets/img14.jpg' 
import cardImg4 from '../assets/img13.jpg' 


export const auditCourses: Course[] = [
  {
    id: 'audit-1',
    title: 'ISO 27001 Lead Auditor',
    description: 'Comprehensive training for planning and conducting ISO 27001 audits with international recognition.',
    level: 'Beginner',
    duration: '12 weeks',
    image: cardImg1,
    modules: 12,
    frameworks: ['ISO 27001', 'ISO 19011'],
    certification: true
  },
  {
    id: 'audit-2',
    title: 'Security Assessment Techniques',
    description: 'Master modern security assessment methodologies and tools for comprehensive audits.',
    level: 'Beginner',
    duration: '8 weeks',
    image: cardImg2,
    modules: 8,
    frameworks: ['OSSTMM', 'NIST SP 800-115'],
    certification: true
  },
  {
    id: 'audit-3',
    title: 'Compliance Audit Professional',
    description: 'Learn to conduct compliance audits across multiple frameworks including SOC 2, PCI DSS, and HIPAA.',
    level: 'Beginner',
    duration: '10 weeks',
    image: cardImg3,
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
    image: cardImg4,
    modules: 8,
    frameworks: ['CSA STAR', 'ISO 27017'],
    certification: true
  }
];