import React from "react";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../../../variants";

const Agenda = () => {
  return (
    <section className="section mt-2 mb-1 lg:my-0 lg:py-0" id="agenda">
      <div className="container px-[11.5%] mx-auto">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-10">
          {/* text */}
          <motion.div
            className="flex-1"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-new-green text-3xl mb-8 leading-1 font-semibold">
              Agenda de Objetivos Sostenibles y Comunicación ambiental
            </h2>

            <p className="mb-2 text-lg">
              Diseño y gestión de la comunicación, y difusión de la
              sostenibilidad de la empresa, de los procesos que se llevan a cabo
              para lograrla, programación y seguimiento de agenda de objetivos
              sostenibles, etc.
            </p>
          </motion.div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex-1 bg-aboutThree bg-contain bg-no-repeat h-[300px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom mb-10 lg:mb-0 lg:mt-20  "
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
