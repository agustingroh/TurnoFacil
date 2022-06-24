import {MedicosModel} from "../model/MedicosModel";

export class MedicosController{

    private medicosModel: MedicosModel;

    constructor() {
        this.medicosModel = new MedicosModel();
        
    }

    public async getAll():Promise<Array<Imedico>>{
        return  await this.medicosModel.getAll();
    }

    public async getById(id:number):Promise<IDatosMedico>{
        return  await this.medicosModel.getById(id);
    }

    public async getTurnosMedicoById(id:number){
        const r = await this.medicosModel.getTurnosMedicoById(id);
        return r;

    }

    public async hasNextWeek(id:number):Promise <Boolean>{

        const r = await this.medicosModel.hasNextWeek(id);
        return r;

    }

}