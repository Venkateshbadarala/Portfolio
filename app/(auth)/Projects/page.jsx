"use client"
import Inner from '@/components/layout/inner'
import React, { useEffect } from 'react'
import Projectcomp from '@/components/projects/Projectscomp'
const Projects = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);
  return (
    <Inner>
      <div className='sm:h-[90vh] xsm:h-[85vh] overflow-auto no-scrollbar '>
      <Projectcomp/>
      </div>
    </Inner>
  )
}

export default Projects;