import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import './Projects.css';
import ProjectCard from '../../Sub/ProjectCard/ProjectCard';
import ThreeJS from '../../../Assets/ThreeJSPort.png';
import ZomatoLand from '../../../Assets/ZomatoLand.png';
import OrgafeLand from '../../../Assets/OrgafeLand.png';

const Projects = () => {
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
  });
  const [refProjects, inViewProjects] = useInView({
    triggerOnce: true,
  });
  const [refButton, inViewButton] = useInView({
    triggerOnce: true,
  });

  const controlsProjects = useAnimation();
  const controlsButton = useAnimation();

  useEffect(() => {
    if (inViewTitle) {
      controlsProjects.start({ x: 0, opacity: 1 });
    }
    if (inViewProjects) {
      controlsButton.start({ x: 0, opacity: 1 });
    }
  }, [inViewTitle, inViewProjects, controlsProjects, controlsButton]);

  const projects = [
    { name: "ThreeJS Portfolio", type: "Portfolio", image: ThreeJS, info: "Fully Responsive and working Portfolio website with Interective 3D model.", link: "", used: ["ThreeJS", "React", "TailwindCSS"] },
    { name: "Zomato", type: "Landing Page", image: ZomatoLand, info: "Fully Responsive landing page of Zomato Official website. Clone Page", link: "", used: ["TailwindCSS", "Html", "CSS"] },
    { name: "Inventory Manager", type: "Scanner Tool", image: OrgafeLand, info: "Responsive Landing page for Fruit website. Responsive for all the devices.", link: "", used: ["Tailwind", "NodeJS", "Html"] },
  ];

  return (
    <div id='ProjectSection' className='w-[100vw] xs:px-5 xs:mt-20 md:mb-10 md:mt-32 lg:mt-0 sm:px-8 md:px-20 lg:px-32'>
      <motion.div
        ref={refTitle}
        initial={{ x: -100, opacity: 0 }}
        animate={controlsProjects}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="aboutTitle xs:text-3xl md:text-5xl lg:text-5xl pt-10 w-fit">
        PROJECTS
      </motion.div>

      <div className="PROJECTS grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={controlsProjects}
            transition={{ delay: 0.5 * index * 2, duration: 0.8 }}
            className="card">
            <ProjectCard name={project.name} type={project.type} image={project.image} used={project.used} info={project.info} />
          </motion.div>
        ))}
      </div>
      <button
        ref={refButton}
        initial={{ x: -100, opacity: 0 }}
        animate={controlsButton}
        transition={{ delay: 0.4, duration: 0.7 }}
        className='viewMoreButton py-2 px-6 text-white xs:text-base sm:text-xl rounded-lg mt-10 font-bold mb-10'>View More</button>
    </div>
  );
};

export default Projects;
