import { Estado, FormCrearOfertaProveedor, NumMes } from "../form"

export type DataSelect={
    _id:string,
    name:string,
    createdAt:Date,
    updatedAt:Date
}
export interface Oferta extends FormCrearOfertaProveedor{
    _id:string,
    proveedor:string,
    licitacion:Partial<Licitacion>
}
export type Licitacion={
    _id:string,
    title:string,
    description:string,
    fechaInicioApertura:string,
    fechaFinApertura:string,
    tipoServicio:{
        _id:string,
        name:string
    },
    numLicitacion:number,
    requisitos:string,
    estado:Estado,
    empresa:string,
    fechaInicio:string,
    fechaFin:string,
    puntoSum:{
        _id:string,
        name:string
    },
    brg:{
        _id:string,
        name:string
    },
    factorPlanta:number,
    meses:NumMes[],
    usuario:string,
    participantes:string[],
    createdAt:Date,
    updatedAt:Date
}
export type TokenUser={
    _id:string,
    correo:string,
    type:TypeToken.User
}
enum TypeToken{
    User="user",
    Proveedor="proveedor"

}