import {Model} from "./Model";
import {IHorarioAtencionMedico} from "./Interfaces/IhorarioAtencion/IHorarioAtencionMedico";
const util = require('util');

export class HorarioAtencionModel extends Model {
    constructor() {
        super();
    }

    public async getTimeTable(id:number):Promise<IHorarioAtencionMedico> {
        const db: any = await this.openDb();
        const medicoModel = util.promisify(db.get.bind(db));
        const timeTable = await medicoModel(`SELECT m.id_medico,ham.lunes, ham.martes, ham.miercoles,ham.jueves,ham.viernes FROM Medico m
                                             INNER JOIN Horario_Atencion_Medico ham ON (ham.id_medico=m.id_medico)
                                             WHERE m.id_medico=?;`,id);
        db.close();
        return timeTable as IHorarioAtencionMedico;
    }

}