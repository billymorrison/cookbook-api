const express = require("express");
const router = express();
const recipeControllers = require("../controllers/recipe");
const multer = require("multer");
const { storeFile } = require("../middleware/storeFile")

const upload = multer({
    storage: multer.memoryStorage(),
})

router.get("/:user", recipeControllers.listByUser);
router.get("/:user/:id", recipeControllers.findById);

router.route("/")
    .post(upload.single("image"), storeFile, recipeControllers.create)
    .get(recipeControllers.list)

router.patch("/:id", recipeControllers.update);

router.delete("/:id", recipeControllers.delete);

module.exports = router;