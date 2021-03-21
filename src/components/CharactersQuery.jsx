import React from "react";
import './CharactersQuery.css'

const CharactersQuery = ( {loading, error, data, idSmaller, idGreater} ) => {
  

  const handleFavourites = () => {
    console.log('test')
  }

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;
  return data.characters.results.map((character) => {
    return (
      <>
      {
      parseInt(character.id) < idSmaller && 
      parseInt(character.id) > idGreater &&
      (
      <main className="box" key={character.id}>
        <section>
          <img onClick={handleFavourites} className="flag" src={character.image} alt={character.name} />
        </section>
        <section className="text">
          <div>{`${character.name} (${character.species})`}</div>
          <div>{`Gender: ${character.gender}`}</div>
          <div>{`id: ${character.id}`}</div>
        </section>
      </main>)}
      </>
    );
  });
};

export default CharactersQuery;
