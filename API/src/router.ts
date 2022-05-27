var express = require('express');
var bodyParser = require('body-parser');
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
var cors = require('cors');
import {ObrasSocialController} from "./controllers/ObrasSocialController";
import { MedicosController } from './controllers/MedicosController';


app.use(cors());

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
app.get('/os', async function (req:any, res:any) {
    const os = new ObrasSocialController();
    const response = await os.getAll();
    res.status(200).send(response);
});
app.get('/medicos', async function (req:any, res:any) {
    const med = new MedicosController();
    const response = await med.getAll();
    res.status(200).send(response);
});
