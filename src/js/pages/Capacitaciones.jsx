import React, { Component } from "react";
import PortfolioImg1 from "../../media/portfolio-img1.jpg";
import PortfolioImg2 from "../../media/portfolio-img2.jpg";
import { animateScroll as scroll } from "react-scroll";
import BackToHome from "../components/Button/BackToHome";

class Capacitaciones extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <section className="bg-gray-100 text-black/90 px-[12%] py-32 mt-12 ">
          <div className="container lg:mx-auto grid grid-cols-1 items-center justify-center md:justify-between">
            <div className="lg:pr-28">
              <h2 className="text-4xl font-bold mb-5 border-b-[5px] lg:w-[268px] border-blue-600 pb-2">
                Capacitaciones
              </h2>

              <p>
                <ul class="list-disc ml-2 leading-8">
                  <li>
                    Dictamos capacitaciones para empresas, a trabajadores y /o
                    directivos, en temáticas ambientales y de seguridad e
                    higiene en el ámbito laboral, con material de soporte,
                    dictados de forma presencial y/o remota.
                  </li>
                  <li>
                    Además de capacitaciones técnicas, brindamos servicios
                    complementarios de fortalecimiento del ámbito laboral,
                    orientado a empresas, llevado a cabo mediante reuniones,
                    entrevistas y/o exposiciones, para mejorar la comunicación,
                    exponer conflictos, ofrecer un espacio de debate y
                    reflexión, con el objetivo de mejorar el clima laboral,
                    fomentando las oportunidades de que l@s trabajadores se
                    sientan motivados en su labor diaria y orientado a generar
                    beneficios personales y colectivos necesarios para la
                    productividad. También se ofrece el servicio orientado a la
                    exposición y debate de los conflictos que surgen por la
                    falta de inclusión social y perspectiva de género en muchos
                    ámbitos laborales.
                  </li>
                </ul>
              </p>
            </div>

            <div className="about-img grid md:grid-cols-2 lg:space-x-5 lg:mt-14">
              <img
                src={PortfolioImg1}
                alt="coding illustration"
                className="lg:w-[80%] md:ml-auto mt-10 lg:mt-0"
              />
              <img
                src={PortfolioImg2}
                alt="coding illustration"
                className="lg:w-[80%] md:ml-auto mt-10 lg:mt-0"
              />
            </div>
          </div>
          <BackToHome />
        </section>
      </div>
    );
  }
}

export default Capacitaciones;
