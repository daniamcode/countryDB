import React from "react";
import '../styles/Grid.css'


const Grid = ({item, handleFavourites}) => {
  return (
    <section className="box" key={item.id}>
      <div>
        <img onClick={handleFavourites} className="flag" src={item.image} alt={item.name} />
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
