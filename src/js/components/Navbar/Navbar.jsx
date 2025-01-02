import React, { useState } from "react";
// import icons
import Logo from "../../../media/logo.png";
//link
import { Link } from "react-scroll";
import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="bg-blue-100 fixed z-50 w-full shadow px-[6%]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="cursor-pointer flex items-center justify-between py-0 md:py-0 md:block">
              <HashLink to="/#home" smooth={true}>
                <img
                  src={Logo}
                  className="w-[30%] lg:w-[20%]"
                  alt="logo tierra productividad sustentable"
                />
              </HashLink>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black/90">
                  <HashLink
                    to="/#home"
                    smooth={true}
                    className="cursor-pointer h-[60px] flex items-center justify-center"
                  >
                    Inicio
                  </HashLink>
                </li>
                <li className="text-black/90">
                  <HashLink
                    to="/#acerca"
                    smooth={true}
                    offset={-70}
                    className="cursor-pointer h-[60px] flex items-center justify-center"
                  >
                    Acerca de
                  </HashLink>
                </li>
                <li>
                  <Dropdown className="cursor-pointer h-[60px] flex items-center justify-center" />
                </li>
                <li className="text-black/90">
                  <Link
                    to="contact"
                    smooth={true}
                    className="cursor-pointer h-[60px] flex items-center justify-center"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
