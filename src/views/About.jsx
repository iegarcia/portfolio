import { useTranslation } from "react-i18next";

import Title from "../components/Title";
import Arrow from "../components/Arrow";
import { Container, Row, Col, Button } from "react-bootstrap";

import aboutImage from "../assets/02.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="app-background">
      <Container>
        <Title text="about_me" />{" "}
        <Row style={{ alignItems: "center" }}>
          <Col sm={4}>
            <img src={aboutImage} alt="about-me" className="aboutImage" />
          </Col>
          <Col sm={8}>
            <p className="light about-text">{t("about_text_1")}</p>
            <p className="light about-text">{t("about_text_2")}</p>
            <p className="light about-text">{t("about_text_3")}</p>
            <a
              href={sessionStorage.getItem("link")}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="buttonDocument">{t("resume")}</Button>
            </a>
          </Col>
        </Row>
        <br />
        <Arrow link="skills" />
      </Container>
    </div>
  );
};

export default About;
