import React, { useState } from "react";
import SolicitarNombre from "./componentes/solicitarNombre";
import Partida from "./componentes/partida";
import Historial from "./componentes/historial";

/*
Nombre: App

Entradas:
- No recibe parámetros directos.

Salidas:
- Muestra las diferentes pantallas de la aplicación (menú, juego, nombre e historial).

Restricciones:
- Los componentes SolicitarNombre, Partida y Historial deben existir.

Descripción:
Este componente controla la navegación principal de la aplicación.
Dependiendo del estado "pantalla", muestra el menú principal,
la pantalla para ingresar el nombre del jugador, la partida
o el historial de juegos. También guarda el nombre del jugador
para usarlo durante la partida.
*/

function App() {
  const [pantalla, setPantalla] = useState("menu");
  const [nombre, setNombre] = useState("");

  if (pantalla === "menu") {
    return (
      <div className="card">
        <p className="subtitle">Juego de trivia</p>
        <h1>Preguntados</h1>
        <p>Responde 10 preguntas y demuestra cuánto sabes ¡Acierta 6 o más para ganar!</p>
        <div className="menu-buttons">
          <button className="btn-primary" onClick={() => setPantalla("nombre")}>
            Jugar
          </button>
          <button className="btn-secondary" onClick={() => setPantalla("historial")}>
            Ver Historial
          </button>
        </div>
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
        volverMenu={() => setPantalla("menu")}
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