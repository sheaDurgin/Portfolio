"use client"
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <nav className='bg-slate-950 rounded-lg px-6 m-4'>
          <div className='flex items-center justify-between h-16 px-2'>
            <div className='flex flex-col'>
              <a href="/" className='text-white text-xl pr-4'>
                Shea Durgin
              </a>
              <a href="/" className='text-gray-500 text-sm'>
                Software Engineer in Portland, ME
              </a>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center space-x-4 text-lg'>
                <a href="/" className='text-white hover:bg-slate-900 hover:text-white rounded-lg p-2'>
                  Home
                </a>
                <a href="/resume.pdf" target='_blank' rel="noopener noreferrer" className='text-white hover:bg-slate-900 hover:text-white rounded-lg p-2'>
                  Resume
                </a>
                <a href="/contact" className='text-white hover:bg-slate-900 hover:text-white rounded-lg p-2'>
                  Contact
                </a>
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button className='inline-flex items-center justify-center rounded-md text-white md:text-white 
              hover:text-purple-600 focus:outline-none'
              onClick={toggleNavbar}>
                {isClick ? (
                  <svg 
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path 
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg 
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path 
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isClick && (
            <div className='md:hidden'>
              <div className='py-2 space-y-1 text-lg'>
                  <a href="/" className='text-white block hover:bg-slate-900 hover:text-white rounded-lg p-2'>
                    Home
                  </a>
                  <a href="/resume" className='text-white block hover:bg-slate-900 hover:text-white rounded-lg p-2'>
                    Resume
                  </a>
                  <a href="/contact" target="_blank" rel="noopener noreferrer" className='text-white block hover:bg-slate-900 hover:text-white rounded-lg p-2'>
                    Contact
                  </a>
              </div>
            </div>
          )}
      </nav>
    </div>
  )
}

export default Navbar