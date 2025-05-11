import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import EcoRoute from "../assets/EcoRoute.png"
import FolioWebsite from "../assets/FolioWebsite.png"

const projects = [
  {
    title: "EcoRoute",
    description: "A website that pulls from several different APIs such as the Google Maps API and the Carbon Interface API in order to calculate the carbon emmissions of a route.",
    image: EcoRoute,
    link: "https://github.com/sadaveek/energyhacks"
  },
  {
    title: "Folio Website",
    description: "This folio website, which utilizes React and Tailwind CSS and libraries such as Motion and Three.js to create a responsive and visually appealing design. It showcases my projects, skills, and experience in a user-friendly format.",
    image: FolioWebsite,
    link: "https://github.com/sadaveek/portfolio"
  },
];

function Projects() {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const projectIndex = Math.min(projects.length - 1, Math.floor(value * projects.length));
      setActiveProject(projectIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} id="Projects" className="font-mona relative bg-palette6" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 flex md:flex-row flex-col h-screen items-center justify-between px-12">
        <motion.h1 
          initial={{opacity: 0, y: 40}} 
          whileInView={{ opacity: 1, y: 0}} 
          transition={{duration: 0.6, ease: "easeInOut"}} 
          viewport={{once: true}} 
          className="absolute top-[.5vw] text-[10vh] font-mona w-[95vw] text-center font-bold gradient-rgb z-50 mt-10 rounded-sm px-2"
          style={{WebkitTextStroke: '2px #ffffff', WebkitTextStrokeWidth: '0.75px', textShadow: '0 0 6px'}}
        >
          Projects
        </motion.h1>
        <div className="md:w-3/5 w-full relative h-full flex items-center justify-center">
          {projects.map((project, index) => {
            const isLastProject = index === projects.length - 1;
            const isFirstProject = index === 0;
            
            const fadeInPoint = index / projects.length;  
            const fadeOutPoint = (index + 1) / projects.length;
            
            let projectProgress;
            
            if (isFirstProject) {
              projectProgress = useTransform(
                scrollYProgress,
                [fadeOutPoint - 0.1, fadeOutPoint],
                [1, 0]
              );
            } else if (isLastProject) {
              projectProgress = useTransform(
                scrollYProgress,
                [fadeInPoint, fadeInPoint + 0.1],
                [0, 1]
              );
            } else {
              projectProgress = useTransform(
                scrollYProgress,
                [fadeInPoint, fadeInPoint + 0.1, fadeOutPoint - 0.1, fadeOutPoint],
                [0, 1, 1, 0]
              );
            }

            return (
              <motion.div 
                key={project.title}
                className={`absolute mb-3 md:w-4/5 md:mt-0 max-w-[50vh] md:max-w-none mt-36 shadow-2xl hover:scale-105 hover:rotate-[-2deg] hover:cursor-pointer active:scale-100 transition-transform duration-300 ${activeProject === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
                style={{ opacity: projectProgress }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-lg border-4 border-gray-200"
                />
                <div className={`absolute inset-0 opacity-20 rounded-lg`} />
              </motion.div>
            );
          })}
        </div>

        <div className="md:w-2/5 w-full h-full flex flex-col justify-center">
          {projects.map((project, index) => {
            const isLastProject = index === projects.length - 1;
            const isFirstProject = index === 0;
            
            const fadeInPoint = Math.max(0, (index - 0.1) / projects.length);
            const startFullOpacity = index / projects.length;
            const endFullOpacity = isLastProject ? 1 : (index + 0.8) / projects.length;
            const fadeOutPoint = isLastProject ? 1 : Math.min(1, (index + 0.9) / projects.length);
            
            let textProgress;
            
            if (isFirstProject) {
              textProgress = useTransform(
                scrollYProgress,
                [endFullOpacity, fadeOutPoint],
                [1, 0]
              );
            } else if (isLastProject) {
              textProgress = useTransform(
                scrollYProgress,
                [fadeInPoint, startFullOpacity],
                [0, 1]
              );
            } else {
              textProgress = useTransform(
                scrollYProgress,
                [fadeInPoint, startFullOpacity, endFullOpacity, fadeOutPoint],
                [0, 1, 1, 0]
              );
            }

            return (
              <motion.div
                key={project.title}
                className={`absolute text-white md:mt-0 -mt-20 px-6 ${activeProject === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
                style={{ opacity: textProgress }}
              >
                <h2 className="text-4xl font-bold">{project.title}</h2>
                <p className="text-lg text-gray-300 mt-4 max-w-md">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-palette2 hover:bg-palette3 hover:scale-105 hover:cursor-pointer active:scale-90 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
                >
                  Open Project
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;