const express = require("express");
const router = express.Router();

/*
Nombre: POST /historial

Entradas:
- resultado: objeto recibido en el cuerpo de la petición con
  los datos de la partida (nombre, puntaje, estado y fecha).

Salidas:
- Guarda el resultado en el historial y devuelve un mensaje
  de confirmación en formato JSON.

Restricciones:
- El cuerpo de la petición debe contener los datos de la partida.

Descripción:
Esta ruta recibe los datos de una partida desde el cliente,
los envía a la función guardarResultado para almacenarlos
en el historial y devuelve un mensaje indicando que el
resultado fue guardado correctamente.
*/

const { obtenerHistorial, guardarResultado } = require("../services/historialService");

router.get("/", (req, res) => {

    const historial = obtenerHistorial();

    res.json(historial);

});

router.post("/", (req, res) => {

    const resultado = req.body;

    guardarResultado(resultado);

    res.json({
        mensaje: "Resultado guardado correctamente"
    });

});

module.exports = router;