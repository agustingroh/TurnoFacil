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

}