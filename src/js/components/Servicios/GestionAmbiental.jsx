import React from "react";
// icon

import { FcRightUp } from "react-icons/fc";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../../../variants";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section my-1 lg:mb-0 lg:py-0 lg:mt-10 " id="about">
      <div className="container px-[11.5%] mx-auto">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex-1 bg-about bg-contain bg-no-repeat h-[300px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom mb-10 lg:mb-0 lg:mt-20  "
          ></motion.div>
          {/* text */}
          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-new-green text-3xl mb-3 leading-1 font-semibold">
              Asesoramiento, Consultoría y Gestión Ambiental
            </h2>

            <p className="mb-6 text-lg">
              Ofrecemos un servicio general e integral del proceso productivo, y
              también uno enfocado en la resolución de situaciones y o gestiones
              particulares. <br /> Realizamos elaboración de informes para
              tramitación de expedientes tanto en organismos municipales como en
              ADA, Ministerio de Ambiente de Provincia De Buenos Aires (OPDS),
              APrA, INA y ACUMAR.
            </p>

            <div className="flex gap-x-8 items-center">
              <Link
                to="/gestionambiental"
                className="text-new-blue text-lg font-medium flex hover:text-green-600 hover:underline "
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

export default About;
