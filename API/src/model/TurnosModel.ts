import {Model} from "./Model";
import util from "util";
import {ITurnoMedico} from "./Interfaces/ITurno/ITurnoMedico";

export class TurnosModel extends Model{

    public async getTurnosMedicoById(id:number):Promise<Array<ITurnoMedico>> {
        const db: any = await this.openDb();
        const tu = util.promisify(db.all.bind(db));
        const turnos = await tu(`SELECT * FROM Turno t WHERE t.id_medico=? ORDER BY t.fecha ;`,id);
        db.close();
        return turnos;
    }
}