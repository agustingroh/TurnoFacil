import {MedicosModel} from "../model/MedicosModel";
import {Imedico} from "../model/Interfaces/Imedico/Imedico";
import {IDatosMedico} from "../model/Interfaces/Imedico/IDatosMedico";
import {IHorarioAtencionMedico} from "../model/Interfaces/IhorarioAtencion/IHorarioAtencionMedico";

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

}