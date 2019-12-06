import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card({ title, thumb, link, value, text, onclick }) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={thumb} alt="" className="imgCard" />
      </div>
      {value === undefined ? (
        <p className="p">{title}</p>
      ) : (
        <p className="p">{`${title}, ${value}`}</p>
      )}
      <button className="btn" onClick={onclick}>
        <Link to={`/${link}`}>{text}</Link>
      </button>
    </div>
  );
}
