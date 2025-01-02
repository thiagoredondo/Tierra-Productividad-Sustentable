import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className=" grid justify-items-center ">
      <div className="dropdown inline-block relative">
        <button className="bg-transparent  px-4 rounded inline-flex items-center  ">
          <span className="mx-1">Servicios</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray font-normal pt-1">
          <li>
            <Link
              to="/gestionambiental"
              className="cursor-pointer rounded-t bg-blue-200 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              Gestión Ambiental
            </Link>
          </li>
          <li>
            <Link
              to="/seguridad"
              className="cursor-pointer rounded-t bg-blue-300 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              Seguridad e Higiene
            </Link>
          </li>
          <li>
            <Link
              to="/capacitaciones"
              className="cursor-pointer rounded-t bg-blue-400 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
            >
              Capacitaciones
            </Link>
          </li>
          <li>
            <HashLink
              to="/#agenda"
              className="cursor-pointer rounded-t bg-blue-500 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
              smooth={true}
              offset={-140}
            >
              Agenda de Objetivos Sostenibles y Comunicación ambiental
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
