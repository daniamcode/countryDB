import React from "react";
import "./styles/Search.css";

function Search({ setIdSmaller, setIdGreater }) {
  const handleIdSmaller = (event) => {
    setIdSmaller(event.target.value);
  };
  const handleIdGreater = (event) => {
    setIdGreater(event.target.value);
  };

  return (
    <main className="search">
      <form onChange={handleIdSmaller}>
        <label>{'Id smaller than: '}</label>
        <input></input>
      </form>
      <form onChange={handleIdGreater}>
        <label>{'Id greater than: '}</label>
        <input></input>
      </form>
    </main>
  );
}

export default Search;
