
const express = require('express')
const app = express()
const port = 3000
const path=require('path');
//render html file
app.use(express.static('public'));


const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

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

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})