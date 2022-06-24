import {EspecialidadModel} from "../model/EspecialidadModel";
import {IEspecialidad} from "../model/Interfaces/Iespecialidad/IEspecialidad";
import {HorarioAtencionModel} from "../model/HorarioAtencionModel";
import {IHorarioAtencionMedico} from "../model/Interfaces/IhorarioAtencion/IHorarioAtencionMedico";
import util from "util";

export class HorarioAtencionController {

    private horarioAtencionModel: HorarioAtencionModel;

    constructor() {
        this.horarioAtencionModel= new HorarioAtencionModel();

    }

    public async getTimeTable(id:number):Promise<IHorarioAtencionMedico>{
        const timeTable = await this.horarioAtencionModel.getTimeTable(id);
        return timeTable;
    }


}