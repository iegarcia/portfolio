import { useTranslation } from "react-i18next";

import Offcanvas from "react-bootstrap/Offcanvas";

import ContactModal from "../components/ContactModal";

const Contact = ({ show, close }) => {
  const { t } = useTranslation();
  return (
    <>
      <Offcanvas show={show} onHide={close}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("contact")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h2>{t("contact_text")}</h2>
          <hr />
          <ContactModal />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Contact;
