export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  modules: number;
  frameworks?: string[];
  certification?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
}

export interface CourseCategory {
  id: string;
  name: string;
  description: string;
}