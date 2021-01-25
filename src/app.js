const express = require('express');
const recipesRouter = require("../routes/recipes");
const usersRouter = require("../routes/users");

const app = express();

app.use(express.json());

app.use("/recipes", recipesRouter);
app.use("/user", usersRouter);

module.exports = app;