// npm run dev --> modo desarrollo
// npm start --> modo producción
const express = require('express');
require('dotenv').config();

console.log( process.env );


//Crear servidor de express
const app = express();

//Directorio público
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth') );

// TODO: auth // crear, login renew
// TODO: CRUD: Eventos





//Escuchar peticiones
app.listen(4001, () => {
    console.log(`Servidor activo en el puerto ${ 4001}`);
});


