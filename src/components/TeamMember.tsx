
import { LinkedinIcon, XIcon} from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamMember({ name, role, image, linkedin, twitter }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <div className="flex space-x-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600"
          >
            <XIcon className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}