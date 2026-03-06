import React, { useState } from "react";

function SolicitarNombre({ iniciar }) {

  const [nombre, setNombre] = useState("");

  function enviar() {
    if (nombre.trim() !== "") {
      iniciar(nombre);
    }
  }

  return (
    <div>

      <h2>Ingrese su nombre</h2>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={enviar}>
        Comenzar
      </button>

    </div>
  );
}

export default SolicitarNombre;