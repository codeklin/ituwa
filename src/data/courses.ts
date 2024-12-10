import { Course } from '../types/course';
import { implementationCourses } from './implementationCourses';
import { auditCourses } from './auditCourses';

const fundamentalCourses: Course[] = [
  {
    id: 'fund-1',
    title: 'Cybersecurity Fundamentals',
    description: 'Perfect starting point for beginners. Learn core concepts, basic terminology, and essential security principles.',
    level: 'Beginner',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    modules: 5
  },
  {
    id: 'fund-2',
    title: 'Introduction to OSINT',
    description: 'Learn the basics of Open Source Intelligence (OSINT) gathering, tools, and techniques for ethical information collection.',
    level: 'Beginner',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec',
    modules: 6
  }
];

const frameworkCourses: Course[] = [
  {
    id: 'frame-1',
    title: 'NIST Risk Management Framework',
    description: 'Comprehensive coverage of NIST RMF implementation and assessment.',
    level: 'Advanced',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
    modules: 10,
    frameworks: ['NIST RMF', 'NIST SP 800-37'],
    certification: true
  },
  {
    id: 'frame-2',
    title: 'PCI DSS Implementation & Audit',
    description: 'Complete guide to PCI DSS compliance, implementation, and auditing.',
    level: 'Advanced',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    modules: 8,
    frameworks: ['PCI DSS'],
    certification: true
  }
];

export const courses: Course[] = [
  ...fundamentalCourses,
  ...implementationCourses,
  ...auditCourses,
  ...frameworkCourses
];