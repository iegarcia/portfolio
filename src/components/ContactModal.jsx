import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import email from "../assets/icons/envelope.svg";

const social = [
  {
    name: "Linkedin",
    image: linkedin,
    url: "https://www.linkedin.com/in/ignacio-encina-garcia/",
    content: "Ignacio Encina Garcia",
  },
  {
    name: "Github",
    image: github,
    url: "https://github.com/iegarcia",
    content: "iegarcia",
  },
  {
    name: "Gmail",
    image: email,
    url: "mailto:ignacio.encina.garcia@gmail.com",
    content: "Send me an email",
  },
];

const ContactModal = () => {
  return (
    <div>
      {social.map((s) => {
        return (
          <a href={s.url} key={s.name} style={{ color: "black" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    width="20%"
                    className="d-inline"
                    src={s.image}
                    alt="github"
                  />
                  &nbsp;
                  <h2 className="d-inline">{s.name}</h2>
                </div>
                <div className="flip-card-back ">
                  <h2>{s.content}</h2>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ContactModal;
