import {ObraSocialModel} from "../model/ObraSocialModel";
import {IObraSocial} from "../model/Interfaces/IobraSocial/IObraSocial";

export class ObrasSocialController{

    private obraSocialModel: ObraSocialModel;

    constructor() {
        this.obraSocialModel = new ObraSocialModel();
        
    }

    public async getAll():Promise<Array<IObraSocial>>{
        const r = await this.obraSocialModel.getAll();
        return r;

    }
}