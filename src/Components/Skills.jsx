import React from "react";
import { PenNibFillIcon, CodeFillIcon } from "../assets/icons";
import Typewriter from "typewriter-effect";

const Skills = () => {
  return (
    <div>
      {" "}
      <div className=" grid md:grid-cols-2 gap-10 md:gap-20 items-start mt-40 ">
        <div className=" grid grid-rows-3 gap-5 mx-5 md:mx-0 order-2 md:-order-none">
          <div className=" flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-slate-500 px-10 py-5 shadow-md text-white hover:bg-green-700 cursor-pointer">
            <div className=" grid grid-rows-1 gap-2">
              <p className=" text-2xl font-semibold">Design</p>
              <p className=" text-sm">
                Create Digital products with unique ideas
              </p>
              <p className=" text-xs font-bold underline">20+ Projects</p>
            </div>
            <div className=" bg-green-400 rounded-full px-5 py-5 ">
              <PenNibFillIcon size={40} />
            </div>
          </div>

          <div className=" flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-400 px-10 py-5 shadow-md text-white hover:text-white hover:bg-blue-700 cursor-pointer">
            <div className=" grid grid-rows-1 gap-2">
              <p className=" text-2xl font-semibold">
                FrontEnd Web Development
              </p>
              <p className=" text-sm">
                I develop FrontEnd with coding, super smooth
              </p>
              <p className=" text-xs font-bold underline">25 Projects</p>
            </div>
            <div className=" bg-red-400 rounded-full px-5 py-5 ">
              <CodeFillIcon size={40} />
            </div>
          </div>

          <div className=" flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-500 px-10 py-5 shadow-md text-white hover:text-white hover:bg-gray-700 cursor-pointer">
            <div className=" grid grid-rows-1 gap-2">
              <p className=" text-2xl font-semibold">SEO</p>
              <p className=" text-sm">
                Boost your online presense by SEO optimization
              </p>
              <p className=" text-xs font-bold underline">20 Projects</p>
            </div>
            <div className=" bg-blue-400 rounded-full px-5 py-5 ">
              <PenNibFillIcon size={40} />
            </div>
          </div>
        </div>

        <div className=" mx-5">
          <p className=" text-slate-400 text-lg mb-5 ">Introduction</p>
          <p className=" text-4xl font-semibold">
            Hello👋 I'm Consolation Lotachi{" "}
          </p>
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
          <p className=" text-2xl italic font-medium text-slate-500 mb-7">
            Every Great design begin's with an even better story
          </p>
          <p className=" tracking-widest text-slate-70 text-justify">
            <p className=" font-semibold">
              Resourceful Front-End Web Developer
            </p>
            Bringing in-depth knowledge of latest technology trends to produce
            clean website design. Detail-oriented collaboration with others to
            define project expectations and demand. Hands-on testing and
            debugging to address inconsistencies and maintain performance
            thresholds. Strong foundation in web technologies such as HTML, CSS,
            Tailwind CSS, Styled-Components, and JavaScript, Typescript, React,
            which enables me to build robust and maintainable React applications
            efficiently. Leveraging my proficiency in state management,
            component-based architecture, and React hooks, I can design scalable
            and performant front-end solutions that meet the project's
            requirements. Fully proficient in Html, CSS, JavaScript, React,
            Typescript, Next, Tailwind, Bootstrap, Styled Components e.t.c.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
