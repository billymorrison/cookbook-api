const { rejects } = require('assert');
const AWS = require('aws-sdk');
const { resolve } = require('path');

const { S3_ID, SECRET, BUCKET_NAME, S3_URL } = process.env;

const s3 = new AWS.S3({
    accessKeyId: S3_ID,
    secretAccessKey: SECRET
})

const niceTitle = (string) => {
    return string.split(" ").join("-")
}

exports.uploadFile = (fileContent) => new Promise((resolve, reject) => {
    const {file} = fileContent

    const params = {
        Bucket: BUCKET_NAME,
        Key: `${niceTitle(file.originalname)}.jpg`,
        Body: file.buffer,
        ContentType: "image/jpg"
    }

    s3.putObject(params, (err) => {
        if(err) {
            reject(err)
        } else {
            resolve(`${S3_URL + params.Key}`)
        }
    })
})