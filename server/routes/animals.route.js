const AnimalRouter = require("express").Router(); 
const {getAll,
    getById,
    postAnimal,
    putAnimal,
    deleteAnimal
}
 = require("../controllers/animal-controller");

AnimalRouter.get("/", getAll);

AnimalRouter.get("/:id", getById);

AnimalRouter.post("/", postAnimal);

AnimalRouter.put("/:id", putAnimal);

AnimalRouter.delete("/:id", deleteAnimal);

module.exports = AnimalRouter;