import { useCallback } from "react";
import { Link as Scroll } from "react-scroll";
import { Container, Navbar, Nav } from "react-bootstrap";

const SmoothNavbar = () => {
  const toTop = useCallback(async () => {
    window.scrollTo(0, 0);
  }, []);

  const collapse = () => {
    const nav = document.getElementById("basic-navbar-nav");
    nav.classList.remove("show");
  };

  return (
    <Navbar className="nav" expand="lg">
      <Container className="nav-container">
        <Navbar.Brand
          className="nav-logo"
          href=""
          onClick={toTop}
        ></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ul className="nav-menu">
              <li className="nav-item">
                <Scroll
                  className="nav-link"
                  to="home"
                  smooth={true}
                  offset={-80}
                  onClick={collapse}
                >
                  Home
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  className="nav-link"
                  to="about"
                  smooth={true}
                  offset={-80}
                  onClick={collapse}
                >
                  About
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  className="nav-link"
                  to="skills"
                  smooth={true}
                  offset={-80}
                  onClick={collapse}
                >
                  Skills
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  className="nav-link"
                  to="work"
                  smooth={true}
                  offset={-80}
                  onClick={collapse}
                >
                  Work
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  className="nav-link"
                  to="contact"
                  smooth={true}
                  offset={60}
                  onClick={collapse}
                >
                  Contact
                </Scroll>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SmoothNavbar;
