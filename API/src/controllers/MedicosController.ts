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
    public async getById(id:number){
        const r = await this.medicosModel.getById(id);
        return r;

    }

    public async getTimeTable(id:number){
        const timeTable = await this.medicosModel.getTimeTable(id);
        return timeTable;

    }
}