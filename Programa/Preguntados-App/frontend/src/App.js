import { useState } from "react";
import Inicio from "./componentes/Inicio/inicio";
import Partida from "./componentes/Partida/partida";

function App() {

  const [jugador, setJugador] = useState(null);
  const [resultado, setResultado] = useState(null);

  const iniciarJuego = (nombre) => {
    setJugador(nombre);
  };

  const finalizarJuego = (aciertos) => {
    setResultado(aciertos);
  };

  if (!jugador) {
    return <Inicio iniciarJuego={iniciarJuego} />;
  }

  if (resultado === null) {
    return (
      <Partida
        jugador={jugador}
        finalizarJuego={finalizarJuego}
      />
    );
  }

  return (
    <div>
      <h2>Juego terminado</h2>
      <p>Aciertos: {resultado}</p>
    </div>
  );

}

export default App;