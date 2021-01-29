import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';


const path = require('path');



const server = Server.instance;

// BodyParser
server.app.use( express.static('public') );
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true  }) );


// Rutas de servicios
server.app.use('/', router );

//Servidor
server.app.get('*', (req, res) => {
    res.sendFile( path( __dirname, 'public/index.html' ) );
});


server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});


