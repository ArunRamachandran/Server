const express = requires('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // enabling application to use JSON by using bodyParser.json() middleware

//console.log that your server is up & running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/test', (req, res) => {
    res.send({ express: 'WE will do it  :) ' });
})