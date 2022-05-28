import {EspecialidadModel} from "../model/EspecialidadModel";

export class EspecilidadController{

    private especialidadModel: EspecialidadModel;

    constructor() {
        this.especialidadModel = new EspecialidadModel();

    }


    public async getAll(){
        const especialdiades = this.especialidadModel.getAll();
        return especialdiades;
    }

}