const mongoose = require('mongoose');

const visitaSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    telefono: String,
    email: String
});

module.exports = mongoose.model('Visita', visitaSchema);
