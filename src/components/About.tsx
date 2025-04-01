
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-dark-200 py-24">
      <div className="section-container">
        <h2 className="section-title">About <span className="text-highlight">Me</span></h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm Lindiwe Mphuthi, a passionate frontend developer at the beginning of my journey in the world of web development.
          </p>
          <p className="mb-4">
            My focus is on creating beautiful, responsive websites using HTML, CSS, and JavaScript. I enjoy the process of turning designs into functional websites and am constantly learning new techniques to improve my skills.
          </p>
          <p>
            I'm excited to grow as a developer and am looking for opportunities to collaborate on projects that will challenge me and help me expand my knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
