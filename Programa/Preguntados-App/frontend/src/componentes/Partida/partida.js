import { useEffect, useState } from "react";
import { obtenerPreguntas } from "../../servicios/api";

function Partida({ jugador, finalizarJuego }) {

  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [aciertos, setAciertos] = useState(0);

  useEffect(() => {
    cargarPreguntas();
  }, []);

  const cargarPreguntas = async () => {
    const data = await obtenerPreguntas();
    setPreguntas(data);
  };

  const responder = (opcion) => {

    const preguntaActual = preguntas[indice];

    if (opcion === preguntaActual.correcta) {
      setAciertos(aciertos + 1);
    }

    const siguiente = indice + 1;

    if (siguiente < preguntas.length) {
      setIndice(siguiente);
    } else {
      finalizarJuego(aciertos + (opcion === preguntaActual.correcta ? 1 : 0));
    }

  };

  if (preguntas.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  const preguntaActual = preguntas[indice];

  return (
    <div>

      <h2>Jugador: {jugador}</h2>

      <h3>Pregunta {indice + 1} / 10</h3>

      <p>{preguntaActual.pregunta}</p>

      {preguntaActual.opciones.map((opcion, i) => (
        <div key={i}>
          <button onClick={() => responder(i)}>
            {opcion}
          </button>
        </div>
      ))}

    </div>
  );
}

export default Partida;