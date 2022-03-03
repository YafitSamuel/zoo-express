const employees = require("../models/employee-model");

module.exports = {
  getAll: (req, res) => {
    employees
      .find({})
      .then((data) => res.send({ data }))
      .catch((err) => res.status(400).send({ massage: "employees  not found" }));
  },

  getById: (req, res) => {
    employees
      .findById(req.params.id)
      .then((data) => res.send({ data }))
      .catch((err) => res.status(400).send({ massage: "employee  not found" }));
  },

  postEmployee: (req, res) => {
    employees
      .create(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.status(400).json({ massage: "employee not add" }));
  },

  putEmployee: (req, res) => {
    employees
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send( data))
      .catch((err) => res.status(400).json({ massage: "employee not Update" }));
  
  },

  deleteEmployee: (req, res) => {
    employees
      .findByIdAndDelete(req.params.id)
      .then((employee) => res.send("delete successfully"))
      .catch((err) => {
        res.status(500).send({ massage: " not deleted" });
      });
  },
};
