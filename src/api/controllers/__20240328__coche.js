//Creación del controlador
const Coche = require('../models/coche');

//Read
const getCoches = async (req, res, next) => {
  try {
    //Buscamos todos los datos de la colección
    const allCoches = await Coche.find();
    return res.status(200).json(allCoches);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición' + error);
  }
};

// Create
const postCoche = async (req, res, next) => {
  try {
    const newCoche = new Coche(req.body);
    /* const newCoche = new Coche({
      matricula: req.body.matricula,
      marca: req.body.marca,
      modelo: req.body.modelo,
      cilindrada: req.body.cilindrada,
      potencia: req.body.potencia,
      color: req.body.color
    });*/

    const cocheSaved = await newCoche.save();
    return res.status(201).json(cocheSaved);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición ' + error);
  }
};

module.exports = { getCoches, postCoche };
