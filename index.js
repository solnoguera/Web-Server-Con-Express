const express = require('express')
const app = express()
const port = 8080;

// Servir contenido estático : 
app.use( express.static('public') );
//Para que express muestre el html con el archivo css, tenemos que nombrar el html como index, igual que el js


//Al tener el uso estatico esto no llega a ejecutarse porque se da prioridad a la carpeta public
app.get('/', (req, res) => {
  res.send('Home Page')
});

//No hace falta poner el send con la ruta para que vaya porque creamos una CARPETA en public
//Este codigo no lo va a ejecutar porque prioriza el public
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World en su respectiva ruta') 
  });

//El * es un comodin para devolver cuando ponen otra ruta que no esta declarada.
//Lo mandamos a la ruta donde se encuentra el html que queremos mostrar.
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
