const { RecipeModel } = require("../models/recipe");
const uploadFile = require("../src/functions/upload");
const helper = require("./helper");

exports.create = async (req, res) => {
        let response = await helper.createItem(RecipeModel, req.body)
        response.success
            ? res.status(201).send(req.body)
            : res.status(400).send({ error: response.error })    
}

exports.list = async (req, res) => {
    let response = await helper.listAll(RecipeModel);
    response.success
    ? res.status(200).send(response.data)
    : res.status(401).json({ error: response.error })
}

exports.listByUser = async (req, res) => {
    const { user } = req.params;

    let response = await helper.list(RecipeModel, { userId: user })
    response.success
    ? res.status(200).send(response)
    : res.status(401).json({ error: response.error })
}

exports.findById = async (req, res) => {
    const { id } = req.params;

    let response = await helper.find(RecipeModel, id)
    response.success
    ? res.status(200).send(response)
    : res.status(401).json({ error: response.error })
}

exports.delete = async (req, res) => {
    const { id } = req.params;

    let response = await helper.deleteById(RecipeModel, { _id: id })
    response.success
    ? res.status(200).send("Recipe Deleted")
    : res.status(401).json({ error: response.error })
}

exports.update = async (req, res) => {
    const { id } = req.params;

    let response = await helper.updateItem(RecipeModel, { _id: id }, req.body)
    response.success
    ? res.status(200).send(response)
    : res.status(401).json({ error: response.error })
}