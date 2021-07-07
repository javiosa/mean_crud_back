const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

 // creo servidor
 const app = express();
 
 //conecto la DB
conectarDB();


app.use(cors())
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

 const port = 3000;
 app.listen(port, () => {
     console.log('El servidor está en el '+port)
 })