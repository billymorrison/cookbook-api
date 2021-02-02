const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    prepTime: { type: String, required: true },
    cookTime: String,
    difficulty: { type: String, required: true },
    serves: { type: Number, required: true },
    nutrition: {
        type: Map,
        of: String,
    },
    ingredients: { type: String, required: true },
    method: { type: String, required: true },
    imageUrl: String,
    userId: { type: String, required: true },
    userNiceName: { type: String, required: true }
});

const RecipeModel = mongoose.model('Recipe', RecipeSchema);

module.exports = {
    RecipeModel
};