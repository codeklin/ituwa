
import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

export default function NavLinks({ className = '', onLinkClick }: NavLinksProps) {
  const links = [
    
    { to: '/courses', text: 'Courses' },
    { to: '/about', text: 'About' },
    { to: '/faq', text: 'FAQ' },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="block text-base text-black transition-all duration-200 hover:text-opacity-80 py-2"
          onClick={onLinkClick}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}