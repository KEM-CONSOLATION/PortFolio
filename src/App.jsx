import "./App.css";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import {
  MailLineIcon,
  GithubLineIcon,
  TwitterLineIcon,
  ServiceLineIcon,
  ContactsLineIcon,
  HomeGearLineIcon,
  StickyNoteLineIcon,
  ReactjsFillIcon,
  NodeTreeIcon,
  DatabaseFillIcon,
  Menu1LineIcon,
  CloseLineIcon,
  PenNibFillIcon,
  CodeFillIcon,
  DribbbleFillIcon,
  FacebookFillIcon,
  InstagramFillIcon,
  LinkedinFillIcon,
  LinkIcon,
} from "../src/assets/icons";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Work from "../src/assets/images/CityHome.jpg";
import Work1 from "../src/assets/images/zeilot.png";
import Work2 from "../src/assets/images/pendulum.png";
import Work3 from "../src/assets/images/photocard.png";
import HomePage from "./Page/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
