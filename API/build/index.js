"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var path = require('path');
var session = require('express-session');
var app = express();
app.use(express.static('public'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);
var cors = require('cors');
var ObrasSocialController_1 = require("./controllers/ObrasSocialController");
app.use(cors());
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});
app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
app.get('/os', function (req, res) {
    var os = new ObrasSocialController_1.ObrasSocialController();
    os.getAll();
    res.send('response test');
});
