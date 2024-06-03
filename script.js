const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
// Middleware for parsing JSON
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors({ origin: true }));
app.use(express.json())

// Connection to MongoDB
const uri = 'mongodb://localhost:27017/short_story';

mongoose.connect(uri, { useNewUrlParser: true })
mongoose.connection.once("open", () => {
  console.log("Connected")
}).on("error", (error) => {
  console.log(`Error: ${error}`)
})

const ai = require('./routes/openAi');
app.use("/api/story/", ai)

app.listen(8080);
console.log("http://localhost:8080");
