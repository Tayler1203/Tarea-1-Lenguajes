import React, { useState } from "react";
import SolicitarNombre from "./componentes/solicitarNombre";
import Partida from "./componentes/partida";
import Historial from "./componentes/historial";

function App() {

  const [pantalla, setPantalla] = useState("menu");
  const [nombre, setNombre] = useState("");

  if (pantalla === "menu") {
    return (
      <div>
        <h1>Preguntados</h1>

        <button onClick={() => setPantalla("nombre")}>
          Jugar
        </button>

        <button onClick={() => setPantalla("historial")}>
          Ver Historial
        </button>
      </div>
    );
  }

  if (pantalla === "nombre") {
    return (
      <SolicitarNombre
        iniciar={(n) => {
          setNombre(n);
          setPantalla("juego");
        }}
      />
    );
  }

  if (pantalla === "juego") {
    return (
      <Partida
        nombre={nombre}
        volverMenu={() => setPantalla("menu")}
      />
    );
  }

  if (pantalla === "historial") {
    return (
      <Historial volverMenu={() => setPantalla("menu")} />
    );
  }
}

export default App;