const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },
    bike : {
        type : String,
        required : true
    }

},
{timestamps : true},
)

const PostingSchema =  mongoose.model("data", PostSchema);

module.exports = PostingSchema;

