import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";

const DocumentModal = (props) => {
  const [display, setDisplay] = useState("none");

  const showSpinner = () => setDisplay("inline-block");
  const hideSpinner = () => setTimeout(setDisplay("none"), 500);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onShow={() => showSpinner()}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hoja de vida
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-center">
          <Spinner animation="border" style={{ display: display }} />
        </div>
        <iframe
          src="https://onedrive.live.com/embed?cid=F0543B742DF69574&resid=F0543B742DF69574%2151527&authkey=APVpSIAD8IZd4hs&em=2"
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          title="document"
          onLoad={() => hideSpinner()}
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default DocumentModal;
