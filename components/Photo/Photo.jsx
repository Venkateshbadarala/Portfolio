"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParticleBackground from '../ParticleBackground';

const Photo = () => {
  const venkatesh = '/images/venky.png';

  return (
    <div className="relative lg:w-[25rem] lg:h-[25rem] xsm:w-[15rem] xsm:h-[15rem] h-[20rem] ">
      <ParticleBackground/>
      <motion.div className="absolute inset-0">
        <Image
          src={venkatesh}
          layout="fill"
          objectFit="cover"
          alt="venkatesh"
          className="rounded-full "
        />
      </motion.div>

      <motion.svg
        className="absolute"
        fill="transparent"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="250"
          stroke="#3F00FF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [360],
            transition: { duration: 5, ease: 'easeInOut', repeat: Infinity }
          }}
        />
      </motion.svg>
    </div>
  );
};


export default Photo;
