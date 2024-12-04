import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
//Agregue .js
import {test} from "./backend/controllers/alumos.controller.js";

//falto el module en json
//falta el start en json
dotenv.config();
//Falta el archivo.env y su url
//Agregue una n en connect
mongoose.connect(process.env.urlbd)
.then(()=>{
    //Esta funcionando la conexion a la DB no el servidor
    console.log("Esta funcionando la conexion");
})
.catch((error)=>{
    //Es conexion a la DB no al servidor
    console.log("Conexion fallida a la DB ", error)
})

const app=express();
app.use(cors());
app.listen(4001, ()=>{
    console.log("Se escucha correcto.")
});

test();