require('dotenv').config();
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;


//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) { });


//middleware para servir contenido estatico
app.use(express.static('public'));




//rutas
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Patricio Parada',
        titulo: 'Aprendiendo Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Patricio Parada',
        titulo: 'Aprendiendo Node'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Patricio Parada',
        titulo: 'Aprendiendo Node'
    });
})
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.hmtl')
// })

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});