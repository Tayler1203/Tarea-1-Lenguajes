const express = require("express");
const router = express.Router();

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