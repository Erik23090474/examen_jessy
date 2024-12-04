//Esta el archivo como alumos y no alumnos
//Es Modelo y no modelo
import { Modelo } from "../models/alumnos.model.js";
//Aqui tambien
Modelo.create({
    Name:"Rodolfo",
    edad:25
})

export const test = ()=>{
    console.log("Funciona el controlador")
}