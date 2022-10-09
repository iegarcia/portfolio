import { Button } from "react-bootstrap";

import ProjectsList from "../components/ProjectsList";
import Title from "../components/Title";

import github from "../assets/icons/github.svg";

const Projects = () => {
  return (
    <div className="app-background projects">
      <Title text="Projects" />
      <br />
      <ProjectsList />
      <br />
      <h2 className="light text-center">Mas proyectos en mi Github</h2>
      <br />
      <div className="d-flex justify-content-center">
        <a href="https://github.com/iegarcia" target="_blank" rel="noreferrer">
          <Button variant="secondary" className="github-btn">
            <img width="33px" src={github} alt="github-icon" /> iegarcia
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
