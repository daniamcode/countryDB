import React from "react";
import "../styles/Search.css";

function Search({ setGender, setStatus, setSpecies }) {
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleSpecies = (event) => {
    setSpecies(event.target.value);
  };

  return (
    <main className="search">
      <form onChange={handleGender}>
        <label>{'Gender: '}</label>
        <select>
          <option></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
        </select>
      </form>
      <form onChange={handleStatus}>
        <label>{'Status: '}</label>
        <select>
          <option></option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
      </form>
      <form onChange={handleSpecies}>
        <label>{'Species: '}</label>
        <select>
          <option></option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </form>
    </main>
  );
}

export default Search;
