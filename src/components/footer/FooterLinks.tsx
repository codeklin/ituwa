
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

const sections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Courses', href: '/courses' },
      { text: 'Career', href: '/career' }
    ]
  },
  
  {
    title: 'Legal',
    links: [
      { text: 'Terms', href: '/terms' },
      { text: 'Privacy', href: '/privacy' },
      { text: 'Licenses', href: '/licenses' }
    ]
  }
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-3">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-4">
            {section.links.map((link) => (
              <li key={link.text}>
                <Link
                  to={link.href}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}