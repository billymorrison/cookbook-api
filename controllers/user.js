const { UserModel } = require("../models/user");
const helper = require("./helper");

exports.create = async (req, res) => {
    const errorMessage = "Unable to register"

    let response = await helper.createItem(UserModel, req.body, errorMessage)
    response.success
    ? res.status(201).send(req.body)
    : res.status(401).json({ error: response.error })
}