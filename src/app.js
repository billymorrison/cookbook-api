const express = require('express');
const recipesRouter = require("../routes/recipes");
const usersRouter = require("../routes/users");
const singleRecipeRouter = require("../routes/singleRecipe");

const app = express();

app.use(express.json());

app.use("/recipe", singleRecipeRouter);
app.use("/recipes", recipesRouter);
app.use("/user", usersRouter);

module.exports = app;