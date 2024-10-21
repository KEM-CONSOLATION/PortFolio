import React from "react";
import { PenNibFillIcon, SpeedometerIcon } from "../assets/icons";

const Skills = () => {
  return (
    <div>
      {" "}
      <div className=" grid md:grid-cols-2 gap-10 md:gap-20 items-start mt-10 md:mt-20 max-w-7xl mx-auto ">
        <div className="grid grid-rows-3 gap-5 mx-5 md:mx-0 order-2 md:-order-none">
          <div className="flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-500 px-10 py-5 shadow-md text-white hover:bg-green-700 cursor-pointer">
            <div className="grid grid-rows-1 gap-2">
              <p className="text-2xl font-semibold">UI/UX Design</p>
              <p className="text-sm">
                Craft seamless and user-friendly interfaces
              </p>
            </div>
            <div className="bg-blue-400 rounded-full px-5 py-5">
              <PenNibFillIcon size={40} />
            </div>
          </div>

          <div className="flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-400 px-10 py-5 shadow-md text-white hover:text-white hover:bg-blue-700 cursor-pointer">
            <div className="grid grid-rows-1 gap-2">
              <p className="text-2xl font-semibold">Responsive Development</p>
              <p className="text-sm">
                Build mobile-first, responsive web applications
              </p>
            </div>
            <div className="bg-red-400 rounded-full px-5 py-5">
              <PenNibFillIcon size={40} />
            </div>
          </div>

          <div className="flex justify-between items-center hover:rounded-br-full transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-500 px-10 py-5 shadow-md text-white hover:text-white hover:bg-gray-700 cursor-pointer">
            <div className="grid grid-rows-1 gap-2">
              <p className="text-2xl font-semibold">Performance Optimization</p>
              <p className="text-sm">
                Optimize for speed and efficiency, ensuring fast load times
              </p>
            </div>
            <div className="bg-blue-400 rounded-full px-5 py-5">
              <SpeedometerIcon size={40} />
            </div>
          </div>
        </div>

        <div className=" mx-5">
          <p className="tracking-widest text-slate-70 text-justify">
            <p className="font-semibold">Experienced Front-End Web Developer</p>
            Skilled in building modern, scalable, and maintainable web
            applications using React, TypeScript, and Next.js. With expertise in
            HTML5, CSS3, and JavaScript, I specialize in component-driven
            development, state management (Redux, Context API), and performance
            optimization. Proficient in responsive UI development using Tailwind
            CSS, Styled Components, and CSS-in-JS. I focus on creating
            high-quality, accessible interfaces and optimizing for SEO and
            performance, while leveraging best practices for code
            maintainability and reusability. Adept at integrating third-party
            APIs, building RESTful services, and using modern dev tools like
            Webpack and Git to streamline development workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
