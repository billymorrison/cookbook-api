const { uploadFile } = require('../src/functions/upload');

exports.storeFile = (req, res, next) => {
    uploadFile(req)
        .then((imageUrl) => {
            req.body.imageUrl = imageUrl;
            next();
        })
        .catch(error => {
            res.status(500).json({ error: error })
        })
}