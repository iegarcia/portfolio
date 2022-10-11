import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";

import SkillsBox from "../components/SkillsBox";
import Title from "../components/Title";
import Arrow from "../components/Arrow";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="app-background skills">
      <Container>
        <Title text="skills" />
        <h2 className="light text-center skills-text">{t("current_skills")}</h2>
        <br />
        <SkillsBox />
        <br />
        <h2 className="light text-center skills-text">{t("future_skills")}</h2>
        <Arrow link="projects" />
      </Container>
    </div>
  );
};

export default Skills;
