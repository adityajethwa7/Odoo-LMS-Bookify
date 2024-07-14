const multer = require("multer");
// const sequelize = require('sequelize');

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/uploads"); // cb = callback
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
}).single("user_file");

module.exports = upload;
