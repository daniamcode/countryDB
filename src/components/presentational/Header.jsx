import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <section className="header">
      <p>CharactersDB</p>
      <div className="separator"></div>
      <Link to="/">
        <p>CHARACTERS</p>
      </Link>
      <Link to="/favourites">
        <p className="favourites__link">FAVOURITES</p>
      </Link>
    </section>
  );
};

export default Header;
