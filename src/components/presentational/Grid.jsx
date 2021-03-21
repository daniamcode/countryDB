import React from "react";
import '../styles/Grid.css'


const Grid = ({item, handleFavourites}) => {
  return (
    <section className="box" key={item.id}>
      <div className="image-container">
        <img className="flag" src={item.image} alt={item.name} />
        <div onClick={handleFavourites} className="like-icon"></div>
      </div>
      <div className="text">
        <div>{`${item.name} (${item.species})`}</div>
        <div>{`Gender: ${item.gender}`}</div>
        <div>{`id: ${item.id}`}</div>
      </div>
    </section>
  );
};

export default Grid;
