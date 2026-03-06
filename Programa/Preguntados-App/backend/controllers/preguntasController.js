const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "../recursos/preguntas.json");

exports.obtenerPreguntas = (req, res) => {
  const data = fs.readFileSync(ruta);
  const preguntas = JSON.parse(data);

  res.json(preguntas);
};