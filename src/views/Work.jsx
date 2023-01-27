import Project from "../components/Project";
import Heading from "../components/Heading";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

const Work = () => {
  const projects = [
    {
      src: p4,
      name: "Onepage portfolio",
      desc: "Development of a web application used as a portfolio to concentrate the diverse variety of projects, knowledge and technologies learned, applied and used since the beginning in the IT industry.",
      stack: ["React", "Bootstrap", "React icons", "Sass", "Arquitectura Flux"],
    },
    {
      src: p1,
      name: "Phi-Organic",
      desc: "Fully functional e-commerce developed under MVC architecture and using Laravel framework. This project has most of the typical functionalities of an e-commerce, such as product listing, session profiles, search filter, among other things...",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "POO"],
    },
    {
      src: p2,
      name: "Stream App",
      desc: "Inspired by Disney +, a streaming application that displays a diverse dynamic catalog of movies, corresponding movie information, including trailers. It features session profiles with robust validations, categorization, etc.",
      stack: ["React", "React Bootstrap", "Firebase", "Axios", "Context API"],
    },
    {
      src: p5,
      name: "PC Pedia",
      desc: "Encyclopedia with information about computer manipulation. Project that focuses on the group of people who were forced to use a computer without previous knowledge during COVID-19.",
      stack: ["Vue", "Quasar", "Material design", "MVVM"],
    },
    {
      src: p3,
      name: "Rick and Morty App",
      desc: "Application with information about the show Rick and Morty, including details of its characters, episodes in which they appear, locations, etc. It has a dynamic pagination for easy navigation.",
      stack: ["React", "Axios", "React bootstrap", "REST", "Arquitectura Flux"],
    },
  ];

  return (
    <>
      <div className="work" id="work">
        <div className="work-container" style={{ alignSelf: "flex-start" }}>
          <Heading text="Some things I've made" />
        </div>
        <div className="work-container flex-column">
          {projects.map((p, index) => {
            return <Project item={p} key={index} />;
          })}
        </div>

        <h2 style={{ color: "white", paddingBottom: "1.2em" }}>
          You can check more of my work in{" "}
          <a
            style={{ color: "white", alignSelf: "center" }}
            href="https://github.com/iegarcia"
          >
            Github
          </a>
        </h2>
      </div>
    </>
  );
};

export default Work;
