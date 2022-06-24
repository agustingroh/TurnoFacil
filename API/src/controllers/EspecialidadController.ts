import {EspecialidadModel} from "../model/EspecialidadModel";
import {IEspecialidad} from "../model/Interfaces/Iespecialidad/IEspecialidad";

export class EspecialidadController {

    private especialidadModel: EspecialidadModel;

    constructor() {
        this.especialidadModel = new EspecialidadModel();

    }


    public async getAll():Promise<Array<IEspecialidad>>{
        const especialdiades =  await this.especialidadModel.getAll();
        return especialdiades;
    }

}