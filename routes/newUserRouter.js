const { Router } = require("express");
const newUserRouter = Router();
const controller = require("../controllers/indexController");
const controllerValidate = require("../controllers/validatorController");

//render sign up form
newUserRouter.get("/newUser", (req, res) => { res.render("newUser") });

//sign up new user
newUserRouter.post("/newUser", controllerValidate.verifyPassword, controller.signupUser)


module.exports = newUserRouter;