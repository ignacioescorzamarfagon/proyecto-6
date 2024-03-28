require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const cocheRoutes = require('./src/api/routes/coche');

const app = express();

connectDB();

app.use(express.json()); //Nuestro servidor puede recibir json

app.use('/api/coches', cocheRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('Rute not found');
});

app.listen(3000, () => {
  console.log('Servidor desplegado en http://localhost:3000');
});
