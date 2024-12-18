

import { Shield, Lock, Users, Target, Globe, BookOpen } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Zero to Hero Curriculum",
    description: "Beginner friendly curiculum, from basics to advanced topics, our structured learning path ensures thorough understanding."
  },

  {
    icon: Shield,
    title: "Advanced Security Training",
    description: "Comprehensive cybersecurity training covering the latest threats and defense strategies."
  },
  {
    icon: Lock,
    title: "Hands-on Labs",
    description: "Practice in real-world environments with guided exercises and scenarios."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn directly from industry professionals with years of experience."
  },
  {
    icon: Target,
    title: "Focused Learning Paths",
    description: "Structured curricula designed for different skill levels and specializations."
  },
  {
    icon: Globe,
    title: "African Context",
    description: "Content tailored to address cybersecurity skills acquisition for Africa."
  },
  {
    icon: BookOpen,
    title: "Certification Prep",
    description: "Preparation materials for leading industry certifications."
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Learn from industry professionals and connect with fellow security enthusiasts."
  },
  {
    icon: Globe,
    title: "Globally Competitive Skills",
    description: "Training approach, curriculum and materials prepares students for global talent poo"
  },
  
  
];

export default function Features() {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Features
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to kickstart your cybersecurity career.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}