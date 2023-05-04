import "./Projects.scss";
import ProjectsList from "./ProjectsList";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-container">
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "keyframes", duration: 0.5, delayChildren: true }}
      >
        Projects
      </motion.h3>
      <ProjectsList />
    </div>
  );
};

export default Projects;
