import React from "react";
 const BestPokemon = (props) => {
  console.log(props);
   return (
     <div>
       <p>My favorite Pokemon is Squirtle</p>
       <ul>
         <ul>
           {props.abilities.map((ability) => (
             <li>{ability}</li>
           ))}
         </ul>
       </ul>
     </div>
   );
 };
 export default BestPokemon;