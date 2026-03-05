const fs = require("fs");
const path = require("path");

function obtenerPreguntasAleatorias() {

    const ruta = path.join(__dirname, "../recursos/preguntas.json");

    const data = fs.readFileSync(ruta);
    const preguntas = JSON.parse(data);

    const mezcladas = preguntas.sort(() => 0.5 - Math.random());

    return mezcladas.slice(0, 10);
}

module.exports = obtenerPreguntasAleatorias;