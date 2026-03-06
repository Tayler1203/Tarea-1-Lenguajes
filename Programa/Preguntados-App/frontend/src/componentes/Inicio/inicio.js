import { useState } from "react";

function Inicio({ iniciarJuego }) {

  const [nombre, setNombre] = useState("");

  const manejarInicio = () => {
    if (nombre.trim() !== "") {
      iniciarJuego(nombre);
    }
  };

  return (
    <div>
      <h2>Ingrese su nombre</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={manejarInicio}>
        Iniciar Juego
      </button>

    </div>
  );
}

export default Inicio;