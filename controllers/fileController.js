const multer = require('multer');
const AWS = require('aws-sdk');
const File = require('../models/File');
const config = require('../config');

const s3 = new AWS.S3();

const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.uploadFile = upload.single('file');

exports.uploadToS3 = async (req, res) => {
  try {
    const params = {
      Bucket: config.s3Bucket,
      Key: `${Date.now()}_${req.file.originalname}`,
      Body: req.file.buffer,
    };
    const data = await s3.upload(params).promise();
    const file = new File({
      userId: req.user.userId,
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      s3Url: data.Location,
    });
    await file.save();
    res.json({ file });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
