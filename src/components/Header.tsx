
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-dark-300/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <a href="#" className="text-xl font-semibold text-white hover:text-highlight transition-colors">
              <span className="text-highlight">L</span>M
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "font-medium text-sm text-gray-300 hover:text-highlight transition-colors"
                )}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
