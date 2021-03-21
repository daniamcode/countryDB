import React from "react";
import './CharactersQuery.css';
import { useDispatch } from "react-redux";
import {addFavourite} from '../redux/actions/favouritesActions';

const CharactersQuery = ( {loading, error, data, idSmaller, idGreater} ) => {
  let dispatch = useDispatch();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;
  return data.characters.results.map((character) => {
    const handleFavourites = (event) => {
      event.preventDefault();
      dispatch(addFavourite(character));
  
  
    }
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
