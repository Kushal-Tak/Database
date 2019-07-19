const express = require('express');
const bodyParser = require('body-parser');
const Manager = require('./DataFeed/Manager').Manager
var cors = require('cors')


// create express app
const app = express();
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
    next();
    });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.post('/googleSheet', (req, res) => {
    
    let sheet_id = req.body.params;
    new Manager(sheet_id);
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});