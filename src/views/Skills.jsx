import Container from "react-bootstrap/Container";

import SkillsBox from "../components/SkillsBox";
import Title from "../components/Title";

const Skills = () => {
  return (
    <div className="app-background skills">
      <Container>
        <Title text="Skills" />
        <h2 className="light text-center skills-text">
          I currently have the following set of skills and tools...
        </h2>
        <br />
        <SkillsBox />
        <h2 className="light text-center skills-text">...and we go for more</h2>
      </Container>
    </div>
  );
};

export default Skills;
