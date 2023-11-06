import React from "react";
import {
  DribbbleFillIcon,
  FacebookFillIcon,
  InstagramFillIcon,
  LinkedinFillIcon,
} from "../assets/icons";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className=" bg-gray-200">
        <div className="flex flex-col justify-center mx-5 md:mx-20 md:flex md:flex-row md:items-start md:mt-3 pt-10 md:justify-center md:gap-20">
          <div className="">
            <p className=" text-xl font-semibold mb-10">
              Lets Make something amazing together
            </p>
            <p className=" text-lg font-medium">
              Start by{" "}
              <a
                href="mailto::consolationlotachi@gmail.com"
                className=" text-green-500 underline"
              >
                Saying hi
              </a>{" "}
            </p>
          </div>
          <div className="">
            <p className=" text-sm text-gray-500 capitalize">Information</p>
            <p className=" mb-10 text-sm text-gray-500">
              Umuerim Nekede Owerri, Imo State Nigeria
            </p>

            <ul>
              <li className=" py-2 cursor-pointer hover:text-green-900 text-md">
                Services
              </li>
              <li className=" py-2 cursor-pointer hover:text-green-900 text-md">
                Works
              </li>
              <li className=" py-2 cursor-pointer hover:text-green-900 text-md">
                Notes
              </li>
              <li className=" py-2 cursor-pointer hover:text-green-900 text-md">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className=" grid md:flex md:justify-between md:items-center mx-5 py-5">
          <div className=" grid md:flex md:items-end md:gap-10">
            <h1 className="text-2xl font-semibold cursor-pointer">
              Consolation <span className=" text-green-500">Lotachi</span>
            </h1>
          </div>

          <div className="">
            <p className=" text-gray-700">
              Copyright 2023, All Rights Reserved
            </p>
          </div>

          <div className=" flex gap-1 mt-5 md:flex  md:gap-5 animate-none">
            <div className="h-[35px] w-[35px] flex justify-center items-center text-white bg-blue-500 rounded-full ">
              <a href="https://twitter.com/TechieConso" target="_blank">
                <TwitterFillIcon className="" />
              </a>
            </div>
            <div className="h-[35px] w-[35px] flex justify-center items-center text-white bg-black rounded-full ">
              <a href="https://github.com/KEM-CONSOLATION" target="_blank">
                <GithubFillIcon className="" />
              </a>
            </div>
            <div className="h-[35px] w-[35px] flex justify-center items-center text-white bg-red-500 rounded-full ">
              <a href="https://dribbble.com/TechieConso" target="_blank">
                <DribbbleFillIcon className="" />
              </a>
            </div>
            <div className="h-[35px] w-[35px] flex justify-center items-center text-white bg-blue-700 rounded-full">
              <a
                href="https://web.facebook.com/kem.consolation"
                target="_blank"
              >
                <FacebookFillIcon className="" />
              </a>
            </div>
            <div className="h-[35px] w-[35px] flex justify-center items-center text-white bg-pink-500 rounded-full">
              <a href="https://www.instagram.com/techie_conso/" target="_blank">
                <InstagramFillIcon className="" />
              </a>
            </div>

            <div className="h-[35px] w-[35px] flex justify-center items-center text-white bg-blue-500 rounded-full">
              <a
                href="https://www.linkedin.com/in/kem-consolation/"
                target="_blank"
              >
                <LinkedinFillIcon className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
