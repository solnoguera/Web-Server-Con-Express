const hbs = require('hbs');
const express = require('express');
require('dotenv').config();

const app = express();
const port = 8080;

//Handlebars
//HBS: Renderizador de vistas con express
app.set('view engine', 'hbs');
//Registrar parciales: Reutilizacion de codigo
hbs.registerPartials(__dirname + '/views/partials');




// Servir contenido estático : 
app.use( express.static('public') );
//Para que express muestre el html con el archivo css, tenemos que nombrar el html como index, igual que el js


//Esta funcion seria el CONTROLADOR
//Se puede mandar un objeto literal con las OPCIONES para usar en el hbs
app.get('/', (req, res) => {
  //El render es para renderizar, ponemos el nombre del archivo q se encuentra en views, que seria el html
  res.render('home', {
    nombre : 'Sol Noguera',
    titulo : 'Curso de node'
  });
});

//No hace falta poner el send con la ruta para que vaya porque creamos una CARPETA en public
//Este codigo no lo va a ejecutar porque prioriza el public
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre : 'Sol Noguera',
    titulo : 'Curso de node'
  });
  });

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre : 'Sol Noguera',
    titulo : 'Curso de node'
  });
});

//El * es un comodin para devolver cuando ponen otra ruta que no esta declarada.
//Lo mandamos a la ruta donde se encuentra el html que queremos mostrar.
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(process.env.PORT);
