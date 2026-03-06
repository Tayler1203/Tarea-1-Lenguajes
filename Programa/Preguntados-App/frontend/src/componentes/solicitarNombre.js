import React, { useState } from "react";

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