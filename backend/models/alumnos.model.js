
import{Schema, model} from "mongoose";

const Eschemas = new Schema({
    //faltan las llaves
    //falta definir el tipo 
    name:{
        type: String
    },
    edad:{
        type: Number
    }
})
//falta export
export const Modelo = new model("Tabla de alumnos", Eschemas )