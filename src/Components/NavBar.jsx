import React, { useState } from "react";
import {
  MailLineIcon,
  GithubLineIcon,
  TwitterLineIcon,
  ServiceLineIcon,
  HomeGearLineIcon,
  Menu1LineIcon,
  CloseLineIcon,
  SettingsFillIcon,
} from "../assets/icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className=" max-w-5xl mx-auto">
      <div>
        <div className=" relative grid grid-flow-row md:flex md:justify-between gap-10 items-center  py-10  border-b-2  px-3 ">
          <div className="">
            <a href="/">
              <h1 className=" text-lg md:text-3xl font-semibold cursor-pointer font-mono">
                Consolation <span className=" text-green-500">Lotachi</span>{" "}
              </h1>
            </a>
          </div>

          {open === true ? (
            <div
              className=" absolute top-10 right-4 md:hidden cursor-pointer"
              onClick={() => setopen(false)}
            >
              <Menu1LineIcon size={35} />
            </div>
          ) : (
            <div
              className=" absolute top-10 right-4 md:hidden cursor-pointer"
              onClick={() => setopen(true)}
            >
              <CloseLineIcon size={45} />
            </div>
          )}

          <div className={`md:flex ${!open ? "block" : "hidden"}`}>
            <ul className=" md:flex gap-8 cursor-pointer font-semibold">
              <li className="hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 ">
                {" "}
                <Link to="/">
                  <span className="">
                    <HomeGearLineIcon className=" text-green-500 inline  items-center" />
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li className="hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 ">
                {" "}
                <Link to="projects">
                  <span className="">
                    <SettingsFillIcon className=" text-green-500 inline  items-center" />
                  </span>{" "}
                  Projects
                </Link>
              </li>

              <li className="hover:text-green-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 ">
                {" "}
                <span className="">
                  <ServiceLineIcon className=" text-green-500 inline  items-center" />
                </span>{" "}
                Services
              </li>
            </ul>
          </div>
          <div className={`lg:flex ${!open ? "block" : "hidden"}`}>
            <ul className=" flex gap-5 cursor-pointer font-semibold">
              <li className="hover:text-green-500 py-2 px-3 md:py-0 md:px-0">
                <a href="https://twitter.com/TechieConso" target="_blank">
                  <TwitterLineIcon className="text-blue-500 inline  items-center" />{" "}
                  Twitter
                </a>
              </li>
              <li className="hover:text-green-500 py-2 px-3 md:py-0 md:px-0">
                <a href="https://github.com/KEM-CONSOLATION" target="_blank">
                  <GithubLineIcon className="text-black-500  inline items-center" />{" "}
                  Github{" "}
                </a>
              </li>
              <li className="hover:text-green-500 py-2 px-3 md:py-0 md:px-0">
                <a
                  href=" https://mail.google.com/mail/consolationlotachi@gmail.com"
                  target="_blank"
                >
                  <MailLineIcon className="text-red-500  inline items-center" />{" "}
                  Mail{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
