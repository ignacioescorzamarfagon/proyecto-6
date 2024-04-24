//Creación del modelo
const mongoose = require('mongoose');

const cocheSchema = new mongoose.Schema(
  {
    //Nota: poner false es lo mismo que no poner nada
    matricula: { type: String, required: true, unique: true, trim: true },
    marca: { type: String, trim: true },
    modelo: { type: String, trim: true },
    cilindrada: { type: String, trim: true },
    potencia: { type: String, trim: true },
    color: { type: String, trim: true }
  },
  {
    timestamps: true,
    collection: 'coches'
  }
);

const Coche = mongoose.model('coches', cocheSchema, 'coches');

module.exports = Coche;
