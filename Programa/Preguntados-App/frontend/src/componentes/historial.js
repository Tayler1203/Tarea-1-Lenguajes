import React, { useEffect, useState } from "react";

function Historial({ volverMenu }) {

  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/historial")
      .then(res => res.json())
      .then(data => setHistorial(data));
  }, []);

  return (
    <div>

      <h2>Historial de partidas</h2>

      {historial.map((p, i) => (
        <div key={i}>
          {p.nombre} - {p.puntaje} aciertos - {p.estado} - {p.fecha}
        </div>
      ))}

      <button onClick={volverMenu}>
        Volver al menú
      </button>

    </div>
  );
}

export default Historial;