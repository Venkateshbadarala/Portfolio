"use client"
import Educationcomp from '@/components/Aboutcomp/Educationcomp'
import Otherscomp from '@/components/Aboutcomp/Otherscomp'
import Inner from '@/components/layout/inner'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const About = () => {
  const [showLocation, setShowLocation] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  return (
    <Inner>
      <div className='flex flex-col gap-8 py-4 md:overflow-auto xsm:overflow-auto no-scrollbar'>
        <div className='text-white flex justify-center items-center gap-10 font-bold text-[20px] '>
          <Link href='#' onClick={() => setShowLocation(!true)} 
            className={`border-b border-sky-500 ${showLocation ? 'text-white' : 'text-sky-500'}`}>
            Education
          </Link>
          <Link href='#' onClick={() => setShowLocation(!false)} 
            className={`border-b border-sky-500 ${!showLocation ? 'text-white' : 'text-sky-500'}`}>
            Location
          </Link>
        </div>
        <div className='h-[80vh]'>
          {
            showLocation ? 
            <div>
             <Otherscomp />
            </div> 
            : 
            <Educationcomp />
            
          }
        </div>
      </div>
    </Inner>
  )
}

export default About
