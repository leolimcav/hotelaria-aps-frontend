import React from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Card from "../../components/Card/index";

import image from "../../assets/img/header.png";
import logo from "../../assets/img/logo.png";
import imgRoom from "../../assets/img/quarto.png";
import imgRest from "../../assets/img/restaurante.png";
import imgHotel from "../../assets/img/Imagem 5.png";

import "./style.css";

export default function Home() {
  return (
    <>
      <main id="main">
        <Header />
        <img src={image} alt="img" id="image" />
        <h2 id="h2">VENHA CONHECER O</h2>
        <img src={logo} alt="img" id="logocorpo" />
        <div className="rowHome">
          <Card
            title="Hotel"
            thumb={imgHotel}
            link="contact"
            text="VENHA CONFERIR"
          />
          <Card
            title="Restaurantes"
            thumb={imgRest}
            link="restaurants"
            text="VENHA CONFERIR"
          />
          <Card
            title="Quartos"
            thumb={imgRoom}
            link="rooms"
            text="VENHA CONFERIR"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
