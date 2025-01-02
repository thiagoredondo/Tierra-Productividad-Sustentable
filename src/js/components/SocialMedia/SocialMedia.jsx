import React from "react";
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../../variants";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <section className="bg-blue-200 mt-20 py-10 " id="contact">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            variants={fadeIn("up", 0.7)}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-black/90 flex text-[50px] gap-x-12 max-w-max mx-auto lg:mx-auto "
          >
            <Link
              to="mailto:tierra.productividadsustentable@gmail.com"
              className="text-black/70 hover:text-blue-400"
            >
              <FaEnvelope />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=5492915162375&text=Buenas,%20me%20gustaría%20asesorarme%20sobre%20Tierra%20Productividad%20Sustentable%20"
              className="text-black/70 hover:text-blue-400"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="https://www.instagram.com/tierraproductividadsustentable/"
              className="text-black/70 hover:text-blue-400"
            >
              <FaInstagram />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
