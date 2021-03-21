import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <section className="header">
      <p>CharactersDB</p>
      <div className="separator"></div>
      <Link className="header__link" to="/">
        <p>CHARACTERS</p>
      </Link>
      <Link className="header__link" to="/favourites">
        <p className="favourites__link">FAVOURITES</p>
      </Link>
    </section>
  );
};

export default Header;
