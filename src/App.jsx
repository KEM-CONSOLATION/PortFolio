import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Projects from "./Page/Projects";
import "./App.css";
function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
