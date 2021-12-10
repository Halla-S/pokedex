import React from "react";

import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMoves";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  function logWhenClicked() {
    console.log("Clicked!");
  }

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
    </div>
  );
}

export default App;
