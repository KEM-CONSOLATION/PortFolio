import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { LinkIcon } from "../assets/icons";
import Work1 from "../assets/images/zeilot.png";
import Work2 from "../assets/images/VultureTech.png";
import Work4 from "../assets/images/KureNode.png";
import Work3 from "../assets/images/Taxapp.png";
import pizza from "../assets/images/pizza.png";
import farAway from "../assets/images/FarAway.png";
import steps from "../assets/images/steps.png";
import quiz from "../assets/images/quiz.png";
import timer from "../assets/images/timer.png";
import movie from "../assets/images/movie.png";
import Blog from "../assets/images/AtomicBlog.png";
import eat from "../assets/images/EatNsplit.png";
const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className=" mx-auto max-w-5xl">
        <div className=" grid mx-10 gap-3 sm:gap-0 sm:grid-cols-3 items-center">
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={Work1} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://deploy-preview-62--cozy-pothos-dc3dc0.netlify.app/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>Zeitios</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={Work2} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://vulture-tech.netlify.app/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>Vulture Tech </span>
                </a>
              </div>
            </div>
          </div>

          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={Work4} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://kurenode.com/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>KureNode </span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={Work3} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://taxxapp.netlify.app/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>Taxapp</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={pizza} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="/" target="_blank" className=" flex">
                  <LinkIcon /> <span>Pizza App</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={movie} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://movie-fetch-nine.vercel.app/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>Movie Search</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={timer} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="/" target="_blank" className=" flex">
                  <LinkIcon /> <span>Workout Timer</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={steps} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="/" target="_blank" className=" flex">
                  <LinkIcon /> <span>Steps </span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={quiz} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://react-quiz-xi-bay.vercel.app/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>React Quiz</span>
                </a>
              </div>
            </div>
          </div>
          {/* <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={CityDashboard} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://k12.cabineblue.com/"
                  target="_blank"
                  className=" flex"
                >
                  <LinkIcon /> <span>CityXplorer Inventory </span>
                </a>
              </div>
            </div>
          </div> */}
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={farAway} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="/" target="_blank" className=" flex">
                  <LinkIcon /> <span>Far Away</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={eat} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="/" target="_blank" className=" flex">
                  <LinkIcon /> <span>Eat n Split</span>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
            <div class="relative group">
              <img src={Blog} alt="" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="/" target="_blank" className=" flex">
                  <LinkIcon /> <span>Atomic Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
