import {Imedico} from "./Imedico";

export interface IDatosMedico {
    id_medico:number,
    nombre: string,
    apellido:string,
    dni:number,
    especialidades:Array<IMedicoObraSocial>,
    obraSocial: Array<IMedicoEspecialidad>,
}

export interface IMedicoObraSocial{
    nombre:string;
}

export interface IMedicoEspecialidad{
    nombre:string;
}

