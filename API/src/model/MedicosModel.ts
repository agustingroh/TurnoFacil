import {Model} from "./Model";
const util = require('util');

export class MedicosModel extends Model {
    constructor() {
        super();
    }

    public async getAll() {
        const db: any = await this.openDb();
        const ob = util.promisify(db.all.bind(db));
        const files = await ob("SELECT * FROM Medico;");
        db.close();
        return files;
    }

    public async getById(id:number) {
        const db: any = await this.openDb();
        const ob = util.promisify(db.all.bind(db));
        const mDB = util.promisify(db.get.bind(db));
        const medico = await mDB(`SELECT m.nombre, m.apellido FROM Medico m WHERE m.id_medico=?;`,id);
        const obraSocial = await ob(`SELECT ob.nombre FROM Obra_Social ob JOIN Medico_os mos ON (ob.id_os = mos.id_os) WHERE mos.id_medico=?;`,id);
        const especialidad = await ob(`SELECT es.nombre FROM Especialidad es JOIN Medico_Especialidad me ON (es.id_espec = me.id_espec) WHERE me.id_medico=?;`,id);
        if (medico!==undefined){
            medico.especialidades=especialidad;
            medico.obrasSociales=obraSocial;
        }else{
            db.close();
            return {};
        }
        db.close();   

        return medico;
    }

    public async getTimeTable(id:number) {
        const db: any = await this.openDb();
        const medicoModel = util.promisify(db.get.bind(db));
        const timeTable = await medicoModel(`SELECT m.id_medico,ham.lunes, ham.martes, ham.miercoles,ham.jueves,ham.viernes FROM Medico m
                                             INNER JOIN Horario_Atencion_Medico ham ON (ham.id_medico=m.id_medico)
                                             WHERE m.id_medico=?;`,id);
        db.close();
        return timeTable;
    }
}