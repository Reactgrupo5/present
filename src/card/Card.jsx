import React, { useState } from "react";
import { nosotros } from "./helpers/nosotros";
import styles from "./css/card.css";

const indexMax = nosotros.length - 1;

const Card = () => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    index < indexMax ? setIndex(index + 1) : setIndex(0);
  };

  console.log("name:", nosotros[index].image);

  return (
    <div id="card">
      <h1>PRESENTACION GRUPO 5 de la COMISION 22805</h1>
      <div id="personal">
        <div id="data">
          <h2>Tarjeta Personal</h2>
          <h3>Nombre: {nosotros[index].name} </h3>
          <h3>Edad:{nosotros[index].age}</h3>
        </div>
        <div id="image">
          <img src={nosotros[index].image} alt="" id="img" />
        </div>
      </div>

      <br />
      <button onClick={siguiente}>Mostrar Siguiente</button>
    </div>
  );
};

export { Card };
