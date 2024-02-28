
const http = require('http');


http.createServer((req, res) => {
    // console.log(req);

    // res.writeHead(200, {'Context-Type': 'text/plain'});

    // const persona = {
    //     id:1,
    //     nombre: eduardo
    // }


    // res.write(JSON.stringify(persona));
    res.write('Hola mundo!')
    res.end();
})
    .listen(8080);


console.log('Escuchando el puerto', 8080)