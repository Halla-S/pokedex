import React from "react";
import "./App.css";
const BestPokemon = (props) => {
  console.log(props);
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        <ul className="list">
          {props.abilities.map((ability) => (
            <li>{ability}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
export default BestPokemon;
