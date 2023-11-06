import "./App.css";
import HomePage from "./Page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Page/Projects";
function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
