import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Contact from "../views/Contact";

const logo = "<iegarcia />";

const DynamicNavbar = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const [color, setColor] = useState("#FCFDFF");
  const [textColor, setTextColor] = useState("#000000");

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(
    sessionStorage.getItem("switch") === "false" ? false : true
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const translate = (event) => {
    if (i18n.language === "es") {
      i18n.changeLanguage("en");
      setValue(event.target.checked);
      sessionStorage.setItem("switch", event.target.checked.toString());
    } else {
      i18n.changeLanguage("es");
      setValue(event.target.checked);
      sessionStorage.setItem("switch", event.target.checked.toString());
    }
  };

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
            <Form.Check
              type="switch"
              id="custom-switch"
              label="english"
              onChange={translate}
              style={{ color: textColor }}
              checked={value}
            />
          </Form>
        </Navbar.Collapse>
        <Contact show={show} close={handleClose} />
      </Container>
    </Navbar>
  );
};

export default DynamicNavbar;
