import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Info, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-1">
            <Shield className="w-8 h-8" />
            <span className="font-bold text-xl">ituwa</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/courses" className="flex items-center space-x-1 hover:text-indigo-200">
              
              <span>Courses</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-indigo-200">
              
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-indigo-200">
              
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}