import Offcanvas from "react-bootstrap/Offcanvas";

import ContactModal from "../components/ContactModal";

const Contact = ({ show, close }) => {
  return (
    <>
      <Offcanvas show={show} onHide={close}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Me!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h2 className="animate__animated animate__slideInDown">
            You can find me in...
          </h2>
          <hr />
          <ContactModal />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Contact;
