const express = require('express');
const conectarDB = require('./config/db');

 // creo servidor
 const app = express();
 
 //conecto la DB
 conectarDB();

app.use(express.json);

app.use('/api/productos', require('./routes/producto'));

 const port = 4000;
 app.listen(port, ()=>{
     console.log('El servidor está en el '+port)
 })