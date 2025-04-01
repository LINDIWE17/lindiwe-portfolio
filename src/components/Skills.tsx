
import React from 'react';

const SkillCard = ({ title, icon, description }: { title: string; icon: string; description: string }) => {
  return (
    <div className="skill-card">
      <div className="text-4xl text-highlight mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      icon: "📝",
      description: "Creating structured, semantic markup for websites with accessibility in mind."
    },
    {
      title: "CSS",
      icon: "🎨",
      description: "Styling web pages with responsive designs and modern layout techniques."
    },
    {
      title: "JavaScript",
      icon: "⚡",
      description: "Adding interactivity and dynamic features to enhance user experience."
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <h2 className="section-title">My <span className="text-highlight">Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
