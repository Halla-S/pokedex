import React,{ useState } from "react";
console.log(useState);
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
          onClick={props.handleClick}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt=""
        ></img>
      </div>
    </header>
  );
};
export default Logo;


