import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Favourites.css";
import Grid from '../presentational/Grid';
import { deleteFavourite } from "../../redux/actions/favouritesActions";


const Favourites = () => {
  const favourites = useSelector(
    (state) => state.favouritesReducer?.favourites
  );
  let dispatch = useDispatch();
  console.log(favourites)
  

  return (
    <>
    <h1 className="favourites__title">{`Showing ${favourites.length} results`}</h1>
    <main className="favourites__main">
      {favourites?.map((favourite) => {
        const handleDeleteFavourite = (event) => {
          event.preventDefault();
          dispatch(deleteFavourite(favourite.character.id));
        };
        return (
          <Grid item={favourite.character} handleFavourites={handleDeleteFavourite}/>
        );
      })}
    </main>
    </>
  );
};

export default Favourites;
