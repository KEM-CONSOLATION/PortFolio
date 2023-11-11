import React, { useState } from "react";
import {
  MailLineIcon,
  GithubLineIcon,
  Menu1LineIcon,
  CloseLineIcon,
  LinkedinFillIcon,
} from "../assets/icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className=" max-w-5xl mx-auto">
      <div>
        <div className=" relative grid grid-flow-row md:flex md:justify-between gap-10 items-center  py-10  border-b-2  px-3 ">
          <div className="">
            <a href="/" id="home">
              <h1 className=" text-lg md:text-3xl font-semibold cursor-pointer font-mono">
                Consolation <span className=" text-blue-500">Lotachi</span>{" "}
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
              <li className="hover:text-blue-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-500 mb-5 py-2 px-3 md:py-0 md:px-0 md:mb-0 ">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div className={`lg:flex ${!open ? "block" : "hidden"}`}>
            <ul className=" flex gap-5 cursor-pointer font-semibold">
              <li className="hover:text-blue-500 py-2 px-3 md:py-0 md:px-0">
                <a href="https://github.com/KEM-CONSOLATION" target="_blank">
                  <GithubLineIcon className="text-black-500  inline items-center" />{" "}
                </a>
              </li>
              <li className="hover:text-blue-500 py-2 px-3 md:py-0 md:px-0">
                <a
                  href="https://www.linkedin.com/in/kem-consolation/"
                  target="_blank"
                >
                  <LinkedinFillIcon className="text-black-500  inline items-center" />{" "}
                </a>
              </li>
              <li className="hover:text-blue-500 py-2 px-3 md:py-0 md:px-0">
                <a
                  href=" https://mail.google.com/mail/consolationlotachi@gmail.com"
                  target="_blank"
                >
                  <MailLineIcon className="text-red-500  inline items-center" />{" "}
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
