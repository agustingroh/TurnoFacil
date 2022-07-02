import {Imedico} from "./Imedico";

export interface IDatosMedico {
    id_medico:number,
    nombre: string,
    apellido:string,
    dni:number,
    especialidades:Array<IMedicoEspecialidad>,
    obraSocial: Array<IMedicoObraSocial>,
}

export interface IMedicoObraSocial{
    nombre:string;
}

export interface IMedicoEspecialidad{
    nombre:string;
}

