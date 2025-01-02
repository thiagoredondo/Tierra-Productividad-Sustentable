import React from "react";

import { FcRightUp } from "react-icons/fc";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../../../variants";
import { Link } from "react-router-dom";

const SeguridadHigiene = () => {
  return (
    <section className="section mt-10 mb-1 lg:my-0 lg:py-0 " id="seguridad">
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
            <h2 className="h2 text-new-blue text-3xl mb-8 leading-1 font-semibold">
              Asesoramiento, Consultoría en Seguridad e Higiene
            </h2>

            <p className="lg:mb-6 text-lg">
              Realizamos diagnósticos e informes sobre la seguridad empresarial
              o sobre situaciones específicas.
            </p>

            <div className="flex gap-x-8 items-center">
              <Link
                to="/seguridad"
                className="text-new-green text-lg font-medium flex hover:text-blue-600 hover:underline mt-6"
              >
                Ver más
                <FcRightUp className="flex ml-2 text-white justify-center items-center text-xl mt-1" />
              </Link>
            </div>
          </motion.div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex-1 bg-aboutOne bg-contain bg-no-repeat h-[250px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom lg:mt-20 my-0  "
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeguridadHigiene;
