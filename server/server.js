const express = require('express');
const cors = require('cors');
const Visita = require('./models/Visita');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/visitas', async (req, res) => {
    const { nombre, direccion, telefono, email } = req.body;
    const nuevaVisita = new Visita({ nombre, direccion, telefono, email });
    await nuevaVisita.save();
    res.send({ message: 'Visita guardada correctamente' });
});

app.listen(5000, () => {
    console.log('Servidor en puerto 5000');
});
