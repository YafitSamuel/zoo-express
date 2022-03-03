const animals = require("../models/animals-model");

module.exports = {
  getAll: (req, res) => {
    animals
      .find({})
      .then((data) => res.send({ data }))
      .catch((err) => res.status(400).send({ massage: "animals  not found" }));
  },

  getById: (req, res) => {
    animals
      .findById(req.params.id)
      .then((data) => res.send({ data }))
      .catch((err) => res.status(400).send({ massage: "animal  not found" }));
  },

  postAnimal: (req, res) => {
    animals
      .create(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.status(400).json({ massage: "animal not add" }));
  },

  putAnimal: (req, res) => {
    animals
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send( data))
      .catch((err) => res.status(400).json({ massage: "animal not Update" }));
  
  },

  deleteAnimal: (req, res) => {
    animals
      .findByIdAndDelete(req.params.id)
      .then((animal) => res.send("delete successfully"))
      .catch((err) => {
        res.status(500).send({ massage: " not deleted" });
      });
  },
};
