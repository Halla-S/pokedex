//exercise 1
import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  return (
    <header>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </header>
  );
};

export default App;
