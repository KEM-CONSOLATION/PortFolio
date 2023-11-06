import React, { useEffect, useState } from "react";
import {
  ReactjsFillIcon,
  NodeTreeIcon,
  DatabaseFillIcon,
} from "../assets/icons";
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
          <div className=" order-2 md:-order-none mt-10">
            <p className=" bg-green-500 inline px-5 py-3 font-semibold text-white rounded-md">
              FrontEnd Developer
            </p>
            <h1 className=" mt-10 text-5xl font-semibold text-green-900">
              Talk is Cheap. <br /> Show me the code{" "}
            </h1>
            <p className=" mt-10">
              I design and code beautifully simple things and I love what I do.
            </p>
            <div className=" mt-10 animate-bounce">
              <a
                href="#"
                className=" underline font-semibold text-green-500 text-2xl"
              >
                Let's Chat
              </a>
            </div>

            <div className=" flex gap-5 md:grid md:grid-cols-2">
              <div className=" flex items-center gap-1 mt-5 md:mt-19 ">
                <h1 className=" text-3xl md:text-5xl font-semibold text-green-900">
                  {counter2}
                </h1>
                <h1 className=" text-xs md:text-sm">
                  Years +<br /> Experience
                </h1>
              </div>
              <div className=" flex items-center gap-1 mt-5 md:mt-19">
                <h1 className=" text-3xl md:text-5xl font-semibold text-green-900">
                  {counter}{" "}
                </h1>
                <h1 className=" text-xs md:text-sm">
                  Project completed <br /> in 106 countries
                </h1>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center mb-10 md:mb-0 h-72 w-72 mx-auto md:mx-0 md:h-96 md:w-96 rounded-full bg-green-600 relative">
            <div className=" grid items-center md:hidden mt-2 md:mt-19">
              <h1 className=" text-7xl md:text-5xl font-semibold text-white">
                {counter}{" "}
              </h1>
              <h1 className=" text-xs font-semibold  text-white md:text-sm">
                Project completed <br /> in 106 countries
              </h1>
            </div>

            <div className=" animate-spin shadow-2xl absolute top-0 right-0 bg-white rounded-full h-28 w-28 items-center flex justify-center text-[#61dbfb]">
              <ReactjsFillIcon size={60} />
            </div>
            <div className=" animate-pulse shadow-2xl absolute bottom-0 right-0 bg-white rounded-full h-28 w-28 items-center flex justify-center text-green-500">
              <NodeTreeIcon size={60} />
            </div>
            <div className=" animate-bounce shadow-2xl absolute left-[-40px] bottom-20 bg-white rounded-full h-28 w-28 items-center flex justify-center text-[#3FA037]">
              <DatabaseFillIcon size={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
