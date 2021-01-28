const express = require("express");
const router = express();
const recipeControllers = require("../controllers/recipe");

router.get("/:id", recipeControllers.findById);

module.exports = router;