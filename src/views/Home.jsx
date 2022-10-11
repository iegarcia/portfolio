import { useTranslation } from "react-i18next";

import Container from "react-bootstrap/Container";
import image from "../assets/01.png";
import Arrow from "../components/Arrow";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-background">
      <Container className="d-flex content">
        <div>
          <img className="iegarcia" src={image} alt="iegarcia" />
        </div>
        <h1 className="light welcome">Ignacio Encina Garcia</h1>
        <h2 className="light role">{t("fullstack")}</h2>
        <Arrow link="about" />
      </Container>
    </div>
  );
};

export default Home;
