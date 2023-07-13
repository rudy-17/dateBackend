const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date:{
    type:Date,
    required:true,
    default:Date.now()
  },
  who:{
    type:String,
    required:true,
    default:"Motu"
  }
});

module.exports = mongoose.model("Message", MessageSchema);
