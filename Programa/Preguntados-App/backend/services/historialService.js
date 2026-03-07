const fs = require("fs");
const path = require("path");

const rutaHistorial = path.join(__dirname, "../recursos/historial.json");

/*
Nombre: obtenerHistorial

Entradas:
- No recibe parámetros.

Salidas:
- Retorna una lista con los resultados guardados en el historial.

Restricciones:
- El archivo historial.json debe existir.

Descripción:
Esta función lee el archivo historial.json y convierte su contenido
de formato JSON a un objeto de JavaScript para poder trabajar con
los datos del historial de partidas.
*/

function obtenerHistorial() {

    const data = fs.readFileSync(rutaHistorial);
    return JSON.parse(data);

}

/*
Nombre: guardarResultado

Entradas:
- resultado: objeto que contiene la información de una partida
  (nombre del jugador, puntaje, estado y fecha).

Salidas:
- Guarda el resultado en el archivo historial.json.

Restricciones:
- El archivo historial.json debe ser accesible para escritura.

Descripción:
Esta función obtiene el historial actual, agrega un nuevo resultado
de partida y luego guarda nuevamente el historial actualizado en
el archivo historial.json.
*/

function guardarResultado(resultado) {

    const historial = obtenerHistorial();

    historial.push(resultado);

    fs.writeFileSync(rutaHistorial, JSON.stringify(historial, null, 2));

}

module.exports = {
    obtenerHistorial,
    guardarResultado
};