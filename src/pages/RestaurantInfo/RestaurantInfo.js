import React from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

// import api from "../../services/api";

export default function RestaurantInfo() {
  // const [name, setName] = useState("");
  // const [dishes, setDishes] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     // const rest_id = localStorage.getItem("rest_id");
  //     // const response = await api.get(`/restaurants/${rest_id}`);
  //     // setName(response.data.name);
  //     // setDishes(response.data.dishes);
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <Header />
      {/* <main id="mainRoom">
        <img
          src={`http://localhost:3333/files/${room.photo}`}
          alt="room_photo"
        />
        <div class="columnRoom">
          <span className="roomType">{room.type}</span>
          <span className="roomValue">R$ {room.value}</span>
          <div className="row">
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
          <div className="row">
            <input
              type="checkbox"
              value={1}
              onClick={e => {
                handleClick(e.target.value);
              }}
            />{" "}
            <p> Limpeza Diária - R$ 30,00</p>
          </div>
          <div className="row">
            <input
              type="checkbox"
              value={2}
              onClick={e => {
                handleClick(e.target.value);
              }}
            />{" "}
            <p>Café da Manhã - R$ 25,00</p>
          </div>
          <div className="row">
            <input
              type="checkbox"
              value={3}
              onClick={e => {
                handleClick(e.target.value);
              }}
            />{" "}
            <p>Frigobar - R$ 35,00</p>
          </div>
          <div className="row">
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
      </main> */}
      <Footer />
    </>
  );
}
