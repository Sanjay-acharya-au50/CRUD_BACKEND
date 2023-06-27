const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.DB)
  .then(() => {
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err);
  });