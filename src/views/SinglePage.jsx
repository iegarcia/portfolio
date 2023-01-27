import SmoothNavbar from "../components/Navbar";
import Home from "./Home";
import Myself from "../components/Myself";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Sidebar from "../components/Sidebar";

const SinglePage = () => {
  return (
    <>
      <SmoothNavbar />
      <Home />

      <Myself />

      <About />

      <Skills />

      <Work />

      <Contact />
      <Sidebar />
    </>
  );
};

export default SinglePage;
