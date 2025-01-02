import React from "react";
import GestionAmbiental from "./GestionAmbiental";
import SeguridadHigiene from "./SeguridadHigiene";
import Capacitaciones from "./Capacitaciones";
import Agenda from "./Agenda";

const Servicios = () => {
  return (
    <>
      <GestionAmbiental />
      <SeguridadHigiene />
      <Capacitaciones />
      <Agenda />
    </>
  );
};

export default Servicios;
