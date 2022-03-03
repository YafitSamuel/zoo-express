const employeeRouter = require("express").Router(); 
const {getAll,
    getById,
    postEmployee,
    putEmployee,
    deleteEmployee
}
 = require("../controllers/employee-controller");

employeeRouter.get("/", getAll);

employeeRouter.get("/:id", getById);

employeeRouter.post("/", postEmployee);

employeeRouter.put("/:id", putEmployee);

employeeRouter.delete("/:id", deleteEmployee);

module.exports = employeeRouter;