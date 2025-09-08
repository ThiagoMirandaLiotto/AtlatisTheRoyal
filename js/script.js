const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.post('/insertar', (req, res) => { 
    var Llegada = req.body.Llegada;
    var Salida = req.body.Salida;
    var Adultos = req.body.Adultos;
    var Niños = req.body.Niños;
    var Habitaciones = req.body.Habitaciones;
    console.log(Llegada, Salida, Adultos, Niños, Habitaciones);

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'alumno',
      password : 'alumnoipm',
      database : 'AtlantisTheRoyal'
    });
     
    connection.connect();
     
    connection.query(`INSERT INTO Reserva VALUES(NULL, "${Llegada}", "${Salida}", ${Adultos},${Niños},${Habitaciones})`, function (error, results, fields) {
      if (error) throw error;
    });

    
     
    connection.end();
})
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
