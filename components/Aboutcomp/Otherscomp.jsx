import React from 'react';
import { motion } from 'framer-motion';

const Otherscomp = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='text-white flex flex-col justify-center items-center gap-10 font-bold'
    >
      <motion.h1 variants={itemVariants} className='text-4xl'>Location</motion.h1>
      <motion.div variants={itemVariants} className='grid grid-cols-2 gap-10 xsm:grid-cols-1 sm:grid-cols-2'>
        {/* Current Location */}
        <motion.div variants={itemVariants} className='flex flex-col justify-center items-center border border-sky-900 p-8 gap-6'>
          <h1 className='text-3xl border-b border-sky-700'>Current</h1>
          <div className='flex flex-col gap-5'>
            <h1 className='flex gap-2 text-xl'>Location:<span className='text-sky-500'>Bhimavaram</span></h1>
            <h1 className='flex gap-2 text-xl'>Purpose: <span className='text-sky-500'>Education</span></h1>
          </div>
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.353793797306!2d81.51936520416466!3d16.550174596193234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd558831209d%3A0x4848cc7bc9799510!2s4-22-26%2F1A%2C%20Narasimhapuram%2C%20Kovvada%2C%20Bhimavaram%2C%20Andhra%20Pradesh%20534206!5e1!3m2!1sen!2sin!4v1720951807248!5m2!1sen!2sin"
              width="200"
              height="190"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
        {/* Native Location */}
        <motion.div variants={itemVariants} className='flex flex-col justify-center items-center border border-sky-900 p-8 gap-6'>
          <h1 className='text-3xl border-b border-sky-700'>Native</h1>
          <div>
            <h1 className='flex gap-2 text-xl'>Location:<span className='text-sky-500'>Navabpalem</span></h1>
          </div>
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7737.304282195522!2d81.6025508!3d16.830000249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4004b79f3d3%3A0x614b575b38888beb!2sNavabpalem%2C%20Andhra%20Pradesh%20534146!5e1!3m2!1sen!2sin!4v1720951940788!5m2!1sen!2sin"
              width="200"
              height="190"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Otherscomp;
