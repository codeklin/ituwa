import Header from '../components/Header';
import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCourses = selectedLevel === 'all' 
    ? courses 
    : courses.filter(course => course.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <div> 
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Professional Cybersecurity Courses</h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => setSelectedLevel('all')}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Levels
            </button>
            <button 
              onClick={() => setSelectedLevel('beginner')}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === 'beginner' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Beginner
            </button>
            <button 
              onClick={() => setSelectedLevel('intermediate')}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === 'intermediate' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Intermediate
            </button>
            <button 
              onClick={() => setSelectedLevel('advanced')}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === 'advanced' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      </div>
  );
}