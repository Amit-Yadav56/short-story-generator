
const express = require('express')
const app = express()
const port = 3000
const path=require('path');
//render html file
app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})