import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { projects } from "../assets/projectsData";

const ProjectsList = () => {
  return (
    <>
      <Container>
        <div className="projects-box">
          <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
            {projects.map((p) => {
              return (
                <Col key={p.title}>
                  <Card
                    className="light text-center"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={p.image} alt={p.title} />
                    <Card.Body>
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text>{p.description}</Card.Text>
                      <Button
                        className="btn-preview"
                        href={p.preview}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Preview
                      </Button>
                      <Button
                        className="btn-code"
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProjectsList;
