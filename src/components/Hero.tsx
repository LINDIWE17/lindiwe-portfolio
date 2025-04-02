
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Hi, I'm <span className="text-highlight">Lindiwe Mphuthi</span>
          </h1>
          <div className="overflow-hidden h-12 md:h-14">
            <p className="text-xl md:text-2xl text-gray-400 font-mono animate-typing whitespace-nowrap overflow-hidden">
              Software Developer
            </p>
          </div>
          <div className="mt-12">
            <a
              href="#contact"
              className="bg-highlight hover:bg-highlight-dark text-white font-semibold px-6 py-3 rounded-md transition-colors mr-4"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 font-semibold px-6 py-3 rounded-md transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
