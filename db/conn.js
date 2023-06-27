const mongoose = require("mongoose");


mongoose.connect(process.env.DB)
  .then(() => {
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err);
  });