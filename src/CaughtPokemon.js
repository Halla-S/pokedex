import React, { useState } from "react";
import "./App.css";


const CaughtPokemon = (props) => {
  const names = ["Lucario", "Sylveon", "Pikachu", "Eevee", "Charizad"];
  let oneName = names[Math.floor(Math.random() * names.length)];
  console.log(oneName);
  const [caught, setCaught] = useState([]);
  const clickHandler = () => setCaught((caught) => caught.concat(oneName));
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>

      <p>
        Caught {caught.length} on {props.date}
      </p>
      <ul>
        {caught.map((item,index) =><li key={index}>{`${item} `}</li>)}
      </ul>
    </div>
  );
};
export default CaughtPokemon;
