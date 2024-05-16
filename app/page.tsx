"use client"
import React, { useEffect, useState } from 'react';
import ProjectBox from './components/ProjectBox';
import PaperBox from './components/PaperBox';

const projects = [
  { name: 'Recipe Roots', body: 'Recipe Roots is a family cookbook that fits in your pocket. It holds records of your relatives recipes while properly attributing them as authors. You are able to construct your family tree to properly showcase your Recipe Roots.', githubLink: 'RecipeRootsApp', imageSrc: 'reciperoots.png' },
  { name: 'NES Tetris', body: 'NES Tetris clone implemented in Pygame. Survive as long as possible while maintaining an efficient tetris rate.', githubLink: 'Tetris', imageSrc: 'nes_tetris.png' },
  { name: 'AI Tetris', body: 'Have your computer play an NES Tetris clone. Linear regression formula found using a genetic algorithm.', githubLink: 'Tetrais', videoId: 'Ns7Oj0bjKR8?si=brs0I0M6XiKYFJFj' }, 
];

const papers = [
  { title: 'MathMex: Search Engine for Math Definitions', authors: 'S Durgin, J Gore, B Mansouri', body: 'This paper introduces MathMex, an open-source search engine for math definitions. With MathMex, users can search for definitions of mathematical concepts extracted from a variety of data sources and types including text, images, and videos. Definitions are extracted using a fine-tuned SciBERT classifier, and the search is done with a fine-tuned Sentence-BERT model. MathMex interface provides means of issuing a text, formula, and combined queries and logging features.', journal: 'European Conference on Information Retrieval', year: '2024', link: 'https://link.springer.com/chapter/10.1007/978-3-031-56069-9_17', route: '/mathmex.pdf' },
  { title: 'AIIR and LIAAD Labs Systems for CLEF 2023 SimpleText', authors: 'B Mansouri, S Durgin, SJ Franklin, S Fletcher, R Campos', body: 'This paper describes the participation of the Artificial Intelligence and Information Retrieval (AIIR) Lab from the University of Southern Maine and the Laboratory of Artificial Intelligence and Decision Support (LIAAD) lab from INESC TEC in the CLEF 2023 SimpleText lab. There are three tasks defined for SimpleText:(T1) What is in (or out)?,(T2) What is unclear?, and (T3) Rewrite this!. Five runs were submitted for Task 1 using traditional Information Retrieval, and Sentence-BERT models. For Task 2, three runs were submitted, using YAKE! and KBIR keyword extraction models. Finally, for Task 3, two models were deployed, one using OpenAI Davinci embeddings and the other combining two unsupervised simplification models.', journal: 'Conference and Labs of the Evaluation Forum', year: '2023', route: '/simpletext2023.pdf' }
];

export default function Home() {
  const [showHeadings, setShowHeadings] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeadings(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='max-w-7xl mx-auto pb-12 grid grid-cols-1 lg:grid-cols-2'>
      <div className='grid-span-1 mb-4'>
        <h2 className={`text-2xl font-semibold mb-4 text-center transition-opacity duration-500 ${showHeadings ? 'opacity-100' : 'opacity-0'}`}>Projects</h2>
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
      <div className='grid-span-1'>
        <h2 className={`text-2xl font-semibold mb-4 text-center transition-opacity duration-500 ${showHeadings ? 'opacity-100' : 'opacity-0'}`}>Publications</h2>
        {papers.map((paper, index) => (
          <PaperBox key={index} paper={paper} />
        ))}
      </div>
    </div>
  );
};
