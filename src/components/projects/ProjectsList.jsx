import ProjectItem from "./ProjectItem";
import { projects } from "./projectsData";
import "./ProjectsList.scss";
const ProjectsList = () => {
  return (
    <div className="projects-list">
      {projects.map((project) => {
        return <ProjectItem {...project} />;
      })}
    </div>
  );
};

export default ProjectsList;
