import React, { Component } from "react";
import PortfolioImg5 from "../../media/portfolio-img5.jpg";
import PortfolioImg6 from "../../media/portfolio-img6.jpg";
import { animateScroll as scroll } from "react-scroll";
import BackToHome from "../components/Button/BackToHome";

class SeguridadHigiene extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <section className="bg-gray-100 text-black/90 px-[12%] py-32 mt-12 ">
          <div className="container lg:mx-auto grid grid-cols-1 items-center justify-center md:justify-between">
            <div className="lg:pr-28">
              <h2 className="text-4xl font-bold mb-5 border-b-[5px] lg:w-[768px] border-blue-600 pb-2">
                Asesoramiento, Consultoría en Seguridad e Higiene
              </h2>
              <p>
                Realizamos diagnósticos e informes sobre la seguridad
                empresarial o sobre situaciones específicas, entre las cuales
                pueden destacarse las más habituales como:
              </p>

              <p>
                <ul class="list-disc ml-2 leading-1">
                  <li>
                    Evaluación de riesgos laborales en acuerdo a OSHAS 18001,
                    confección de matrices de riesgos.{" "}
                  </li>
                  <li>Asesoramiento en Ley 19.587 y Decreto 351/96.</li>
                  <li>Diseño y ejecución de planes de mejora continua.</li>
                  <li>
                    {" "}
                    Investigación y evaluación en prevención de accidentes.
                  </li>
                  <li>
                    Asesoramiento e implementación de sistemas de organización
                    empresarial para minimizar riesgos en el ámbito laboral.
                  </li>
                  <li>
                    Asesoramiento en gestión de normas ISO 9001 e ISO 45001 en
                    evaluación y desarrollo de Sistemas de Seguridad en el
                    Trabajo.
                  </li>
                  <li>
                    {" "}
                    Estudios de contaminación en ambiente laboral, Resolución
                    SRT 861/15.
                  </li>
                  <li>
                     Estudios de iluminación, Resolución SRT N° 84/12 e
                    iluminación cronobiológica.
                  </li>
                  <li>Estudios de ruido, Resolución SRT N° 85/12.</li>
                </ul>
              </p>
            </div>

            <div className="about-img grid md:grid-cols-2 lg:space-x-2 lg:mt-14">
              <img
                src={PortfolioImg5}
                alt="coding illustration"
                className="lgw-[80%] md:ml-auto mt-10 lg:mt-0"
              />
              <img
                src={PortfolioImg6}
                alt="coding illustration"
                className="lgw-[80%] md:ml-auto mt-10 lg:mt-0"
              />
            </div>
          </div>

          <BackToHome />
        </section>
      </div>
    );
  }
}

export default SeguridadHigiene;
