import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import DynamicNavbar from "./components/DynamicNavbar";
import "animate.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DynamicNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
