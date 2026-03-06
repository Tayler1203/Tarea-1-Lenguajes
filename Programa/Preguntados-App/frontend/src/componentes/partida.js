import React, { useState, useEffect, useRef } from "react";

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
    return <h2>Cargando preguntas...</h2>;
  }

  const preguntaActual = preguntas[indice];

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

      // Capturar valor ANTES de cualquier setState
      const finalScore = puntajeRef.current;
      const estado = finalScore >= 6 ? "Ganó" : "Perdió";

      setPuntajeFinal(finalScore);
      setTerminado(true);

      const resultado = {
        nombre: nombre,
        puntaje: finalScore,
        estado: estado,
        fecha: new Date().toLocaleDateString()
      };

      console.log("Enviado al servidor:", resultado);

      fetch("http://localhost:3001/historial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resultado)
      });
    }
  }

  if (terminado) {
    const estado = puntajeFinal >= 6 ? "Ganó" : "Perdió";
    return (
      <div>
        <h2>Juego terminado</h2>
        <p>Jugador: {nombre}</p>
        <p>Puntaje: {puntajeFinal} / {preguntas.length}</p>
        <p>Estado: {estado}</p>
        <button onClick={volverMenu}>Volver al menú</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Jugador: {nombre}</h2>
      <p>Puntaje actual: {puntaje}</p>
      <h3>{preguntaActual.pregunta}</h3>
      {preguntaActual.opciones.map((opcion, i) => (
        <button key={i} onClick={() => responder(opcion)}>
          {opcion}
        </button>
      ))}
      <p>Pregunta {indice + 1} de {preguntas.length}</p>
    </div>
  );
}

export default Partida;