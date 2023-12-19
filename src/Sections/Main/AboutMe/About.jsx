import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import './About.css'
import ImgAbout from '../../../Assets/about1.jpg'

const About = () => {

  const[ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if(inView){
      controls.start({ x: 0, opacity: 1});
    }
  })

  return (
    <div id='AboutSection' className='About xs:mt-6 w-[100vw] lg:h-[100vh] xs:px-8 sm:px-8 md:px-20 lg:px-32'>
      <motion.div 
      ref={ref} 
      initial= {{ x: -100, opacity: 0 }}
      animate={controls}
      transition={{duration: 0.7}}
      className="aboutTitle xs:text-3xl sm:text-5xl pt-10 w-fit">
        ABOUT ME
      </motion.div>

      <div className="info flex xs:flex-col xs:mt-10 lg:mt-20 lg:flex-row">
        <motion.div
        ref={ref} 
        initial={{ x: -100, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.5, duration: 1.4}}
        className="photo xs:w-full flex justify-center lg:w-[50%]">
          <img src={ImgAbout} className=' xs:h-[16rem] md:h-[20rem] lg:h-[30rem]' alt="" />
        </motion.div>

        <motion.div 
        initial={{ x: 200, opacity: 0}}
        animate={controls}
        transition={{ delay: 1.4, duration: 1.4}}
        className="text xs:w-full xs:mt-6 lg:w-[50%] flex flex-col justify-center xs:pl-0 lg:pl-10 font-light">
          <span className='xs:text-lg md:text-[1.8rem] xs:leading-7 md:leading-10 xs:mt-6 lg:text-3xl font-sans text-gray-500 font-semibold'>Hi there! I'm a web developer skilled in React, Tailwind CSS, Node.js, Firebase, MongoDB, Bootstrap, and Next.js. I specialize in creating dynamic and visually appealing web applications. Let's explore my portfolio and bring your ideas to life!</span>
        </motion.div>
      </div>
    </div>
  )
}

export default About
