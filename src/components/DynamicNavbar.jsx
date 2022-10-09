import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import Contact from "../views/Contact";

const logo = "<iegarcia />";

const DynamicNavbar = () => {
  const location = useLocation();

  const [color, setColor] = useState("#FCFDFF");
  const [textColor, setTextColor] = useState("#000000");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setColor("#007BD3");
      setTextColor("#FFFFFF");
    }
  }, [location]);

  return (
    <Navbar style={{ backgroundColor: color }} expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ color: textColor }}>
          {logo}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link style={{ color: textColor }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: textColor }} href="/about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: textColor }} href="/skills">
              Skills
            </Nav.Link>
            <Nav.Link style={{ color: textColor }} href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link
              style={{ color: textColor }}
              href="#"
              onClick={handleShow}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Form>
            <Form.Check type="switch" id="custom-switch" label="english" />
          </Form>
        </Navbar.Collapse>
        <Contact show={show} close={handleClose} />
      </Container>
    </Navbar>
  );
};

export default DynamicNavbar;
