import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end items-center  text-black/70 mb-[20px] mt-28 lg:px-24 px-10 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; Todos los derechos reservados | Powered by{" "}
              <Link
                to="https://www.linkedin.com/in/thiagoredondo/"
                target="_blank"
                className="text-new-blue hover:text-black hover:underline"
              >
                Thiago Redondo
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
