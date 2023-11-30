import React, { useState } from 'react';
import { FaHome, FaInfo, FaBook, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import '../../../output.css';
import './Navbar.css'
import '../../../App.css'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [navdrop, setNavdrop] = useState(true);
  const toggleNav = () => {
    setNavdrop(!navdrop);
  }
  return (
    <div className="flex">
      <div className="xs:py-2 xs:w-full sm:w-fit flex justify-between items-center">
        <motion.span 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        transition={{ duration: 0.5, delay: 0.3}}
        className='gradient-text xs:font-bold xs:text-3xl md:text-5xl'>SG</motion.span>
        <motion.img 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        transition={{ duration: 0.5, delay: 0.5}}
        src="src\Assets\menu.png" alt="" className='h-[25px] sm:hidden' onClick={toggleNav}/>
      </div>
      <div className={`Options sm:hidden list-none hover:cursor-pointer ${navdrop ? 'NavbarAni2' : 'NavbarAni'} xs:w-full xs:absolute xs:top-0 xs:left-0 xs:border-b-2 xs:bg-white xs:opacity-90 xs:flex xs:flex-col xs:items-center xs:justify-center xs:py-10 xs:gap-5 xs:font-bold xs:text-gray-600 xs:text-lg`}>
        <img src="src\Assets\cross.png" alt="" className={`xs:absolute sm:hidden top-2 right-[0.5rem] h-11 ${navdrop ? 'NavbarAni2' : 'NavbarAni'}`} onClick={toggleNav}/>
        <li className='hover:text-black'>ABOUT ME</li>
        <li className='hover:text-black'>PROJECTS</li>
        <li className='hover:text-black'>CONTACT</li>
      </div>
      <ul className="Options ml-[-2rem] sm:flex sm:justify-center sm:items-center sm:gap-8 text-gray-500 font-semibold sm:w-full xs:hidden list-none hover:cursor-pointer">
        <motion.li
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        transition={{duration: 1, delay: 0.6}}
        className='hover:text-black hover:cursor-pointer'>ABOUT ME</motion.li>
        <motion.li
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        transition={{duration: 1, delay: 0.9}}
        className='hover:text-black hover:cursor-pointer'>PROJECTS</motion.li>
        <motion.li
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        transition={{duration: 1, delay: 1.2}}
        className='hover:text-black hover:cursor-pointer'>CONTACT</motion.li>
      </ul>
    </div>
  );
}

export default Navbar;
