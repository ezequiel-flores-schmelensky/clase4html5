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
/*Hacemos que  la pagina sea dinamica*/ //para obtener las librerias va antes de levantar la pagina 
var consolidate = require("consolidate");/*libreria que nos permite configurar vista*/
var dust = require();//Motor para crear vistas dinamicas
//configurar nuestro motor de vistas
app.set("view engine","dust");//nuestras vistas tendran extension .dust
app.engine("dust", consolidate.dust);//indicamos el engine que voy a utilizar
//indicamos la carpeta que contiene las vistas
app.set("views", __dirname + "/vistas");
