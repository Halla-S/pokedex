import React from "react";
const Logo = (props) => {
  console.log(props);
  //const appName = "Halla's Pokedex";
  return (
    <header>
      <div>
        <h1>Welcome to {props.appName}</h1>
      </div>
      <div>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt=""
        ></img>
      </div>
    </header>
  );
};
export default Logo;


