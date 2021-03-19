import React from "react";
import './CharactersQuery.css'

const CharactersQuery = ( {loading, error, data, areaSmaller, areaGreater} ) => {
  
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;
  return data.characters.results.map((character) => {
    return (
      <>
      {
      parseInt(character.id) < areaSmaller && 
      parseInt(character.id) > areaGreater &&
      (
      <main className="box" key={character.id}>
        <section>
          <img className="flag" src={character.image} alt={character.name} />
        </section>
        <section className="text">
          <div>{`${character.name} (${character.species})`}</div>
          <div>{`Population: ${character.gender}`}</div>
          <div>{`Area: ${character.id} m²`}</div>
        </section>
      </main>)}
      </>
    );
  });
};

export default CharactersQuery;
