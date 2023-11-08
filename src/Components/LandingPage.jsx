import React, { useEffect, useState } from "react";
import { ReactjsFillIcon, Css3FillIcon } from "../assets/icons";
import Typewriter from "typewriter-effect";

import Profile from "../assets/images/Me-min.jpg";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
const LandingPage = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    if (counter < 205) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 10);
    }
  }, [counter]);

  useEffect(() => {
    if (counter2 < 3) {
      setTimeout(() => {
        setCounter2(counter2 + 0.5);
      }, 30);
    }
  }, [counter2]);
  return (
    <div>
      <div className=" max-w-5xl mx-auto">
        <div className=" grid grid-cols-1 mx-5 my-5 mt-10 md:flex md:items-center md:justify-between">
          <div className=" order-2 md:-order-none mt-5">
            <h1 className=" mt-5 text-3xl sm:text-5xl font-semibold text-blue-900">
              Hello👋 <br /> I'm Consolation Lotachi
            </h1>
            <p className=" text-blue-900 font-semibold mb-5">
              <Typewriter
                options={{
                  strings: [
                    "A FrontEnd Web Developer",
                    "A Graphics Designer",
                    "A Digital Illustrator",
                    "A User Interface Designer",
                    "A User Experience Designer",
                    "An Upcoming Tech Bro",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className=" text-xl sm:text-2xl italic font-medium text-slate-500 mb-7">
              Every Great design begin's with an even better story
            </p>

            <div className=" mt-10 animate-bounce">
              <p className=" bg-blue-500 inline px-5 py-3 font-semibold text-white rounded-md">
                <a
                  href="https://drive.google.com/file/d/1e0NxZlcHl60cbfxtqu0w8BSl67u0UDph/view?usp=drive_link"
                  target="_blank"
                >
                  View CV
                </a>
              </p>
            </div>

            {/* <div className=" flex gap-5 md:grid md:grid-cols-2">
              <div className=" flex items-center gap-1 mt-5 md:mt-19 ">
                <h1 className=" text-3xl md:text-5xl font-semibold text-blue-900">
                  {counter2}
                </h1>
                <h1 className=" text-xs md:text-sm">
                  Years +<br /> Experience
                </h1>
              </div>
              <div className=" flex items-center gap-1 mt-5 md:mt-19">
                <h1 className=" text-3xl md:text-5xl font-semibold text-blue-900">
                  {counter}{" "}
                </h1>
                <h1 className=" text-xs md:text-sm">
                  Project completed <br /> in 106 countries
                </h1>
              </div>
            </div> */}
          </div>
          <div className=" flex flex-col items-center justify-center mb-10 md:mb-0 h-72 w-72 mx-auto md:mx-0 md:h-96 md:w-96 rounded-full bg-blue-600 relative">
            <img
              src={Profile}
              alt=""
              srcset=""
              className="rounded-full h-full w-full object-cover"
            />

            <div className=" animate-spin shadow-2xl absolute top-0 right-0 bg-white rounded-full h-24 w-24 items-center flex justify-center text-[#61dbfb]">
              <ReactjsFillIcon size={50} />
            </div>
            <div className=" animate-pulse shadow-2xl absolute bottom-0 right-0 bg-black rounded-full h-24 w-24 items-center flex justify-center text-white">
              <a
                href="https://github.com/KEM-CONSOLATION"
                target="_blank
              "
              >
                <GithubFillIcon size={50} />
              </a>
            </div>
            <div className=" animate-bounce shadow-2xl absolute left-[-40px] bottom-20 bg-white rounded-full h-24 w-24 items-center flex justify-center  text-red-500">
              <Css3FillIcon size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
