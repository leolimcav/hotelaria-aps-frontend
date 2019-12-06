import React, { useState } from "react";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import "./style.css";
import api from "../../services/api";

export default function Register({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [data_nascimento, setData] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/users", {
      name: nome,
      email: email,
      password: senha,
      rg: rg,
      cpf: cpf,
      birth_date: data_nascimento
    });

    const usuario = response.data;

    localStorage.setItem("user_id", usuario.id);
    localStorage.setItem("username", usuario.name);
    localStorage.setItem("email", usuario.email);

    history.push("/");
  }
  return (
    <>
      <Header />
      <main>
        <form>
          <label>
            Nome
            <input
              type="text"
              name="name"
              onChange={e => {
                setNome(e.target.value);
              }}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              name="password"
              onChange={e => {
                setSenha(e.target.value);
              }}
            />
          </label>
          <label>
            RG
            <input
              type="text"
              name="rg"
              onChange={e => {
                setRg(e.target.value);
              }}
            />
          </label>
          <label>
            CPF
            <input
              type="text"
              name="cpf"
              onChange={e => {
                setCpf(e.target.value);
              }}
            />
          </label>
          <label>
            Data de Nascimento
            <input
              type="date"
              name="date"
              onChange={e => {
                setData(e.target.value);
              }}
            />
          </label>
          <button
            type="submit"
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Registrar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
