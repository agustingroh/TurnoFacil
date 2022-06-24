import {EspecialidadController} from "./controllers/EspecialidadController";

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
import {HorarioAtencionModel} from "./model/HorarioAtencionModel";
import {HorarioAtencionController} from "./controllers/HorarioAtencionController";
import {TurnoController} from "./controllers/TurnoController";


app.use(cors());

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});

// Obras sociales
app.get('/os', async function (req:any, res:any) {
    const os = new ObrasSocialController();
    const response = await os.getAll();
    res.status(200).send(response);
});

// Medicos
app.get('/medicos', async function (req:any, res:any) {
    const med = new MedicosController();
    const response = await med.getAll();
    res.status(200).send(response);
});
app.get(`/medicos/:id`, async function (req:any, res:any) {
    const med = new MedicosController();
    const response = await med.getById(req.params.id);
    res.status(200).send(response); 
});

app.get(`/medico/horarioatencion/:id`, async function (req:any, res:any) {
    const horarioAtencionController = new HorarioAtencionController()
    const response = await horarioAtencionController.getTimeTable(req.params.id);
    res.status(200).send(response);
});

// Especialidades
app.get('/especialidades', async function (req:any, res:any) {
    const especilidades = new EspecialidadController();
    const response = await especilidades.getAll();
    res.status(200).send(response);
});

// Turnos disponibles
app.get(`/medico/turnos/:id`, async function (req:any, res:any) {
    const turno = new TurnoController();
    const response = await turno.getTurnosMedicoById(req.params.id);
    res.status(200).send(response); 
});

// Turnos disponibles proxima semana
app.get(`/medico/disponibilidad/:id`, async function (req:any, res:any) {
    const med = new MedicosController();
    const response = await med.hasNextWeek(req.params.id);
    res.status(200).send(response); 
});