import React from "react";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../../../variants";

export default function AcercaDe() {
    return (
        <section id="acerca">
            <div className="overflow-hidden bg-gradient-to-b from-gray-200  to-white pt-20 sm:pb-10 lg:px-[10%]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <motion.div
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className="lg:max-w-lg"
                            >
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-new-blue sm:text-4xl">
                                    Acerca de
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Brindamos un servicio de asesoramiento/consultoría, con
                                    perspectiva integral en materia medioambiental y en seguridad
                                    e higiene, con un alto grado de especificidad y diseñado a las
                                    exactas necesidades del caso.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="lg:pr-8 lg:pt-4"
                        >
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-new-green sm:text-4xl">
                                    Nuestra visión
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Aportar mayor grado de sustentabilidad a los productos y
                                    servicios que asesoramos, con el objetivo de lograr una
                                    mejoría en la productividad, y como consecuencia lograr mayor
                                    compromiso ambiental y en materia de seguridad.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
