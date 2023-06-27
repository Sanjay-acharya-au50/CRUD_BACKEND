const mongoose = require("mongoose");

const DB = "mongodb+srv://sanjayacharya992:san123@cluster0.vqq7tx8.mongodb.net/"
mongoose.connect(DB)
  .then(() => {
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err);
  });