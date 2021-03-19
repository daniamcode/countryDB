import React from "react";
import "./Search.css";

function Search({ setAreaSmaller, setAreaGreater }) {
  const handleAreaSmaller = (event) => {
    setAreaSmaller(event.target.value);
  };
  const handleAreaGreater = (event) => {
    setAreaGreater(event.target.value);
  };

  return (
    <main className="search">
      <form onChange={handleAreaSmaller}>
        <label>{'Area smaller than: '}</label>
        <input></input>
      </form>
      <form onChange={handleAreaGreater}>
        <label>{'Area greater than: '}</label>
        <input></input>
      </form>
    </main>
  );
}

export default Search;
