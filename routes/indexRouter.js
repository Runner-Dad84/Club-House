// routes/indexRouter.js
const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController");

//show all comments
indexRouter.get('/', indexController.getComments);

//post comments
indexRouter.post('/', indexController.addMessage);


module.exports = indexRouter;