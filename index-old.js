const http = require('http');

http.createServer( (req, res) => {

    res.write("Hola Mundo");

    //Setea el httpStatus y el tipo de dato que regresa la response
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    
    //CSV
    //res.writeHead(200, {'Content-Type' : 'application/csv'});
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    
    //res.write('id, nombre\n');
    //res.write('1, Juan\n');
    //res.write('2, Pedro\n');
    //res.write('3, Ramiro\n');

    //printea lo que hay en la req, muchisima informacion util
    //console.log(req);
    
    res.write("Todo bien");
    res.end();
})
.listen(8080);
