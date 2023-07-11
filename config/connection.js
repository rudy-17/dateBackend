
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://rudy17:rudy17@cluster0.9jinf.mongodb.net/date?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
