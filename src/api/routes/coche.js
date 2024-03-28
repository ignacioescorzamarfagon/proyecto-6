// Creación de las rutas
const {
  getCoches,
  getCocheById,
  postCoche,
  updateCoches,
  deleteCoche
} = require('../controllers/coche');

const cocheRoutes = require('express').Router();

cocheRoutes.get('/', getCoches);
cocheRoutes.get('/:id', getCocheById);
cocheRoutes.post('/', postCoche);
cocheRoutes.put('/:id', updateCoches);
cocheRoutes.delete('/:id', deleteCoche);

module.exports = cocheRoutes;
