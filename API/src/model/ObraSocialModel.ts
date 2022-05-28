import {Model} from "./Model";
const util = require('util');

export class ObraSocialModel extends Model {
    constructor() {
        super();
    }

    public async getAll() {
        const db: any = await this.openDb();
        const obrasSocialesModel = util.promisify(db.all.bind(db));
        const obrasSociales = await obrasSocialesModel("SELECT * FROM Obra_Social");
        db.close();
        return obrasSociales;
    }

}