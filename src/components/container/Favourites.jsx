import React from "react";
import { useDispatch } from "react-redux";
import "../styles/Favourites.css";
import Grid from "../presentational/Grid";
import { deleteFavourite } from "../../redux/actions/favouritesActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favourites = ({ cache, favs }) => {
  toast.configure();

  let dispatch = useDispatch();

  return (
    <>
      <h1 className="favourites__title">{`Showing ${
        cache?.data?.data?.ROOT_QUERY?.favs?.favourites?.length | 0
      } results`}</h1>
      <main className="favourites__main">
        {cache?.data?.data?.ROOT_QUERY?.favs?.favourites?.map((favourite) => {
          const handleDeleteFavourite = (event) => {
            event.preventDefault();
            toast("Removed from favourites!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            dispatch(deleteFavourite(favourite.character.id));
            cache.modify({
              id: cache.identify(favs),
              fields: {
                favs(existingFavourites, { readField }) {
                  return existingFavourites.filter(
                    (fav) => favourite.character.id !== readField("id", fav)
                  );
                },
              },
            });
          };
          return (
            <Grid
              key={favourite.character.id}
              item={favourite.character}
              handleFavourites={handleDeleteFavourite}
            />
          );
        })}
      </main>
    </>
  );
};

export default Favourites;
