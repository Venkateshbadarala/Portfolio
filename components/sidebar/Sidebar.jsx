"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

const Sidebar = () => {
  const pathname = usePathname();

  const navigate = [
    { name: 'Home', link: '/', icon: <HiHome />, active: pathname === '/' },
    { name: 'About', link: '/About', icon: <HiUser />, active: pathname === '/About' },
    { name: 'Skills', link: '/Skills', icon: <HiViewColumns />, active: pathname === '/Skills' },
    { name: 'Projects', link: '/Projects', icon: <HiRectangleGroup />, active: pathname === '/Projects' },
    { name: 'Contact', link: '/Contact', icon: <HiEnvelope />, active: pathname === '/Contact' },
  ];

  return (
    <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center gap-8 p-5 z-10 xsm:p-1 sm:p-4">
      <div className="flex flex-col justify-center items-center gap-8 backdrop-blur-xl  p-3 rounded-full bg-black dark:bg-slate-800">
        {navigate.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <div className={`relative flex items-center group ${item.active ? 'text-blue-600 dark:text-blue-600' : 'text-white dark:text-white'}`}>
              <div className="relative flex items-center">
                <span className="absolute right-[2.5rem] ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-300 dark:bg-gray-700 text-black dark:text-white font-bold p-2 rounded-md">
                  {item.name}
                </span>
                <div className="text-2xl">{item.icon}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
