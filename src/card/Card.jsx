import React, { useState } from "react";
import { nosotros } from "./helpers/nosotros";

const indexMax = nosotros.length - 1;

const Card = () => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    index < indexMax ? setIndex(index + 1) : setIndex(0);
  };

  console.log("name:", nosotros[index].image);

  return (
    <div>
      <h1>Tarjeta</h1>
      <h3>Nombre: {nosotros[index].name} </h3>
      <h3>Edad:{nosotros[index].age}</h3>
      <img src={nosotros[index].image} alt="" />
      <br />
      <button onClick={siguiente}>Mostrar Siguiente</button>
    </div>
  );
};

export { Card };
