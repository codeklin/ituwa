import cardImg1 from '../assets/img1.jpg' 
import cardImg2 from '../assets/img2.jpg' 
import cardImg3 from '../assets/img3.jpg' 
import cardImg4 from '../assets/img4.jpg' 
import cardImg5 from '../assets/img5.jpg' 
import cardImg6 from '../assets/img6.jpg' 
import { Course } from '../types/course';

import { auditCourses } from './auditCourses';
import { implementationCourses } from './implementationCourses';

const fundamentalCourses: Course[] = [
  {
    id: 'fund-1',
    title: 'Cybersecurity Fundamentals',
    description: 'Perfect starting point for beginners. Learn core concepts, basic terminology, and essential security principles.',
    level: 'Beginner',
    duration: '4 weeks',
    image: cardImg1,
    modules: 5
  },
  {
    id: 'fund-2',
    title: 'Introduction to OSINT',
    description: 'Learn the basics of Open Source Intelligence (OSINT) gathering, tools, and techniques for ethical information collection.',
    level: 'Beginner',
    duration: '4 weeks',
    image: cardImg2,
    modules: 6
  },
  {
    id: 'fund-3',
    title: 'Penetartion Testing for Beginners',
    description: 'Learn the basics of penetration testing, including tools, techniques, and best practices.',
    level: 'Beginner',
    duration: '8 weeks',
    image: cardImg3,
    modules: 8,
    certification: true
  }
];

const frameworkCourses: Course[] = [
  {
    id: 'frame-1',
    title: 'NIST Risk Management Framework',
    description: 'Comprehensive coverage of NIST RMF implementation and assessment.',
    level: 'Beginner',
    duration: '10 weeks',
    image: cardImg4,
    modules: 10,
    frameworks: ['NIST RMF', 'NIST SP 800-37'],
    certification: true
  },
  {
    id: 'frame-2',
    title: 'PCI DSS Implementation & Audit',
    description: 'Complete guide to PCI DSS compliance, implementation, and auditing.',
    level: 'Beginner',
    duration: '8 weeks',
    image: cardImg5,
    modules: 8,
    frameworks: ['PCI DSS'],
    certification: true
  },
  {
    id: 'frame-3',
    title: 'Introduction to Ethical Hacking',
    description: 'Learn the basics of ethical hacking, including tools, techniques, and best practices.',
    level: 'Intermediate',
    duration: '8 weeks',
    image: cardImg6,
    modules: 8,
    certification: true
  }
];

export const courses: Course[] = [
  ...fundamentalCourses,
  ...implementationCourses,
  ...auditCourses,
  ...frameworkCourses
];