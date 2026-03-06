import { useState } from "react";
import Inicio from "./componentes/Inicio/inicio";

function App() {

  const [jugador, setJugador] = useState(null);

  const iniciarJuego = (nombre) => {
    setJugador(nombre);
  };

  if (!jugador) {
    return <Inicio iniciarJuego={iniciarJuego} />;
  }

  return (
    <div>
      <h1>Jugador: {jugador}</h1>
      <p>El juego comenzará aquí</p>
    </div>
  );

}

export default App;