import Heading from "../components/Heading";
import aboutImage from "../assets/01.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-container">
          <Heading text="About me" />
          <div className="about-content">
            <p>
              Well-qualified Full Stack developer familiar with a wide range of
              programming languages and utilities. Knowledgeable in development
              requirements, backend and frontend. Collaborative team player with
              technical skills offering a self-taught personality.
            </p>
            <p>
              I am always looking for new challenges and love to learn as well
              as try new things. I have developed projects autonomously,
              participated in important projects such as{" "}
              <strong>
                <abbr title="App of the Province of Buenos Aires where you can view identification data, check the status of requested appointments, the type of vaccine administered and report symptoms related to COVID vaccination.">
                  VacunatePBA
                </abbr>
              </strong>{" "}
              and was in charge of the maintenance of projects already
              completed.
            </p>
            <p>
              I am curious, sincere, committed, responsible and growth-minded.{" "}
              <br />
              In my free time I like to ride my bike, I dance salsa and bachata
              (or at least I try to...), Marvel fan.
            </p>
          </div>
        </div>
        <div className="about-container">
          <img src={aboutImage} alt="me" className="about-image" />
        </div>
      </div>
    </>
  );
};

export default About;
