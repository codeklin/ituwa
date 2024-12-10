import React from 'react';
import { ArrowRight, Shield, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Master Cybersecurity Skills. Beginner friendly. Zero to Hero 
            </h1>
            <p className="text-xl mb-8">
              Enrol for our beginner friendly cybersecurity learning platform designed specifically for beginners.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beginner-Focused Courses</h3>
            <p className="text-gray-600">
              Curriculum tailored to address cybersecurity challenges specific to beginners.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Lock className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
            <p className="text-gray-600">
              Hands-on exercises and real-world scenarios to build practical cybersecurity expertise
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">
              Connect with international cybersecurity professionals and mentors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}