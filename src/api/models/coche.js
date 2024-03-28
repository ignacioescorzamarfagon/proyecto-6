//Creación del modelo
const mongoose = require('mongoose');

const cocheSchema = new mongoose.Schema(
  {
    matricula: { type: String, required: true, unique: true },
    marca: { type: String, required: false, unique: false },
    modelo: { type: String, required: false, unique: false },
    cilindrada: { type: String, required: false, unique: false },
    potencia: { type: String, required: false, unique: false },
    color: { type: String, required: false, unique: false }
  },
  {
    timestamps: true,
    collection: 'coches'
  }
);

const Coche = mongoose.model('coches', cocheSchema, 'coches');

module.exports = Coche;
