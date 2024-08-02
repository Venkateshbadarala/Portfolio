"use client"
import Inner from '@/components/layout/inner'
import React, { useEffect } from 'react'
import Skillcomp from '@/components/Skillcomp/Skillcomp'

const Skills = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  return (
    <Inner>
    <div className='sm:h-[90vh] xsm:h-[86vh] overflow-auto no-scrollbar'>
      <Skillcomp/>
    </div>
    </Inner>
  )
}

export default Skills
