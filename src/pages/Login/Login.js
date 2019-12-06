import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./styles.css";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    const response = await api.post("/sessions", {
      email,
      password
    });

    const user = response.data;

    localStorage.setItem("user_id", user.id);
    localStorage.setItem("username", user.name);
    localStorage.setItem("role", user.role);

    history.push("/");
  }

  return (
    <>
      <Header />
      <main className="mainLogin">
        <div className="quadrado">
          <div className="rowLogin">
            E-mail
            <input
              type="email"
              name="email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="rowLogin">
            Senha
            <input
              type="password"
              name="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="rowLogin">
            <button className="btn cinza">
              <Link to="/register">Criar conta</Link>
            </button>
            <button
              className="btn"
              onClick={e => {
                handleSubmit(e);
              }}
            >
              Logar
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
