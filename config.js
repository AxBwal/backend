require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  dbURI: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  s3Bucket: process.env.AWS_S3_BUCKET,
};
