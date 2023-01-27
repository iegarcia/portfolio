import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SinglePage from "./views/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SinglePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
