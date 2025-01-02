import React from "react";
import { HashLink } from "react-router-hash-link";

const BackToHome = () => {
  return (
    <HashLink to="/#home" smooth={true}>
      <button
        type="button"
        className="flex mx-auto mt-28 justify-center items-center px-6 py-2.5 bg-blue-400 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
      >
        &larr; Volver al Inicio
      </button>
    </HashLink>
  );
};

export default BackToHome;
