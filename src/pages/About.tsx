import React from 'react';
import TeamMember from '../components/TeamMember';
import MissionSection from '../components/MissionSection';
import { Shield, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About ituwa</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering Africa's digital future through comprehensive cybersecurity education and training
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-12 h-12 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Expert Courses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <MissionSection />

      {/* Team Section 
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of cybersecurity experts and educators dedicated to empowering Africa's next generation of security professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <TeamMember
              name="Olajide Igbalaye"
              role="Lead Instructor & Cybersecurity Expert"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              linkedin="https://linkedin.com/in/sarah-okonjo"
              twitter="https://twitter.com/sarahokonjo"
            />
            <TeamMember
              name="Olajide Victory"
              role="Technical Director"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              linkedin="https://linkedin.com/in/michael-adebayo"
            />
            <TeamMember
              name="Abiodun Francis"
              role="Curriculum Developer"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              twitter="https://twitter.com/gracemensah"
            />
          </div>
        </div>
      </div>
      */}

      {/* Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 mb-8">
              To become Africa's leading cybersecurity education platform, creating a new generation of security professionals who will protect and secure Africa's digital future.
            </p>
            <p className="text-gray-600">
              We believe in making cybersecurity education accessible, practical, and relevant to the African context while maintaining global standards and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}