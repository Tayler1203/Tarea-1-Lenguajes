import React, { useEffect, useState } from "react";

function Historial({ volverMenu }) {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/historial")
      .then(res => res.json())
      .then(data => setHistorial(data));
  }, []);

  return (
    <div className="card">
      <p className="subtitle">Partidas jugadas</p>
      <h2>Historial</h2>

      {historial.length === 0 ? (
        <p>No hay partidas registradas aún.</p>
      ) : (
        <div className="historial-list">
          {[...historial].reverse().map((p, i) => (
            <div className="historial-row" key={i}>
              <div>
                <div className="historial-nombre">{p.nombre || "—"}</div>
                <div className="historial-meta">{p.fecha}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="historial-meta">{p.puntaje ?? "—"}/10</div>
                <div className={p.estado === "Ganó" ? "estado-gano" : "estado-perdio"} style={{ fontSize: "0.8rem" }}>
                  {p.estado || "—"}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="btn-secondary" onClick={volverMenu}>
        Volver al menú
      </button>
    </div>
  );
}

export default Historial;