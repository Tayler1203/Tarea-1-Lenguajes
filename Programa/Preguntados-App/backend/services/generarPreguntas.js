const fs = require("fs");
const path = require("path");

/*
Nombre: obtenerPreguntasAleatorias

Entradas:
- No recibe parámetros.

Salidas:
- Retorna una lista de 10 preguntas seleccionadas aleatoriamente.

Restricciones:
- El archivo preguntas.json debe existir y contener preguntas válidas.

Descripción:
Esta función lee el archivo preguntas.json, obtiene la lista de
preguntas disponibles, las mezcla aleatoriamente y devuelve
solamente 10 preguntas para ser utilizadas en la partida.
*/

function obtenerPreguntasAleatorias() {

    const ruta = path.join(__dirname, "../recursos/preguntas.json");

    const data = fs.readFileSync(ruta);
    const preguntas = JSON.parse(data);

    const mezcladas = preguntas.sort(() => 0.5 - Math.random());

    return mezcladas.slice(0, 10);
}

module.exports = obtenerPreguntasAleatorias;