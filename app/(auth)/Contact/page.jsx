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
    <div className="min-h-screen  flex items-center justify-center">
      <Hireme/>
    </div>
    </Inner>
  )
}

export default Contact