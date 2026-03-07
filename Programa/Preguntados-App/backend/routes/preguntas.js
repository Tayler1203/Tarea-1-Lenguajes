const express = require("express");
const router = express.Router();

/*
Nombre: GET /preguntas

Entradas:
- No recibe parámetros.

Salidas:
- Devuelve una lista de preguntas en formato JSON.

Restricciones:
- El servicio de generación de preguntas debe funcionar correctamente.

Descripción:
Esta ruta del servidor obtiene una lista de preguntas aleatorias
utilizando la función obtenerPreguntasAleatorias y las envía
como respuesta al cliente en formato JSON para ser usadas
en la partida del juego.
*/

const obtenerPreguntasAleatorias = require("../services/generarPreguntas");

router.get("/", (req, res) => {

    const preguntas = obtenerPreguntasAleatorias();

    res.json(preguntas);

});

module.exports = router;