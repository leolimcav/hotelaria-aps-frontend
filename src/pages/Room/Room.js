import React, { useState, useEffect } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./style.css";
import api from "../../services/api";

export default function Room({ history }) {
  const [room, setRoom] = useState({});
  const [booking_date, setDate] = useState("");
  const [services, setServices] = useState([]);
  useEffect(() => {
    setServices([]);
    async function fetchData() {
      const room_id = localStorage.getItem("room_id");
      const response = await api.get(`/rooms/${room_id}`);
      setRoom(response.data);
    }
    fetchData();
  }, []);

  function handleClick(value) {
    if (services.length === 0) {
      setServices(value);
    }
    setServices([...services, value]);
    console.log(services);
  }

  async function handleSubmit() {
    const room_id = localStorage.getItem("room_id");
    await api.post(`/clients/${1}/bookings/${room_id}`, {
      booking_date
    });
    await api.post(`/clients/${1}/services`, {
      services
    });
    history.push("/");
  }
  return (
    <>
      <Header />
      <main id="mainRoom">
        <img
          src={`http://localhost:3333/files/${room.photo}`}
          alt="room_photo"
        />
        <div class="columnRoom">
          <span className="roomType">{room.type}</span>
          <span className="roomValue">R$ {room.value}</span>
          <div className="rowRoom">
            Data:{" "}
            <input
              type="date"
              name="booking_date"
              id="date"
              onChange={e => {
                setDate(e.target.value);
              }}
            />
          </div>
          <p>Serviços</p>
          <div className="rowRoom">
            <input
              type="checkbox"
              value={1}
              onClick={e => {
                handleClick(e.target.value);
              }}
            />{" "}
            <p> Limpeza Diária - R$ 30,00</p>
          </div>
          <div className="rowRoom">
            <input
              type="checkbox"
              value={2}
              onClick={e => {
                handleClick(e.target.value);
              }}
            />{" "}
            <p>Café da Manhã - R$ 25,00</p>
          </div>
          <div className="rowRoom">
            <input
              type="checkbox"
              value={3}
              onClick={e => {
                handleClick(e.target.value);
              }}
            />{" "}
            <p>Frigobar - R$ 35,00</p>
          </div>
          <div className="rowRoom">
            <button className="btn cinza">CANCELAR</button>
            <button
              className="btn"
              onClick={() => {
                handleSubmit();
              }}
            >
              RESERVAR
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
