const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

// Middleware for parsing JSON
app.use(bodyParser.json());

// Connection to MongoDB
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true });

app.post('/insertData', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('my');
    const collection = database.collection('check');
    
    // Insert data from the request body
    const result = await collection.insertOne(req.body);

    res.send(`Data inserted with _id: ${result.insertedId}`);
  } catch (error) {
    res.status(500).send('Error inserting data');
  }
});

app.listen(8080);
console.log("http://localhost:8080");
