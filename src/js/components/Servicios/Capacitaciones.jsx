import React from "react";

import { FcRightUp } from "react-icons/fc";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../../../variants";
import { Link } from "react-router-dom";

const Capacitaciones = () => {
  return (
    <section
      className="section my-1 lg:mb-0 lg:py-0 lg:mt-10 "
      id="capacitaciones"
    >
      <div className="container px-[11.5%] mx-auto">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex-1 bg-aboutTwo bg-contain bg-no-repeat h-[200px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom mb-10 lg:mb-0 lg:mt-20  "
          ></motion.div>
          {/* text */}
          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-new-blue text-3xl mb-8 leading-1 font-semibold">
              Capacitaciones
            </h2>

            <p className="mb-6 text-lg">
              Dictamos capacitaciones para empresas, a trabajadores y/o
              directivos, en temáticas ambientales y de seguridad e higiene en
              el ámbito laboral, con material de soporte, dictados de forma
              presencial y/o remota.
            </p>

            <div className="flex gap-x-8 items-center">
              <Link
                to="/capacitaciones"
                className="text-new-green text-lg font-medium flex hover:text-blue-600 hover:underline "
              >
                Ver más
                <FcRightUp className="flex ml-2 text-white justify-center items-center text-xl mt-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capacitaciones;
