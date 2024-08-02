"use client"
import Inner from '@/components/layout/inner'
import React, { useEffect } from 'react'
import Hireme from '@/components/Contactcomp/Hireme'
const Contact = () => {
  useEffect(()=>{
    document.body.style.overflow='hidden';
  })
  return (
    <Inner>
    <div className="xsm:h-[85vh] sm:h-[100vh] flex items-center justify-center">
      <Hireme/>
    </div>
    </Inner>
  )
}

export default Contact