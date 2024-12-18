
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
            <img className="w-40" src="./src/assets/logowhite.png" alt="logo"/>
            </Link>
            <p className="text-gray-300 text-base">
              Empowering Africa's digital future through comprehensive cybersecurity education.
            </p>
            <SocialLinks />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-18">
              <FooterLinks />
            </div>
            <Newsletter />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} ituwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}