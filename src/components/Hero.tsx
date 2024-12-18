import heroImage from '../assets/hero-img.png';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className='text-center lg:text-left'>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">LEARN | EARN | FAST</p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">Master Cybersecurity Skills</h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Start your journey to becoming a cybersecurity expert.</p>

            <Link to="/courses" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400">
              Start Learning
              <ArrowRight className="w-6 h-6 ml-8 -mr-2" />
            </Link>
          </div>

          <div>
            <img  className="w-full" src={heroImage} alt="Cybersecurity" />
          </div>
        </div>
      </div>
    </section>
  );
}