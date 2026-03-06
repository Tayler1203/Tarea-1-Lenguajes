const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "../recursos/preguntas.json");

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

exports.obtenerPreguntas = (req, res) => {

  const data = fs.readFileSync(ruta);
  const preguntas = JSON.parse(data);

  const preguntasAleatorias = mezclar(preguntas).slice(0, 10);

  res.json(preguntasAleatorias);
};