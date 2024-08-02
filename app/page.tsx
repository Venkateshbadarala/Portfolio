"use client";
import { useEffect, useState } from 'react';
import Inner from "@/components/layout/inner";
import Photo from "@/components/Photo/Photo";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiDownloadCloud } from "react-icons/fi";
import Stats from "@/components/Stats";
import Link from "next/link";
import PartcleBackground from "@/components/ParticleBackground";
import SvgPathLoader from '@/components/CelebrationAnimation';

export default function Home() {
  const [text] = useTypewriter({
    words: ['React Developer', 'Nextjs Developer', 'UI/UX Designer'],
    loop: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this value to match your loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col">
      {loading ? (
        <div className='fixed inset-0 '>
          <SvgPathLoader />
        </div>
      ) : (
        <>
          <PartcleBackground />
          <div className="flex flex-row items-center justify-around h-[80vh] overflow-hidden p-8 xsm:flex-col md:flex-row">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-white lg:text-7xl xsm:text-4xl xsm:w-[25rem] md:w-full">
                <p>Hello, I'm </p>
                <span className="text-blue-500">Badarala Venkatesh</span>
              </h1>
              <div className="flex items-center gap-2 lg:text-4xl font-bold text-cyan-500 xsm:text-2xl xsm:items-center">
                <p className="text-white">I'm a</p>
                <span>{text}</span>
                <Cursor />
              </div>
              <div className='xsm:w-[22rem] flex justify-center md:justify-start'>
                <Link
                  href="https://drive.google.com/file/d/167r9wgTJ7t3VhYCJ3ZrWhzJAtalNfY_y/view?usp=sharing"
                  download="Badarala_Venkatesh_CV.pdf"
                  className="w-1/2 xsm:w-56 flex items-center justify-center gap-4 p-2 font-bold text-white border border-blue-600 rounded-full z-0"
                >
                  <span className="flex gap-3">DOWNLOAD CV</span>
                  <FiDownloadCloud />
                </Link>
              </div>
            </div>
            <div className='xsm:w-[23rem]'>
              <Photo />
            </div>
          </div>
          <div className="flex absolute justify-center items-start bottom-5 left-0 right-0 xsm:bottom-1">
            <Stats />
          </div>
        </>
      )}
    </div>
  );
}
