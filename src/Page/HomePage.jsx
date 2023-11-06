import React from "react";
import NavBar from "../Components/NavBar";
import LandingPage from "../Components/LandingPage";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";
import RecentWorks from "../Components/RecentWorks";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Skills />
      <RecentWorks />
      <Footer />
    </div>
  );
};

export default HomePage;
