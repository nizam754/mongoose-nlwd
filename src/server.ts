const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000

//database connection

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
async function bootstrap(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
        console.log(`🎃Database connection successful`)
    } catch (err) {
        console.log(`💀Failed to connect to database`, err);
    }
}

bootstrap()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`🖥️Server is listening on port ${port}`)
})