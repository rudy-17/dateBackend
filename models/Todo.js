const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  id:{
    type:String,
    required:false
  },
  completed:{
    type:Boolean,
    required:false
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
