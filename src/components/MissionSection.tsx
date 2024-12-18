import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

export default function MissionSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Empower Africa</h3>
            <p className="text-gray-600">
              Building a strong foundation of cybersecurity expertise across the African continent
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessible Education</h3>
            <p className="text-gray-600">
              Making cybersecurity education accessible to everyone, from beginners to advanced learners
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe className="w-12 h-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
            <p className="text-gray-600">
              Delivering world-class cybersecurity education tailored to African contexts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}