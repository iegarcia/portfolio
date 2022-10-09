import Title from "../components/Title";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import aboutImage from "../assets/02.png";

const buttonText = "<HojaDeVida />";

const About = () => {
  return (
    <div className="app-background">
      <Container>
        <Title text="A little about me" />
        <Row style={{ alignItems: "center" }}>
          <Col sm={4}>
            <img src={aboutImage} alt="about-me" className="aboutImage" />
          </Col>
          <Col sm={8}>
            <p className="light about-text">
              Genius, billionaire, playboy, philanthropist... just kidding, my
              name is Ignacio Encina Garcia, I'm from Buenos Aires, Argentina.
            </p>
            <p className="light about-text">
              I am a full stack developer, looking for new challenges and
              experiences as such, I got my knowledge at Digital House, the ORT
              institute and also on my own merit.
            </p>
            <p className="light about-text">
              In DH I deepened my knowledge of languages, increasing my love for
              development (particularly for the frontend), but I don't marry any
              language, it's the good thing about being "all-rounder".
            </p>
            <p className="light about-text">
              I am curious, sincere (sometimes too much...), committed, I
              consider myself responsible, friendly and my pillar would be
              learning, since I like to learn new things and one never stops
              learning.
            </p>
            <p className="light about-text">
              In my free time I like to ride my bike, I dance salsa and bachata
              (or at least I try...), a fan of Marvel, I am also a lover of good
              conversations and coffee with milk and croissants.
            </p>
            <br />
            <a
              href="https://1drv.ms/b/s!AnSV9i10O1Twg5JHp072KRPaxvmXIQ"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="buttonDocument">{buttonText}</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
