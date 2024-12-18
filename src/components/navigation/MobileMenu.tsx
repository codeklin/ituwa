
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden">
      <NavLinks 
        className="flex flex-col space-y-4" 
        onLinkClick={onClose}
      />
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          to="/signup"
          className="block w-full text-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
          onClick={onClose}
        >
          Enrol Now
        </Link>
      </div>
    </div>
  );
}