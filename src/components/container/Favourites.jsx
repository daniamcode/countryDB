import React from "react";
import { useSelector } from "react-redux";
import "../styles/Favourites.css";
import Grid from '../presentational/Grid'

const Favourites = () => {
  const favourites = useSelector(
    (state) => state.favouritesReducer?.favourites
  );

  return (
    <main className="favourites__main">
      {favourites?.map((favourite) => {
        return (
          <Grid item={favourite.character}/>
        );
      })}
    </main>
  );
};

export default Favourites;
