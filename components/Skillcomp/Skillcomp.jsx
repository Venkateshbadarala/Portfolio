"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

const Skillcomp = () => {
  const { scrollY } = useScroll();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 2 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col text-white w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        variants={itemVariants}
        className="p-4"
      >
        <h1 className="text-cyan-600 font-bold text-2xl mb-4 xsm:text-[20px]">PROGRAMMING LANGUAGE</h1>
        <div className='flex flex-wrap justify-center items-center gap-5 lg:items-start lg:justify-evenly'>
          <div className="h-[10rem] text-black bg-sky-50 rounded flex flex-col items-center justify-center text-xl font-bold w-[30rem] shadow-lg xsm:w-[20rem] sm:w-[30rem]">
            <Image alt="Java Logo" src="/icons/java.png" className="w-[5rem]" width={50} height={50} />
            <h4 className="text-md mt-4">JAVA</h4>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="p-4"
      >
        <h1 className="text-cyan-600 font-bold text-2xl mb-4 xsm:text-[20px]">Frontend Development</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {[
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML Icon", label: "HTML" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", alt: "CSS Icon", label: "CSS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", alt: "Bootstrap Icon", label: "Bootstrap" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript Icon", label: "JavaScript" },
            { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "Tailwind CSS Icon", label: "Tailwind CSS" },
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React Icon", label: "React" }
          ].map(skill => (
            <div key={skill.label} className="h-[10rem] w-[30rem] text-black bg-sky-50 rounded flex flex-col items-center justify-center text-xl font-bold shadow-lg xsm:w-[20rem] sm:w-[30rem]">
              <Image alt={skill.alt} src={skill.src} className="w-[5rem]" width={48} height={48} />
              <h4 className="text-md mt-4">{skill.label}</h4>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="p-4"
      >
        <h1 className="text-cyan-600 font-bold text-2xl mb-4 xsm:text-[20px]">Backend Development</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {[
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript Icon", label: "TypeScript" },
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", alt: "Express Icon", label: "Express" },
            { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "NodeJS Icon", label: "NodeJS" }
          ].map(skill => (
            <div key={skill.label} className="h-[10rem] w-[30rem] text-black bg-sky-50 rounded flex flex-col items-center justify-center text-xl font-bold shadow-lg xsm:w-[20rem] sm:w-[30rem]">
              <Image alt={skill.alt} src={skill.src} className="w-[5rem]" width={48} height={48} />
              <h4 className="text-md mt-4">{skill.label}</h4>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="p-4"
      >
        <h1 className="text-cyan-600 font-bold text-2xl mb-4 xsm:text-[20px]">Database</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 lg:items-start lg:justify-evenly">
          {[
            { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "Firebase Icon", label: "Firebase" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", alt: "MongoDB Icon", label: "MongoDB" }
          ].map(skill => (
            <div key={skill.label} className="h-[10rem] w-[30rem] text-black bg-sky-50 rounded flex flex-col items-center justify-center text-xl font-bold shadow-lg xsm:w-[20rem] sm:w-[30rem]">
              <Image alt={skill.alt} src={skill.src} className="w-[5rem]" width={48} height={48} />
              <h4 className="text-md mt-4">{skill.label}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skillcomp;
