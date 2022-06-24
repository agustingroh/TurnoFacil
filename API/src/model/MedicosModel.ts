import {Model} from "./Model";
import {Imedico} from "./Interfaces/Imedico/Imedico";
import {IDatosMedico} from "./Interfaces/Imedico/IDatosMedico";
import {IHorarioAtencionMedico} from "./Interfaces/IhorarioAtencion/IHorarioAtencionMedico";
const util = require('util');

export class MedicosModel extends Model {
    constructor() {
        super();
    }

    public async getAll():Promise<Array<Imedico>> {
        const db: any = await this.openDb();
        const ob = util.promisify(db.all.bind(db));
        const files = await ob("SELECT * FROM Medico;");
        db.close();
        return files as Array<Imedico>;
    }

    public async getById(id:number):Promise<IDatosMedico>{
        const db: any = await this.openDb();
        const ob = util.promisify(db.all.bind(db));
        const mDB = util.promisify(db.get.bind(db));
        const medico = await mDB(`SELECT m.id_medico, m.dni, m.nombre, m.apellido FROM Medico m WHERE m.id_medico=?;`,id);
        const obraSocial = await ob(`SELECT ob.nombre FROM Obra_Social ob JOIN Medico_os mos ON (ob.id_os = mos.id_os) WHERE mos.id_medico=?;`,id);
        const especialidad = await ob(`SELECT es.nombre FROM Especialidad es JOIN Medico_Especialidad me ON (es.id_espec = me.id_espec) WHERE me.id_medico=?;`,id);
        if (medico!==undefined){
            medico.especialidades=especialidad;
            medico.obrasSociales=obraSocial;
        }else{
            db.close();
            return {} as IDatosMedico;
        }
        db.close();   

        return medico as IDatosMedico;
    }


    public async hasNextWeek(id:number): Promise <Boolean>{

        if (id==1){
            return true;
        }
        return false;
    }
}