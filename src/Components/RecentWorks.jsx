import React from "react";
import { LinkIcon } from "../assets/icons";

import Work6 from "../assets/images/Cloud.png";
import Work2 from "../assets/images/KureNode.png";
import Work from "../assets/images/VultureTech.png";
import Work1 from "../assets/images/zeilot.png";
import { Link } from "react-router-dom";
const RecentWorks = () => {
  return (
    <div>
      <div className=" max-w-5xl mx-auto">
        <div className=" flex flex-col items-center justify-center md:flex md:flex-row gap-20 md:items-start  mt-3 md:mt-10 ">
          <div className="">
            <h1 className=" text-4xl italic text-blue-900 font-bold">
              Latest works
            </h1>
            <p className=" text-sm text-gray-500 mb-5 md:mb-20">
              Perfect solutions for digital solutions
            </p>
            <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
              <div class="relative group">
                <img src={Work} alt="" class="w-full" />
                <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://vulture-tech.netlify.app/"
                    target="_blank"
                    className=" flex"
                  >
                    <LinkIcon /> <span>Vulture Tech</span>
                  </a>
                </div>
              </div>
            </div>

            <div className=" mt-5 md:mt-10 flex flex-col mb-5 md:mb-0 md:ml-20">
              <Link
                to="/projects"
                className=" text-blue-500 underline font-bold text-2xl uppercase mb-10"
              >
                All Projects
              </Link>
              <p>Some projects not allowed due to NOA.</p>
              <p>
                If you want to see more,{" "}
                <a
                  href="mailto::consolationlotachi@gmail.com"
                  target="_blank"
                  className=" underline text-blue-500"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>

          <div className=" grid grid-rows-1 gap-7">
            <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
              <div class="relative group">
                <img src={Work1} alt="Zeitiod Project" class="w-full" />
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
                    href="http://kurenode.com/"
                    target="_blank"
                    className=" flex"
                  >
                    <LinkIcon /> <span>KureNode</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="max-w-xs shadow-sm shadow-slate-400 p-5 relative">
              <div class="relative group">
                <img src={Work6} alt="" class="w-full" />
                <div class="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://cloudintegratedinc.com/"
                    target="_blank"
                    className=" flex"
                  >
                    <LinkIcon /> <span>Cloud Integrated</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
