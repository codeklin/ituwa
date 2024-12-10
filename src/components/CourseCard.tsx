
import { Clock, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const handleEnrollClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open('https://forms.gle/your-form-id', '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'}`}>
            {course.level}
          </span>
        </div>
        {course.certification && (
          <div className="absolute top-4 right-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Award className="w-4 h-4 mr-1" />
              Certified
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 h-14">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {course.description}
        </p>
        
        {course.frameworks && (
          <div className="mb-4">
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
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules} modules</span>
          </div>
        </div>
        
        <button 
          onClick={handleEnrollClick}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-indigo-700 transition-colors"
        >
          Enroll Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}