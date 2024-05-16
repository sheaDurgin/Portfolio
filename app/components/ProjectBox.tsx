"use client"
import React, { useState, useEffect } from 'react';

interface Project {
  name: string;
  body: string;
  githubLink: string;
  imageSrc?: string;
  videoId?: string;
}

interface ProjectBoxProps {
  project: Project;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ project }) => {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoving(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const textBox = (
    <div className={`bg-slate-950 rounded-lg p-4 mx-4 mb-4 transition-all duration-500 ${isMoving ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
      <a href={`https://github.com/sheaDurgin/${project.githubLink}`} target="_blank" rel="noopener noreferrer" 
          className="block rounded-lg hover:bg-slate-900 transition-colors duration-300 p-4"
      >
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        <h2>{project.body}</h2>
        <p className="text-sm text-gray-600">View on GitHub</p>
      </a>
    </div>
  );

  let media;
  if (project.imageSrc) {
    media = (
      <img src={project.imageSrc} alt={project.name} className={`rounded-lg max-w-full h-auto mx-4 mb-4 transition-all duration-500 ${isMoving ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ maxWidth: '250px', maxHeight: '250px' }} />
    );
  } else if (project.videoId) {
    media = (
      <iframe 
        title={project.name} 
        src={`https://www.youtube.com/embed/${project.videoId}`} 
        allowFullScreen
        className={`rounded-lg max-w-full h-auto mx-4 transition-all duration-500 ${isMoving ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
        style={{ maxWidth: '560px', maxHeight: '500px' }}
      ></iframe>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row items-center'>
      {textBox}{media} 
    </div>
  );
};

export default ProjectBox;
