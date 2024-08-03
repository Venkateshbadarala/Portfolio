import React from 'react';
import { motion,stagger } from 'framer-motion';

const Educationcomp = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='text-white'
    >
      <div className='flex flex-col justify-center gap-5 xsm:items-center xsm:flex-col '>
        <motion.h1 variants={itemVariants} className='text-5xl p-2 font-bold xsm:text-3xl'>
          Education
        </motion.h1>

        {/* B.Tech */}
        <motion.div variants={itemVariants} className='flex justify-center items-start gap-5 xsm:flex-col xsm:items-center lg:flex-row'>
          <div className='border border-sky-900 lg:h-[12rem] flex items-center justify-center lg:w-44 xsm:h-[5rem] xsm:w-[17rem] sm:w-[30rem]'>
            <h1 className='text-4xl font-bold xsm:text-xl'>B.Tech</h1>
          </div>

          <div className='grid lg:grid-cols-3 lg:h-[12rem] gap-6 border border-sky-800 p-5 xsm:w-[17rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xsm:grid-cols-1 xsm:h-[30rem] sm:grid-cols-2 sm:h-[20rem]'>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              College:
              <span className='text-sky-800 text-xl'>Vishnu Institute Of Technology</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Stream:
              <span className='text-sky-800 text-xl'>Information Technology</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Year:
              <span className='text-sky-800 text-xl'>2021 to 2025</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              CGPA:
              <span className='text-sky-800 text-xl'>8.3</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Place:
              <span className='text-sky-800 text-xl'>Bhimavaram</span>
            </div>
          </div>

          <div className='lg:h-[6rem] lg:w-[10rem] flex items-center justify-center md:w-[40rem] sm:w-[30rem]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2093775535504!2d81.52251249999999!3d16.5659653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4e8d1d1d8d%3A0xab52da15615ac690!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1720943501194!5m2!1sen!2sin"
              width="150"
              height="190"
              allowFullScreen=""
              className='xsm:h-[6rem] xsm:w-[17rem] sm:w-[400rem] lg:h-[190px] lg:w-[150px]'
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Inter */}
        <motion.div variants={itemVariants} className='flex justify-center items-start gap-5 xsm:flex-col xsm:items-center lg:flex-row'>
          <div className='border border-sky-900 lg:h-[12rem] flex items-center justify-center lg:w-44 xsm:h-[5rem] xsm:w-[17rem] sm:w-[30rem]'>
            <h1 className='text-5xl p-2 font-bold xsm:text-3xl'>Inter</h1>
          </div>

          <div className='grid lg:grid-cols-3 lg:h-[12rem] gap-6 border border-sky-800 p-5 xsm:w-[17rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xsm:grid-cols-1 xsm:h-[30rem] sm:grid-cols-2 sm:h-[20rem]'>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              College:
              <span className='text-sky-800 text-xl'>Aditya Junior College</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Stream:
              <span className='text-sky-800 text-xl'>MPC</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Year:
              <span className='text-sky-800 text-xl'>2019 to 2020</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              MARKS:
              <span className='text-sky-800 text-xl'>899</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Place:
              <span className='text-sky-800 text-xl'>Tadepalligudem</span>
            </div>
          </div>

          <div className='lg:h-[6rem] lg:w-[10rem] flex items-center justify-center md:w-[40rem] sm:w-[30rem]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.2268415332724!2d81.5332639!3d16.815099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4bc39424565%3A0x4a5b47dec32721d2!2sAditya%20Junior%20college.!5e0!3m2!1sen!2sin!4v1720947453653!5m2!1sen!2sin"
              width="150"
              height="190"
              allowFullScreen=""
              className='xsm:h-[6rem] xsm:w-[17rem] sm:w-[400rem] lg:h-[190px] lg:w-[150px]'
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* School */}
        <motion.div variants={itemVariants} className='flex justify-center items-start gap-5 xsm:flex-col xsm:items-center lg:flex-row'>
          <div className='border border-sky-900 lg:h-[12rem] flex items-center justify-center lg:w-44 xsm:h-[5rem] xsm:w-[17rem] sm:w-[30rem]'>
            <h1 className='text-5xl p-2 font-bold xsm:text-3xl '>School</h1>
          </div>

          <div className='grid lg:grid-cols-3 lg:h-[12rem] gap-6 border border-sky-800 p-5 xsm:w-[17rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xsm:grid-cols-1 xsm:h-[25rem] sm:grid-cols-2 sm:h-[15rem]'>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              School:
              <span className='text-sky-800 text-xl'>TBR SAINIK SCHOOL</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Year:
              <span className='text-sky-800 text-xl'>2019</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              GPA:
              <span className='text-sky-800 text-xl'>9.3</span>
            </div>
            <div className='flex flex-col font-bold text-[1.2rem]'>
              Place:
              <span className='text-sky-800 text-xl'>Alampuram</span>
            </div>
          </div>

          <div className='lg:h-[6rem] lg:w-[10rem] flex items-center justify-center md:w-[40rem] sm:w-[30rem]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.4345110598474!2d81.5862678!3d16.8047869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4394d0b79d1%3A0xece91c55d85184c8!2sT.B.R%20Sainik%20School!5e0!3m2!1sen!2sin!4v1720947383850!5m2!1sen!2sin"
              width="150"
              height="190"
              allowFullScreen=""
              loading="lazy"
              className='xsm:h-[6rem] xsm:w-[17rem] sm:w-[400rem] lg:h-[190px] lg:w-[150px]'
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Educationcomp;
