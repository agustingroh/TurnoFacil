import {MedicosModel} from "../model/MedicosModel";

export class MedicosController{

    private medicosModel: MedicosModel;

    constructor() {
        this.medicosModel = new MedicosModel();
        
    }

    public async getAll(){
        const r = await this.medicosModel.getAll();
        return r;

    }
}