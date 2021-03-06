import React from "react";
import { useDispatch } from "react-redux";
import { addFavourite } from "../../redux/actions/favouritesActions";
import Grid from "./Grid";
import "../styles/List.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = ({ loading, error, data }) => {
  toast.configure();
  let dispatch = useDispatch();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <main className="list">
      {data?.characters?.results?.map((character) => {
        const handleAddFavourite = (event) => {
          event.preventDefault();
          toast("Added to favourites!", {position: toast.POSITION.BOTTOM_RIGHT});
          dispatch(addFavourite(character));
        };
        return (
          <>
            <Grid key={character.id} item={character} handleFavourites={handleAddFavourite} />
          </>
        );
      })}
    </main>
  );
};

export default List;
