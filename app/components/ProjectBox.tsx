import React from 'react';

interface Project {
  name: string;
  body: string;
  githubLink: string;
  imageSrc?: string;
  videoId?: string
}

interface ProjectBoxProps {
  project: Project;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ project }) => {
  const textBox = (
    <div className='bg-slate-950 rounded-lg p-4 mx-4 mb-4'>
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
    media = <img src={project.imageSrc} alt={project.name} className='rounded-lg max-w-full h-auto mx-4 mb-4' style={{ maxWidth: '250px', maxHeight: '250px' }}/>
  } else if (project.videoId) {
    media = (
      <iframe 
        title={project.name} 
        src={`https://www.youtube.com/embed/${project.videoId}`} 
        allowFullScreen
        className='rounded-lg max-w-full h-auto mx-4'
        style={{ maxWidth: '560px', maxHeight: '500' }}
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
