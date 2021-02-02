const express = require("express");
const router = express();
const userControllers = require("../controllers/user");
const { UserModel } = require("../models/user");

router.post("/register", userControllers.create);

router.post("/login", function (req, res) {
    UserModel
        .findOne({ email: req.body.email })
        .then((user) => {
            if(!user){
                res.status(401).json({ message: "The username/password is incorrect" });
            } else {
                user.validatePassword(req.body.password) 
                ? res.status(200).json({
                    _id: user._id,
                    displayName: user.displayName
                })
                : res.status(401).json("The username/password is incorrect")
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500);
        })
})

module.exports = router;
