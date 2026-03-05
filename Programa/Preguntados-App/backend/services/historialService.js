const fs = require("fs");
const path = require("path");

const rutaHistorial = path.join(__dirname, "../recursos/historial.json");

function obtenerHistorial() {

    const data = fs.readFileSync(rutaHistorial);
    return JSON.parse(data);

}

function guardarResultado(resultado) {

    const historial = obtenerHistorial();

    historial.push(resultado);

    fs.writeFileSync(rutaHistorial, JSON.stringify(historial, null, 2));

}

module.exports = {
    obtenerHistorial,
    guardarResultado
};