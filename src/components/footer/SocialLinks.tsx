
import { Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { Icon: Twitter, href: 'https://twitter.com/ituwa', label: 'Twitter' },
  { Icon: Facebook, href: 'https://facebook.com/ituwa', label: 'Facebook' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/ituwa', label: 'LinkedIn' },
  { Icon: Github, href: 'https://github.com/ituwa', label: 'GitHub' }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-gray-400 hover:text-gray-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}