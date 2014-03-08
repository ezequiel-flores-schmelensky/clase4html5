/**obtener una variable para acceder a las funcionalidades de express**/
var express= require("express");
/*Configurar mi servidor*/
var app=express();
/*tipo de puerto por el que se atiendan las peticiones*/
app.listen(8081);
/*Imprime en la consola del servidor*/
console.log("servidor levantado...");
/*despacha archivos estaticos*/
app.use("/ejemplos", express.static(__dirname + "/ejemplos"));
app.use("/ejercicios", express.static(__dirname + "/ejercicios"));
app.use("/ejercicios_terminados", express.static(__dirname + "/ejercicios_terminados"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/javascript", express.static(__dirname + "/javascript"));


/****ruta logica y una real***/
