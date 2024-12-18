import  { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';
import HamburgerButton from './navigation/HamburgerButton';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#FCF8F1] bg-opacity-30 relative">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <img  className="w-40" src={logo} alt="logo" />
            </Link>
          </div>

          <HamburgerButton 
            isOpen={isMobileMenuOpen} 
            onClick={toggleMobileMenu} 
          />

          <NavLinks className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10" />

          <Link 
            to="/courses"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
          >
            Enrol Now
          </Link>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </header>
  );
}