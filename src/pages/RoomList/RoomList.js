import React, { useState, useEffect } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Card from "../../components/Card/index";

import api from "../../services/api";

import "./style.css";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/rooms/available");
      setRooms(res.data);
    }
    fetchData();
  }, []);

  function handleClick(id) {
    localStorage.setItem("room_id", id);
  }
  return (
    <>
      <Header />
      <main>
        <ul>
          {rooms.map(room => (
            <li key={room.id}>
              <Card
                title={room.type}
                value={room.value}
                thumb={`http://localhost:3333/files/${room.photo}`}
                text="RESERVAR"
                onclick={() => {
                  handleClick(room.id);
                }}
                link={`room`}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
