
import { Clock, BookOpen, Award, Library } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {course.level}
          </span>
          {course.certification && (
            <span className="flex items-center text-indigo-600">
              <Award className="w-4 h-4 mr-1" />
              Certification
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        {course.frameworks && (
          <div className="mb-4">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Library className="w-4 h-4 mr-1" />
              Frameworks:
            </div>
            <div className="flex flex-wrap gap-2">
              {course.frameworks.map((framework) => (
                <span 
                  key={framework}
                  className="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-600"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules} modules</span>
          </div>
        </div>
      </div>
    </div>
  );
}