const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const visitors =  require('./routes/visitor');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // enabling application to use JSON by using bodyParser.json() middleware

//console.log that your server is up & running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api/test', visitors);
