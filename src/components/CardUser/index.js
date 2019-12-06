import React from "react";
import "./style.css";
import img from "../../assets/img/Imagem 5.png";

const CardUser = () => (
  <div className="rowUser">
    <div className="imgUser">
      <img src={img} alt="" className="userImg" />
    </div>
    <div className="columnUser">
      <h3>Nome do usuario</h3>
      <button className="btn">RESERVAR</button>
      <button className="btn">FECHAR CONTA</button>
    </div>
  </div>
);

export default CardUser;
