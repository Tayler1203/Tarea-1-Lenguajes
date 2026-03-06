const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "../recursos/historial.json");

exports.obtenerHistorial = (req, res) => {
  const data = fs.readFileSync(ruta);
  const historial = JSON.parse(data);

  res.json(historial);
};

exports.guardarPartida = (req, res) => {
  const data = fs.readFileSync(ruta);
  const historial = JSON.parse(data);

  const nueva = req.body;

  historial.push(nueva);

  fs.writeFileSync(ruta, JSON.stringify(historial, null, 2));

  res.json({ mensaje: "Partida guardada" });
};