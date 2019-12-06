import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import cart from "../../assets/img/shopping-cart.png";

import "./style.css";

export default function Header({ history }) {
  const [isLogged, setLogged] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("username"));

    if (name) {
      setLogged(true);
    }
  }, [name]);

  function logout() {
    localStorage.clear();
  }
  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="navbar-container">
        <ul className="navbar">
          <li>
            <Link to="/rooms">QUARTOS</Link>
          </li>
          <li>
            <Link to="/restaurants">RESTAURANTES</Link>
          </li>
          <li>
            <Link to="/contact">CONTATO</Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cart} alt="" id="cart" />
              CARRINHO
            </Link>
          </li>
          {isLogged ? (
            <>
              <li className="user">{name}</li>
              <li className="user">
                <a
                  href="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  DESLOGAR
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
