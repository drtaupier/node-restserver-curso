require('./config/config')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })
    }
})

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id });
})

app.listen(process.env.PORT, () => {
    console.log('Listening the port', process.env.PORT);
})