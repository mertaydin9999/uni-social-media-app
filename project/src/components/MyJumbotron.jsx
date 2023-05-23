import React from "react";

import "../styles/Jumbotron.css";
import { Link } from "react-router-dom";
const MyJumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <p className="kampusler">Hosgeldin!</p>
        <p className="campus-connect">CampusConnect ?</p>
        <p className="kampusler">Kampusler arasi connect.</p>
        <Link>Aramiza Katil</Link>
      </div>
    </div>
  );
};

export default MyJumbotron;
