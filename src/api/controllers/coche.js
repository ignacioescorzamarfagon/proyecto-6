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

//Read By Id
const getCocheById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coche = await Coche.findById(id);
    return res.status(200).json(coche);
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

//Update
const updateCoches = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCoche = new Coche(req.body);
    newCoche._id = id;
    const cocheUpdated = await Coche.findByIdAndUpdate(id, newCoche, {
      new: true
    });
    return res.status(200).json(cocheUpdated);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición ' + error);
  }
};

//Delete
const deleteCoche = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cocheDeleted = await Coche.findByIdAndDelete(id);
    return res.status(200).json(cocheDeleted);
  } catch (error) {
    return res.status(400).json('Ha fallado la petición ' + error);
  }
};

module.exports = {
  getCoches,
  getCocheById,
  postCoche,
  updateCoches,
  deleteCoche
};
