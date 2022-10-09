import Container from "react-bootstrap/Container";
import image from "../assets/01.png";

const Home = () => {
  return (
    <div className="home-background">
      <Container className="d-flex content">
        <div>
          <img className="iegarcia" src={image} alt="iegarcia" />
        </div>
        <h1 className="light welcome">Ignacio Encina Garcia</h1>
        <h2 className="light role">Full Stack Web Developer</h2>
      </Container>
    </div>
  );
};

export default Home;
