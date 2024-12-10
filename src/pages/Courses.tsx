import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { BookOpen } from 'lucide-react';

export default function Courses() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCourses = selectedLevel === 'all' 
    ? courses 
    : courses.filter(course => course.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Cybersecurity Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master cybersecurity with our comprehensive course catalog
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setSelectedLevel('all')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors
              ${selectedLevel === 'all' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
          >
            All Levels
          </button>
          <button 
            onClick={() => setSelectedLevel('beginner')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors
              ${selectedLevel === 'beginner' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
          >
            Beginner
          </button>
          <button 
            onClick={() => setSelectedLevel('intermediate')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors
              ${selectedLevel === 'intermediate' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
          >
            Intermediate
          </button>
          <button 
            onClick={() => setSelectedLevel('advanced')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors
              ${selectedLevel === 'advanced' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
          >
            Advanced
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or check back later for new courses.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}