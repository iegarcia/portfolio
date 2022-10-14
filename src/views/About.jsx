import { useTranslation } from "react-i18next";

import Title from "../components/Title";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import aboutImage from "../assets/02.png";
import Arrow from "../components/Arrow";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="app-background">
      <Container>
        <Title text="about_me" />
        <Row style={{ alignItems: "center" }}>
          <Col sm={4}>
            <img src={aboutImage} alt="about-me" className="aboutImage" />
          </Col>
          <Col sm={8}>
            <p className="light about-text">{t("about_text_1")}</p>
            <p className="light about-text">{t("about_text_2")}</p>
            <p className="light about-text">{t("about_text_3")}</p>
            <p className="light about-text">{t("about_text_4")}</p>
            <p className="light about-text">{t("about_text_5")}</p>
            <a
              href="https://1drv.ms/b/s!AnSV9i10O1Twg5JHp072KRPaxvmXIQ"
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
