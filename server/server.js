const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Inicializa la app y middlewares
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mdvscll", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectar a MongoDB:"));
db.once("open", () => console.log("Conexión exitosa a MongoDB"));

// Esquema y Modelo
const visitaSchema = new mongoose.Schema({
    nombre: String,
    nick: String,
    email: String,
    contacto: String,
    pais: String,
    numero: String,
    usuarioRed: String,
});
const Visita = mongoose.model("Visita", visitaSchema);

// Ruta para guardar visitas
app.post("/api/visitas", async (req, res) => {
    try {
        const nuevaVisita = new Visita(req.body);
        await nuevaVisita.save();
        res.status(201).json({ message: "Visita guardada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al guardar la visita" });
    }
});

// Servidor escuchando
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
