const express = require("express");
const cors = require("cors");

const preguntasRoute = require("./routes/preguntas");
const historialRoute = require("./routes/historial");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/preguntas", preguntasRoute);
app.use("/historial", historialRoute);

app.get("/", (req, res) => {
    res.send("API Preguntados funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});