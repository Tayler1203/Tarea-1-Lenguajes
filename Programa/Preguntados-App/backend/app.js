const express = require("express");
const cors = require("cors");

const preguntasController = require("./controllers/preguntasController");
const historialController = require("./controllers/historialController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/preguntas", preguntasController.obtenerPreguntas);

app.get("/historial", historialController.obtenerHistorial);

app.post("/historial", historialController.guardarPartida);

app.listen(3001, () => {
  console.log("Servidor backend corriendo en puerto 3001");
});