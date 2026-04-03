const express = require('express');

const cors = require('cors');


 const config = require('./config');


const app = express();


 app.use (cors({

     origin: config.cors.origin,
        credentials: config.cors.Credentials,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
 }))

  app.use(express.json({limit: '10mb'}));

   app.use(express.urlencoded({extended: true, limit: '10mb'}));


    
   app.get('/', (req, res) => {

     res.send('Welcome to the Layered Architecture API');
 });

    module.exports = app;