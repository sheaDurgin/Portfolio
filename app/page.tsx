import React from 'react';
import ProjectBox from './components/ProjectBox';
import PaperPox from './components/PaperBox'

const projects = [
  { name: 'Recipe Roots', body: 'Recipe Roots is a family cookbook that fits in your pocket. It holds records of your relatives recipes while properly attributing them as authors. You are able to construct your family tree to properly showcase your Recipe Roots.', githubLink: 'RecipeRootsApp', imageSrc: 'reciperoots.png' },
  { name: 'NES Tetris', body: 'NES Tetris clone implemented in Pygame. Survive as long as possible while maintaining an efficient tetris rate.', githubLink: 'Tetris', imageSrc: 'nes_tetris.png' },
  { name: 'AI Tetris', body: 'Have your computer play an NES Tetris clone. Linear regression formula found using a genetic algorithm.', githubLink: 'Tetrais', videoId: 'Ns7Oj0bjKR8?si=brs0I0M6XiKYFJFj' }, 
];

const papers = [
  { title: 'MathMex: Search Engine for Math Definitions', authors: 'S Durgin, J Gore, B Mansouri', journal: 'European Conference on Information Retrieval', year: '2024', link: 'https://link.springer.com/chapter/10.1007/978-3-031-56069-9_17', route: '/mathmex.pdf' },
  { title: 'AIIR and LIAAD Labs Systems for CLEF 2023 SimpleText', authors: 'B Mansouri, S Durgin, SJ Franklin, S Fletcher, R Campos', journal: 'Conference and Labs of the Evaluation Forum', year: '2023', route: '/simpletext2023' }
];


export default function Home() {
  return (
    <div className='max-w-7xl mx-auto pb-12 grid grid-cols-1 lg:grid-cols-2'>
      <div className='grid-span-1 mb-4'>
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
          {projects.map((project, index) => (
            <ProjectBox key={index} project={project} index={index} />
          ))}
      </div>
      <div className='grid-span-1'>
        <h2 className="text-2xl font-semibold mb-4 text-center">Publications</h2>
          {papers.map((paper, index) => (
            <PaperPox key={index} paper={paper} />
          ))}
      </div>
    </div>
  );
}
