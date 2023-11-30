import React from 'react'
import Navbar from '../NAvbar/Navbar'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import './Hero.css'
import { motion } from 'framer-motion'

function Man(props) {
  const { scene } = useGLTF('/man2.glb')
  return <primitive object={scene} {...props} />
}
function Mash(props) {
  const { scene } = useGLTF('/mushrooms.glb')
  return <primitive object={scene} {...props} />
}

const Hero = () => {
  return (
    <div className='xs:px-5 sm:px-8 md:px-16 h-[100vh] overflow-y-hidden'>
      <Navbar className=""/>
      <div className="Hero h-full xs:flex xs:flex-col lg:flex-row">
        <div className="Details flex flex-col lg:mt-40 w-[90%]">
          <motion.span 
          initial={{opacity: 0, x: -80}}
          animate={{opacity: 1, x: 0}}
          exit={{ opacity:0, x: 40}}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
          className="hi xs:font-bold xs:mt-10 xs:text-[1.1rem] sm:text-[1.9rem] sm:mt-14">HELLO, I'M SHUBHAM GHARAGE!</motion.span>
          <motion.span 
          initial={{opacity: 0, x: -80}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 40}}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut"}}
          className='title xs:mt-3 xs:text-4xl sm:text-7xl'>I'M A FULL STACK <span className='sub-title'>WEB DEVELOPER</span></motion.span>
          <motion.span
          initial={{opacity: 0, x: -80}}
          animate={{opacity: 1, x: 0}}
          exit={{ opacity: 0, x: 40}}
          transition={{ duration: 0.7, delay: 1.3}}
          className='text-gray-500 font-semibold xs:mt-2 text-[1rem] sm:mt-4 sm:text-2xl'>I HAVE BEEN WORKING AS A FREELANCE FULL STACK WEB DEVELOPER FOR 1 YEAR. GET IN TOUCH WITH ME TO DO ACCESSIBLE AND CREATIVE PROJECTS.</motion.span>
        </div>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration:2.5, delay: 1.8}}
        className="xs:block lg:hidden Canvas h-full w-full">
          <Canvas className='' camera={{ position: [5, 5, -5], fov: 25 }}>
            <ambientLight intensity={2} />
            <Man position={[0, -0.75, 0]} rotation={[0, Math.PI / 1.8, 0]} scale={0.85} />
            <OrbitControls autoRotate={true} autoRotateSpeed={0.7} enableZoom={false} minPolarAngle={Math.PI / 2.4} maxPolarAngle={Math.PI / 2.6} />
          </Canvas>
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration:1.5, delay: 1.3}}
        className="xs:hidden lg:block Canvas h-full w-full mt-[-60px]">
          <Canvas className='' camera={{ position: [5, 5, -5], fov: 25 }}>
            <ambientLight intensity={2} />
            <Mash position={[0, -0.7, 0]} rotation={[0, Math.PI / 1.6, 0]} scale={0.6} />
            <OrbitControls autoRotate={true} autoRotateSpeed={0.5} enableZoom={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
