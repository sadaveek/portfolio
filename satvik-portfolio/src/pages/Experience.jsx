import { motion } from "framer-motion";
import AccordionSection from "../components/AccordionSection";
import DeAP from "../assets/DeAPLogo.png";
import SUNYAlbany from "../assets/SUNYAlbanyLogo.png";

function Experience() {
    return(
        <div className = "pb-[25vh] bg-palette6 flex items-center justify-center relative -mt-10 flex-col" id = "Experience">
            <motion.h1 
            initial={{opacity: 0, y: 40}} 
            whileInView={{ opacity: 1, y: 0}} 
            transition={{duration: 0.6, ease: "easeInOut"}} 
            viewport={{once: true}} 
            className="text-[9vh] font-mona text-center font-bold gradient-rgb z-50 mt-10 rounded-sm px-2"
            style={{WebkitTextStroke: '2px #ffffff', WebkitTextStrokeWidth: '0.75px', textShadow: '0 0 6px'}}
            >
                Experience
            </motion.h1>
            <motion.section
            initial = {{y: 50}}
            whileInView={{y: 0}}
            transition = {{duration: 0.5, ease: "easeInOut"}}
            viewport={{once: true}}>
                <AccordionSection location = "DeAP Learning Labs" mode = "Remote" date = "May - August 2023" position = "LLM Research Intern"
                    description = "Implemented AI models as a part of a student-led company focused on AI-powered tutoring for AP classwork, training the models on data from leading educators to provide personalized learning experiences. Contributed to the design and development of the front-end for the DeAP website using React and Tailwind CSS, while integrating Firebase for user data sync."
                    imageSrc={DeAP} tags = {[{label: "Python"}, {label: "Scikit-learn"}, {label: "PyTorch"}, {label: "TensorFlow"}, {label: "React"}, {label: "TailwindCSS"}, {label: "Firebase"}]} link = "https://deaplearning.com/"></AccordionSection>
                <AccordionSection location = "SUNY Albany" mode = "Albany, NY" date = "June 2021 – September 2022" position = "Data Science Intern"
                    description = "Conducted cybersecurity research focused on analyzing real-world data from the VERIS dataset through data cleaning, analysis, and visualization, while documenting the process to ensure reproducibility. Investigated patterns in the dataset related to incident types and their impact, such as creating threat landscapes for various institutions (e.g., banks, retail, insurance)."
                    imageSrc={SUNYAlbany} tags = {[{label: "Python"}, {label: "Matplotlib"}, {label: "Pandas"}, {label: "Jupyter"}]} link = "https://www.albany.edu/cehc/faculty/unal-tatar"></AccordionSection>
            </motion.section>
        </div>
    );
}
export default Experience;