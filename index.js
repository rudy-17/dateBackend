const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv= require("dotenv")
const axios=require("axios")
const connection=require("./config/connection")
console.log(connection.databaseName)
//const query= require("querystring")

const app = express();
dotenv.config();
// use this before any routes
app.use(cors());



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())

// app.use("/",(req,res)=>{
//     res.send("someting great happeing here")
// })

app.use("/main",require("./routes/incoming"))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});