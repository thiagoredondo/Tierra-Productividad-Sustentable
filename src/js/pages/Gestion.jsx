import React, { Component } from "react";
import PortfolioImg3 from "../../media/portfolio-img3.jpg";
import PortfolioImg4 from "../../media/portfolio-img4.jpg";
import { animateScroll as scroll } from "react-scroll";
import BackToHome from "../components/Button/BackToHome";

class GestionAmbiental extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <section className="bg-gray-100 text-black/90 px-[12%] py-32 mt-12 ">
          <div className="container lg:mx-auto grid grid-cols-1 items-center justify-center md:justify-between">
            <div className="lg:pr-28">
              <h2 className="text-4xl font-bold mb-5 border-b-[5px] lg:w-[735px] border-green-600 pb-2">
                Asesoramiento, Consultoría y Gestión Ambiental
              </h2>

              <p className="pb-5">
                Ofrecemos un servicio general e integral del proceso productivo,
                y también uno enfocado en la resolución de situaciones y o
                gestiones particulares.
              </p>
              <p className="pb-5">
                Realizamos elaboración de informes para tramitación de
                expedientes tanto en organismos municipales como en ADA,
                Ministerio de Ambiente de Provincia De Buenos Aires (OPDS),
                APrA, INA y ACUMAR.
              </p>

              <p>
                Dentro de las situaciones/gestiones específicas, pueden
                destacarse las más habituales como:
              </p>

              <p>
                <ul class="list-disc ml-2  ">
                  <li>
                    Evaluación de Nivel de Complejidad Ambiental tramitaciones
                    de obtención/Renovación de Certificados de Aptitud Ambiental
                    (CAA), o de tramitación en Municipio correspondiente.
                  </li>
                  <li>
                    Estudios de factibilidad, estudios de evaluación de riesgos
                    e impacto ambiental.
                  </li>
                  <li>
                    Estudios de diagnóstico ambiental, de línea de base, de
                    diseño de sistemas y planes de gestión ambiental.
                  </li>
                  <li> Auditorías Ambientales y descargo ante Actas.</li>
                  <li>
                    Asesoramiento en situaciones ambientales en las que se
                    involucre la participación ciudadana.
                  </li>
                  <li>
                    Evaluación en caracterización ambiental de sitios
                    contaminados, asesoramiento en recomposición, saneamiento y
                    remediación.
                  </li>
                  <li>Diseño de muestreo y planes de sondeos y monitoreos.</li>
                  <li>
                    Tratamiento de residuos sólidos urbanos/especiales o
                    peligrosos/patogénicos, tratamiento de efluentes y de
                    emisiones gaseosas.
                  </li>
                  <li>
                    Diseño e implementación de técnicas de compostaje, de
                    landfarming, y de técnicas en agroecología.
                  </li>
                  <li>
                    Asesoramiento en gestión y organización empresarial acorde a
                    Norma 14001 en evaluación y desarrollo de Sistemas de
                    Gestión Ambiental.
                  </li>
                  <li>
                    Evaluación, diagnóstico y planes de responsabilidad
                    ambiental social y empresarial.
                  </li>
                  <li>
                    Estudios de huella de carbono y huella hídrica, de
                    eficiencia energética y de energías renovables, de análisis
                    de ciclo de vida, de implementación o mejoría en enfoque de
                    5R, química verde y economía circular.{" "}
                  </li>
                </ul>
              </p>
            </div>

            <div className="about-img grid md:grid-cols-2 lg:space-x-5 lg:mt-14">
              <img
                src={PortfolioImg3}
                alt="coding illustration"
                className="lgw-[80%] md:ml-auto mt-10 lg:mt-0"
              />
              <img
                src={PortfolioImg4}
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

export default GestionAmbiental;
