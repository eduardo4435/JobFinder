const express = require('express');
const app = express();
const db = require('./db/connection')

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express esta rodando na porta ${PORT}`);
});

//db connetion
db
    .authenticate()
    .then(() => {
        console.log("conectado com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar")
    })

//routes
app.get('/', (req, res) => {
    res.end("Está funcionando!");
});