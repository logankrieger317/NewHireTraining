import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">WebDev Training</Link>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Menu icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/html" className="hover:text-blue-300 transition-colors">HTML</Link></li>
            <li><Link to="/css" className="hover:text-blue-300 transition-colors">CSS</Link></li>
            <li><Link to="/javascript" className="hover:text-blue-300 transition-colors">JavaScript</Link></li>
            <li><Link to="/react" className="hover:text-blue-300 transition-colors">React</Link></li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/html" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-300 hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HTML
            </Link>
            <Link 
              to="/css" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-300 hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CSS
            </Link>
            <Link 
              to="/javascript" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-300 hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              JavaScript
            </Link>
            <Link 
              to="/react" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-300 hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              React
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
