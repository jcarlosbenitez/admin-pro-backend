const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./dataBase/config");
var cors = require('cors')

//crear el seridor express

const app = express();

//Configurar Cors 
app.use(cors());

//Base de datos
dbConnection()


console.log(process.env)
//rutas

app.get("/", (request, response) => {
  response.json({ ok: true, msg: "Hola mundo" });
});

app.listen(process.env.PORT, () => {
  console.log("servidor corriendo en puerto", + process.env.PORT);
});
