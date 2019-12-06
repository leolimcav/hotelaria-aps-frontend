import React, { useState, useEffect } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Card from "../../components/Card/index";

import thumb from "../../assets/img/restaurante.png";
import api from "../../services/api";

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/restaurants");

      setRestaurants(response.data);
    }
    fetchData();
  }, []);

  function handleClick(id) {
    localStorage.setItem("rest_id", id);
  }

  return (
    <>
      <Header />
      <main>
        <ul>
          {restaurants.map(item => (
            <li key={item.id}>
              <Card
                title={item.name}
                thumb={thumb}
                text="VER PRATOS"
                onclick={() => {
                  handleClick(item.id);
                }}
                link={`restaurant`}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
