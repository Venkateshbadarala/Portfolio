import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    image: '/images/Fullloginpage-nextjs.png',
    title: 'Fullloginpage',
    description: 'A comprehensive login page using Next.js, Tailwind CSS, and TypeScript, integrated with Google API for authentication.',
    technologies: 'Next.js, Tailwind CSS, TypeScript, Google API',
    link: 'https://github.com/Venkateshbadarala/NextjsAuthentication'
  },
  {
    id: 2,
    image: '/images/fullloginpage.png',
    title: 'Full-Login SignUp',
    description: 'A secure and robust full login and signup system built with the MERN stack.',
    technologies: 'MERN Stack',
    link: 'https://github.com/Venkateshbadarala/Full-Login-setup'
  },
  {
    id: 3,
    image: '/images/socialwebsite.png',
    title: 'Social Website',
    description: 'A simple social media website application with basic functionalities.',
    technologies: 'Next.js, Tailwind CSS, TypeScript',
    link: '/projects/to-do-list'
  },
  {
    id: 4,
    image: '/images/Gmail seggregation.png',
    title: 'Gmail Segregation',
    description: 'An application to segregate Gmail emails using React and Gmail API.',
    technologies: 'React.js, Gmail API',
    link: 'https://github.com/Venkateshbadarala/GmailSegregation'
  },
  {
    id: 5,
    image: '/images/cricket-figma.png',
    title: 'Cricket Figma',
    description: 'A cricket-related design prototype created in Figma.',
    technologies: 'FIGMA',
    link: 'https://www.figma.com/proto/cvrwtrv8KNuENzjkUf6CwS/Untitled?node-id=8-18&starting-point-node-id=8%3A18&t=VHfAZ313lQssXqSk-1'
  },
  {
    id: 6,
    image: '/images/bikes-figma.png',
    title: 'Bikes Figma',
    description: 'A design prototype for a bike-related project created in Figma.',
    technologies: 'FIGMA',
    link: 'https://www.figma.com/proto/ebFl2h77dmt14MzxrxdNzr/Untitled?page-id=0%3A1&node-id=1-3&viewport=2199%2C-48%2C0.3&t=6XVQnd2hnB1h9nLg-1&scaling=scale-down&starting-point-node-id=1%3A3'
  },
  {
    id: 7,
    image: '/images/musicplayer.png',
    title: 'Music Player',
    description: 'A music player application that can play multiple songs, built with HTML, CSS, JavaScript, jQuery, and Node.js.',
    technologies: 'HTML, CSS, JavaScript, jQuery, Node.js',
    link: 'https://github.com/Venkateshbadarala/MusicPlayer--Capstone-Project'
  },
  {
    id: 8,
    image: '/images/Food.png',
    title: 'Food Website',
    description: 'A website showcasing various food items, built with HTML, CSS, and Node.js.',
    technologies: 'HTML, CSS, Node.js',
    link: 'https://github.com/Venkateshbadarala/Food-website_HTML'
  },
];

const ProjectComp = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl text-white p-5 font-bold">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-1 xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative w-[20rem] h-[20rem] rounded-xl bg-white shadow-lg border border-gray-300 overflow-hidden transition-transform duration-500 ease-out transform hover:-translate-y-2"
          >
            <div className="relative w-full h-full">
              <Image
                layout="fill"
                objectFit="cover"
                src={project.image}
                alt={project.title}
                className="transition-opacity duration-500 ease-out"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-slate-900 bg-opacity-70 rounded-b-xl p-6 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10">
              <p className="text-xl font-semibold mb-2">{project.title}</p>
              <p className="text-white text-center mb-4">{project.description}</p>
              {project.technologies && (
                <p className="text-sm mb-4 text-center">{project.technologies}</p>
              )}
              <Link href={project.link} className="inline-block text-center rounded-lg bg-blue-600 text-white text-base py-2 px-4 transition-opacity duration-300 ease-out hover:opacity-90">
               
                  GIT LINK
                
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComp;
