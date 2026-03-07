const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "../recursos/preguntas.json");

/*
Nombre: mezclar

Entradas:
- array: lista de elementos.

Salidas:
- Retorna el mismo arreglo pero con sus elementos en orden aleatorio.

Restricciones:
- El arreglo debe contener elementos válidos.

Descripción:
Esta función mezcla aleatoriamente los elementos de un arreglo
utilizando el método sort con un valor aleatorio.
*/

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

/*
Nombre: obtenerPreguntas

Entradas:
- req, res: objetos de solicitud y respuesta de Express.

Salidas:
- Devuelve 10 preguntas aleatorias en formato JSON.

Restricciones:
- El archivo preguntas.json debe existir.

Descripción:
Esta función lee el archivo preguntas.json, mezcla las preguntas
y devuelve 10 preguntas seleccionadas aleatoriamente para ser
utilizadas en la partida.
*/

exports.obtenerPreguntas = (req, res) => {

  const data = fs.readFileSync(ruta);
  const preguntas = JSON.parse(data);

  const preguntasAleatorias = mezclar(preguntas).slice(0, 10);

  res.json(preguntasAleatorias);
};