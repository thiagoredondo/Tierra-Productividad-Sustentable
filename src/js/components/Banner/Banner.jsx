import React from "react";
// Images
// import Image from "../assets/avatar.svg";

// import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../../variants";

const Banner = () => {
    return (
        <section
            className="min-h-[100vh] lg:min-h-[108vh] flex items-center bg-banner "
            id="home"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6">
                    {/* text */}
                    <div className="flex-1 text-center mt-[50px] mb-[150px] lg:mt-[0px] ">
                        <motion.h1
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className=" text-black/90  text-[42px] leading-[0.9] lg:text-[90px] lg:mt-[200px] mt-10 mb-10 "
                        >
                            Tierra <br /> Productividad <br />
                            <span className="text-new-blue"> Sustentable </span>
                        </motion.h1>

                        <motion.h2
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="px-12 mb-4 max-w-xl mt-5 mx-auto text-black/70 font-sans font-medium text-new-green text-[15px] uppercase"
                        >
                            Consultora/Asesoría Ambiental y en Seguridad e Higiene
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="px-12 mb-12 max-w-lg mx-auto text-black/70 font-sans font-normal "
                        >
                            Adquirí un asesoramiento integral en materia de medioambiente y
                            seguridad e higiene, para <b>empresas y emprendedores</b>.
                        </motion.p>
                        {/* <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                {" "}
                My Portfolio
              </a>
            </motion.div> */}
                        {/* socials */}
                        {/* <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div> */}
                    </div>
                    {/* image
        <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
        >
            <img src={Image} alt="" />
          </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
