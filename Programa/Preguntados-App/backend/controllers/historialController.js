const fs = require("fs");
const path = require("path");

const ruta = path.join(__dirname, "../recursos/historial.json");

/*
Nombre: obtenerHistorial

Entradas:
- req, res: objetos de solicitud y respuesta de Express.

Salidas:
- Devuelve el historial de partidas en formato JSON.

Restricciones:
- El archivo historial.json debe existir.

Descripción:
Esta función lee el archivo historial.json y envía la lista
de partidas guardadas al cliente en formato JSON.
*/

exports.obtenerHistorial = (req, res) => {
  const data = fs.readFileSync(ruta);
  const historial = JSON.parse(data);

  res.json(historial);
};

/*
Nombre: guardarPartida

Entradas:
- req, res: objetos de solicitud y respuesta de Express.
- req.body: contiene los datos de la nueva partida.

Salidas:
- Guarda la partida en el historial y devuelve un mensaje
  de confirmación en formato JSON.

Restricciones:
- El cuerpo de la petición debe contener los datos de la partida.

Descripción:
Esta función recibe una nueva partida desde el cliente,
la agrega al historial existente y guarda el archivo
actualizado en historial.json.
*/

exports.guardarPartida = (req, res) => {
  const data = fs.readFileSync(ruta);
  const historial = JSON.parse(data);

  const nueva = req.body;

  historial.push(nueva);

  fs.writeFileSync(ruta, JSON.stringify(historial, null, 2));

  res.json({ mensaje: "Partida guardada" });
};