const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fileName: String,
  fileType: String,
  s3Url: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', FileSchema);
