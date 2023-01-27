import { Accordion } from "react-bootstrap";
import { front, back, database, tools } from "../assets/data";

const data = [
  {
    id: 0,
    title: "Frontend",
    content: front,
  },
  {
    id: 1,
    title: "Backend",
    content: back,
  },
  {
    id: 2,
    title: "SQL/NoSQL",
    content: database,
  },
  {
    id: 3,
    title: "Tools",
    content: tools,
  },
];

function renderItems(array) {
  return array.map((e) => {
    return e;
  });
}

const SkillsBox = () => {
  return (
    <Accordion>
      {data.map((e) => {
        return (
          <Accordion.Item eventKey={e.id}>
            <Accordion.Header>{e.title}</Accordion.Header>
            <Accordion.Body
              className="d-flex"
              style={{ justifyContent: "space-between" }}
            >
              {renderItems(e.content)}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default SkillsBox;
