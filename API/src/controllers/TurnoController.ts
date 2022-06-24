
import {TurnosModel} from "../model/TurnosModel";
import {ITurnoMedico} from "../model/Interfaces/ITurno/ITurnoMedico";

export class TurnoController {

    private turnoModel: TurnosModel;

    constructor() {
        this.turnoModel = new TurnosModel();
    }

    public async getTurnosMedicoById(id:number):Promise<Array<ITurnoMedico>>{
        const r = await this.turnoModel.getTurnosMedicoById(id);
        return r;

    }

}