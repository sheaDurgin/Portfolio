import React from 'react';

interface Paper {
  title: string;
  authors: string;
  body: string;
  journal: string;
  year: string;
  route: string;
}

interface PaperBoxProps {
  paper: Paper;
}

const PaperBox: React.FC<PaperBoxProps> = ({ paper }) => {
  return (
    <div className='bg-slate-950 rounded-lg p-4 mx-4 mb-4'>
        <a href={paper.route} target="_blank" rel="noopener noreferrer" 
          className="block rounded-lg hover:bg-slate-900 transition-colors duration-300 p-4"
        >
            <h3 className='text-lg font-semibold mb-2'>{paper.title}</h3>
            <h2>{paper.body}</h2>
            <p className='text-sm text-gray-600 mb-1'>{paper.authors}</p>
            <p className='text-sm text-gray-600 mb-1'>{paper.journal} ({paper.year})</p>
            <p className="text-sm text-gray-600">View Paper</p>
        </a>
    </div>
  );
};

export default PaperBox;
