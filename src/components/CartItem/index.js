import React from "react";
import img from "../../assets/img/Imagem 5.png";
import remove from "../../assets/img/remove.svg";
import "./style.css";
export default function CartItem() {
  return (
    <div className="columnCart">
      <div className="rowCart">
        <div className="cartImg">
          <img src={img} alt="" className="imgCart" />
        </div>
        <div className="cancel">
          <img src={remove} alt="" className="imgCancel" />
          <p className="pCancel">
            CANCELAR <br />
            PEDIDO
          </p>
        </div>
      </div>
      <h3>NOME DA COMIDA</h3>
      <h3>VALOR R$</h3>
    </div>
  );
}
