import {ObraSocialModel} from "../model/ObraSocialModel";

export class ObrasSocialController{

    private obraSocialModel: ObraSocialModel;

    constructor() {
        this.obraSocialModel = new ObraSocialModel();
        
    }

    public async getAll(){
        const r = await this.obraSocialModel.getAll();
        return r;

    }
}