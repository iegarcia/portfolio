import { useTranslation } from "react-i18next";
import { Accordion, Col, Row } from "react-bootstrap";
import { images } from "../assets/skillsImages";

const SkillsBox = () => {
  const { t } = useTranslation();

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Row>
          <Col md={4} lg={6}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{t("front")}</Accordion.Header>
              <Accordion.Body>
                {images.slice(0, 7).map((image) => {
                  return (
                    <img
                      title={image.name}
                      className="image"
                      src={image.source}
                      alt={image.name}
                      key={image.name}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={4} lg={6}>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{t("back")}</Accordion.Header>
              <Accordion.Body>
                {images.slice(7, 11).map((image) => {
                  return (
                    <img
                      title={image.name}
                      className="image"
                      src={image.source}
                      alt={image.name}
                      key={image.name}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={4} lg={6}>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{t("database")}</Accordion.Header>
              <Accordion.Body>
                {images.slice(11, 16).map((image) => {
                  return (
                    <img
                      title={image.name}
                      className="image"
                      src={image.source}
                      alt={image.name}
                      key={image.name}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col md={4} lg={6}>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{t("tools")}</Accordion.Header>
              <Accordion.Body>
                {images.slice(16, 21).map((image) => {
                  return (
                    <img
                      title={image.name}
                      className="image"
                      src={image.source}
                      alt={image.name}
                      key={image.name}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Col>
        </Row>
      </Accordion>
    </>
  );
};

export default SkillsBox;
