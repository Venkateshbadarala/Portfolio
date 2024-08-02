"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitch from './themes/ThemeSwitch'

const Navbar = () => {
  const Links = [
    {
      link: 'https://www.linkedin.com/in/badarala-venkatesh-4b48b923a/',
      image: '/icons/linkedin.png',
      alt: 'LinkedIn'
    },
    {
      link: 'https://www.facebook.com/bvenkatesh.bvenkatesh.583/',
      image: '/icons/facebook.png',
      alt: 'Facebook'
    },
    {
      link: 'https://github.com/Venkateshbadarala',
      image: '/icons/github-logo.png',
      alt: 'GitHub'
    },
    {
      link: 'https://www.instagram.com/venkatesh_badarala_/',
      image: '/icons/instagram.png',
      alt: 'Instagram'
    },
  ]

  return (
    <div className="flex justify-evenly items-center gap-4 xsm:p-4 md:gap-10 lg:justify-around ">
      <div>
        <h1 className='sm:text-3xl font-bold text-white xsm:text-xl'>Badarala Venkatesh</h1> 
      </div>
      <div className='flex justify-center items-center md:gap-10 lg:gap-12'>
      <div className="flex  xsm:gap-6 lg:gap-14">
        {Links.map((item, index) => (
          <Link key={index} href={item.link} target="_blank" className='text-white'>
            <Image src={item.image} alt={item.alt} width={30} height={30} className="invert xsm:w-12 sm:w-6 md:w-[2rem] " />
          </Link>
        ))}
      </div>
      <div className='xsm:ps-6'>
        <ThemeSwitch/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
