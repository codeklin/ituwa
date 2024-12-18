import cardImg1 from '../assets/img21.jpg' 
import cardImg2 from '../assets/img22.png' 
import cardImg3 from '../assets/img23.jpg' 
import cardImg4 from '../assets/img24.jpg' 
import { Course } from '../types/course';

export const implementationCourses: Course[] = [
  {
    id: 'impl-1',
    title: 'ISO 27001 Lead Implementer',
    description: 'Master the implementation of ISO 27001 ISMS, including risk assessment, documentation, and continuous improvement.',
    level: 'Beginner',
    duration: '12 weeks',
    image: cardImg1,
    modules: 12,
    frameworks: ['ISO 27001', 'PDCA'],
    certification: true
  },
  {
    id: 'impl-2',
    title: 'NIST Cybersecurity Framework Implementation',
    description: 'Comprehensive guide to implementing the NIST CSF across organizations of all sizes.',
    level: 'Beginner',
    duration: '10 weeks',
    image: cardImg2,
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
    image: cardImg3,
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
    image: cardImg4,
    modules: 6,
    frameworks: ['Zero Trust', 'NIST SP 800-207'],
    certification: true
  }
];