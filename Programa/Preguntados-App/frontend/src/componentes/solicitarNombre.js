import React, { useState } from "react";

/*
Nombre: SolicitarNombre

Entradas:
- iniciar: función que inicia la partida con el nombre del jugador.
- volverMenu: función para regresar al menú principal.

Salidas:
- Muestra un formulario para que el jugador ingrese su nombre.

Restricciones:
- El nombre no puede estar vacío.

Descripción:
Este componente solicita al usuario ingresar su nombre antes de comenzar
la partida. Cuando el jugador escribe su nombre y presiona el botón
"Comenzar" o la tecla Enter, se inicia el juego. También incluye un
botón para regresar al menú principal.
*/

function SolicitarNombre({ iniciar, volverMenu }) {
  const [nombre, setNombre] = useState("");

  function enviar() {
    if (nombre.trim() !== "") {
      iniciar(nombre.trim());
    }
  }

  function handleKey(e) {
    if (e.key === "Enter") enviar();
  }

  return (
    <div className="card">
      <p className="subtitle">Nueva partida</p>
      <h2>Pon tu nombre</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        onKeyDown={handleKey}
        autoFocus
      />
      <button className="btn-primary" onClick={enviar}>
        Comenzar
      </button>
      <button className="btn-secondary" onClick={volverMenu}>
        Volver al menú
      </button>
    </div>
  );
}

export default SolicitarNombre;