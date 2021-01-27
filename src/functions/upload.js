const AWS = require('aws-sdk');

const niceTitle = (string) => {
    return string.split(" ").join("-")
}

exports.uploadFile = (fileContent) => new Promise((resolve, reject) => {
    const { S3_URL, S3_ID, SECRET, BUCKET_NAME } = process.env;

    const s3 = new AWS.S3({
        credentials: {
            accessKeyId: S3_ID,
            secretAccessKey: SECRET
        }
    })

    const {file} = fileContent
    const params = {
        Bucket: BUCKET_NAME,
        Key: `${niceTitle(file.originalname)}`,
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