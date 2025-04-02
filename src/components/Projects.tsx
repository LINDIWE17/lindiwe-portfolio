
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="project-card">
      <div className="h-48 bg-dark-100 flex items-center justify-center">
        <div className="text-5xl">{project.image}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-dark-100 text-gray-300 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.demoUrl} 
            className="text-sm text-highlight hover:text-white border border-highlight hover:bg-highlight px-3 py-1 rounded transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a 
            href={project.codeUrl} 
            className="text-sm text-gray-300 hover:text-white hover:bg-dark-100 px-3 py-1 rounded border border-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "API Project",
      description: "A RESTful API development project showcasing backend skills and API integration.",
      image: "🔄",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://github.com/LINDIWE17/API.git",
      codeUrl: "https://github.com/LINDIWE17/API.git"
    },
    {
      title: "Python Week 3",
      description: "A Python project demonstrating programming concepts and problem-solving skills.",
      image: "🐍",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://github.com/LINDIWE17/PythonWeek3.git",
      codeUrl: "https://github.com/LINDIWE17/PythonWeek3.git"
    },
    {
      title: "Weather Dashboard",
      description: "A weather app that displays current and forecasted weather information.",
      image: "☁️",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-dark-200 py-24">
      <div className="section-container">
        <h2 className="section-title">My <span className="text-highlight">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
