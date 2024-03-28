const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Se ha conectado con la BBDD');
  } catch (error) {
    console.log('Error en la conexión de la BBDD' + error);
  }
};

module.exports = { connectDB };
