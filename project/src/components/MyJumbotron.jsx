import React from "react";

import "../styles/Jumbotron.css";
import { Link } from "react-router-dom";
const MyJumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <p className="kampusler">Hoşgeldin!</p>
        <p className="campus-connect">CampusConnect ?</p>
        <p className="kampusler">Kampüsler arası connect.</p>
        <Link to="/signup">Aramıza Katıl</Link>
      </div>
    </div>
  );
};

export default MyJumbotron;
