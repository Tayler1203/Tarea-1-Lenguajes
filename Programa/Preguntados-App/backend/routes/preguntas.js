const express = require("express");
const router = express.Router();

const obtenerPreguntasAleatorias = require("../services/generarPreguntas");

router.get("/", (req, res) => {

    const preguntas = obtenerPreguntasAleatorias();

    res.json(preguntas);

});

module.exports = router;