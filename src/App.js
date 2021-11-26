//exercise 1
import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  const logWhenClicked = () => {
    console.log("hey!");
  };
  return (
    <header>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </header>
  );
};

export default App;
