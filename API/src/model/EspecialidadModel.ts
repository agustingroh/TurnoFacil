import {Model} from "./Model";
import util from "util";

export class EspecialidadModel extends Model{

    constructor() {
        super();
    }

    public async getAll(){
        const db: any = await this.openDb();
        const especialidadModel = util.promisify(db.all.bind(db));
        const especialidades = await especialidadModel("SELECT * FROM Especialidad;");
        db.close();
        return especialidades;
    }
}