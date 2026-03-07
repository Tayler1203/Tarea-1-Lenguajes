import React, { useState, useEffect, useRef } from "react";
/*
Nombre: Partida

Entradas:
- nombre: nombre del jugador.
- volverMenu: función para regresar al menú principal.

Salidas:
- Muestra las preguntas del juego, permite responderlas y muestra el puntaje final.

Restricciones:
- El backend debe estar disponible en http://localhost:3001.

Descripción:
Este componente controla el desarrollo de una partida del juego.
Carga las preguntas desde el backend, muestra cada pregunta con sus
opciones y actualiza el puntaje según las respuestas correctas.
Al finalizar, muestra el resultado del jugador y guarda el resultado
en el historial.
*/

function Partida({ nombre, volverMenu }) {
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [puntajeFinal, setPuntajeFinal] = useState(0);

  const puntajeRef = useRef(0);

  useEffect(() => {
    fetch("http://localhost:3001/preguntas")
      .then(res => res.json())
      .then(data => setPreguntas(data));
  }, []);

  if (preguntas.length === 0) {
    return (
      <div className="card">
        <p className="subtitle">Cargando...</p>
        <h2>Preparando preguntas</h2>
      </div>
    );
  }

  const preguntaActual = preguntas[indice];
  const progreso = ((indice) / preguntas.length) * 100;

  function responder(opcion) {
    const indiceElegido = preguntaActual.opciones.indexOf(opcion);

    if (indiceElegido === preguntaActual.correcta) {
      puntajeRef.current += 1;
      setPuntaje(puntajeRef.current);
    }

    const siguiente = indice + 1;

    if (siguiente < preguntas.length) {
      setIndice(siguiente);
    } else {
      const finalScore = puntajeRef.current;
      const estado = finalScore >= 6 ? "Ganó" : "Perdió";

      setPuntajeFinal(finalScore);
      setTerminado(true);

      const resultado = {
        nombre,
        puntaje: finalScore,
        estado,
        fecha: new Date().toLocaleDateString()
      };

      fetch("http://localhost:3001/historial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resultado)
      });
    }
  }

  if (terminado) {
    const gano = puntajeFinal >= 6;
    return (
      <div className="card">
        <p className="subtitle">Resultado final</p>
        <div className="result-number">{puntajeFinal}<span style={{ fontSize: "1.5rem", color: "var(--muted)" }}>/10</span></div>
        <p className="result-label">aciertos</p>
        <p>Jugador: <strong style={{ color: "var(--text)" }}>{nombre}</strong></p>
        <p>Estado: <span className={gano ? "estado-gano" : "estado-perdio"}>{gano ? "Ganó 🎉" : "Perdió"}</span></p>
        <hr className="divider" />
        <button className="btn-primary" onClick={volverMenu}>
          Volver al menú
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <p className="subtitle">{nombre}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progreso}%` }} />
      </div>
      <div className="score-badge">Puntaje: {puntaje}</div>
      <h3>{preguntaActual.pregunta}</h3>
      {preguntaActual.opciones.map((opcion, i) => (
        <button key={i} className="btn-option" onClick={() => responder(opcion)}>
          {opcion}
        </button>
      ))}
      <p style={{ marginTop: "1rem", textAlign: "right" }}>
        Pregunta {indice + 1} de {preguntas.length}
      </p>
    </div>
  );
}

export default Partida;