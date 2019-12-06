import React from "react";

import logo from "../../assets/img/logo.png";

import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <h3>
        UNIVERSIDADE FEDERAL DO CEARÁ - CAMPUS QUIXADÁ
        <br />
        <br />
        Sistemas de Informação
      </h3>
      <p>
        Camilo
        <br />
        <br />
        Fabiane
        <br />
        <br />
        Fernanda
        <br />
        <br />
        Leonardo Lima
        <br />
        <br />
        Victor Lourenço
      </p>
    </footer>
  );
}
