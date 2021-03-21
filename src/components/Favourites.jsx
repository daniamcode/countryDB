import React from "react";
import { useSelector } from "react-redux";
import "./Favourites.css";

const Favourites = () => {
  const favourites = useSelector(
    (state) => state.favouritesReducer?.favourites
  );

  return (
    <main className="favourites__main">
      {favourites?.map((favourite) => {
        return (
          <section className="box" key={favourite.character.id}>
            <div>
              <img
                className="flag"
                src={favourite.character.image}
                alt={favourite.character.name}
              />
            </div>
            <div className="text">
              <div>{`${favourite.character.name} (${favourite.character.species})`}</div>
              <div>{`Gender: ${favourite.character.gender}`}</div>
              <div>{`id: ${favourite.character.id}`}</div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Favourites;
