import Heading from "../components/Heading";
import { SiGmail, SiLinkedin } from "react-icons/si";

const iconSize = 20;

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container">
          <Heading text="Contact me" />
          <p className="contact-content">
            Hello again! If you are here it means that I got your attention, so
            your next intention may be to initiate contact 🖖 <br />
            Below you'll find my most frequent contact channels where you can
            find me
            <br />
            Have a nice day!
          </p>
          <hr className="text-light" />
          <div>
            <br />
          </div>
          <div className="social-container">
            <a
              className="social-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ignacio-encina-garcia/"
            >
              <SiLinkedin size={iconSize} /> ignacio Encina Garcia
            </a>
            <a
              className="social-link"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:ignacio.encina.garcia@gmail.com"
            >
              <SiGmail size={iconSize} /> Send me an email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
