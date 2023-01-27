import { useRef } from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

import { FaChevronDown } from "react-icons/fa";
import image from "../assets/02.png";

const roles = [
  "Full Stack Developer",
  "Front-end Developer",
  "Back-end Developer",
  "Technical Support",
];

const Home = () => {
  const [text, setText] = useState(roles[0]);
  const [direction, setDirection] = useState("forward");

  const type = "typing 4.0s steps(60, end), blink-caret 0.75s";
  const del = "deleting 4.0s steps(60, end), blink-caret 0.75s";
  const [animate, setAnimate] = useState(type);
  const index = useRef(0);

  /**
   * Changing typing direction every 'timeInterval' milliseconds and changing the word every two changes of direction.
   */
  const timeInterval = 3900;
  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= roles.length) {
        index.current = 0;
      }

      if (direction === "backward") {
        setText(roles[index.current]);
      }

      if (direction === "forward") {
        setDirection("backward");
        setAnimate(del);
        index.current += 1;
      } else if (direction === "backward") {
        setDirection("forward");
        setAnimate(type);
      }
    }, timeInterval);
    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  return (
    <>
      <div className="home" id="home">
        <div className="home-container">
          <span style={{ fontSize: 20, color: "white" }}>Hi There, 👋</span>
          <span style={{ fontSize: 60, color: "white" }}>I'm Ignacio</span>
          <p
            className="typewriter"
            key={Math.random().toString()}
            style={{ animation: animate }}
          >
            {text}
          </p>
          <Button className="btn-contact">
            <Link to="contact" spy={true} smooth={true} offset={50}>
              Find me!
            </Link>
          </Button>
        </div>
        <div className="image-container">
          <img style={{ maxWidth: "100%" }} src={image} alt="me" />
        </div>
      </div>
      <div className="scroll">
        <Link to="myself" spy={true} smooth={true} offset={-150}>
          <FaChevronDown size={30} />
        </Link>
      </div>
    </>
  );
};

export default Home;
